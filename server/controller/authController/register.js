import bcrypt from "bcryptjs";
import Joi from "joi";
import { generate as uniqueId } from "shortid";
import User from "../../models/coreModels/User.js";
import UserPassword from "../../models/coreModels/UserPassword.js";
import sendEmail from "../authController/sendEmail.js";

const register = async (req, res, next, userDb, userPasswordDb) => {
    const { name, email, password } = req.body;

    //validate input parameters
    const ObjectSchema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string()
            .email({ tlds: { allow: true } })
            .required(),
        password: Joi.string().required(),
    });
    const { error, value } = ObjectSchema.validate({
        name,
        email,
        password,
    });

    if (error) {
        return res.status(409).json({
            success: 0,
            result: null,
            message: "Invalid/Missing credentials",
        });
    }
    const existingUser = await userDb.findOne({ email: email, removed: false });
    if (existingUser) {
        return res.status(409).json({
            success: 0,
            result: null,
            message: "A User with same email is Present.",
        });
    }


    /**
     * Creating a New User
     */
    const salt = uniqueId();
    const hashedPassword = bcrypt.hashSync(salt + password);


    const savedUser = await User.create({ email, name});
    const registrationDone = await userPasswordDb.create({
        userId: savedUser._id,
        password: hashedPassword,
        salt: salt,
    });

    if (!registrationDone) {
        await User.deleteOne({ _id: savedUser._id }).exec();
        return res.status(403).json({
            success: 0,
            result: null,
            message: "document couldn't save correctly",
        });
    }
 

   return res.status(200).json({
        success: 1,
        result: {
            userId: savedUser._id,
            name: savedUser.name,
            email: savedUser.email,
        },
        message:
            "Account registered successfully. Please check mail and verify.",
    });
};

export default register;
