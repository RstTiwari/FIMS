import {
    emailVerification,
    passwordVerification,
} from "../../template/emaillTemplate/emailTemplate.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

//lets crete email Transpoter
const tranporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.GMID,
        pass: process.env.GPASS,
    },
});

const sendEmail = async ({ email, name, emailOtp, type }) => {
    try {
        console.log(email,name,type,emailOtp);
        let text  = type === "emailVerification"
            ? emailVerification({ name, emailOtp })
            : passwordVerification({ name, emailOtp });
        console.log(text);
        let info = await tranporter.sendMail({
            from: process.env.myfac8ryEmail,
            to: email,
            subject: "Verify your email | FIMS",
            text: text,
        });
    } catch (error) {
        console.error(error);
    }
};

export default sendEmail;
