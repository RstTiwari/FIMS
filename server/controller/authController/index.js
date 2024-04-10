import register from "./register.js";
import login from "./login.js";
import userPasswordDb from "../../models/coreModels/UserPassword.js";
import userDb from "../../models/coreModels/User.js";
import isValidAuthtoken from './isValidAuthtoken.js';
import forgetpassword from "./forgetPassword.js";
import updatePassword from "./updatePassword.js"

const authRoutes = {
    register: (req, res, next) => {
        register(req, res, next, userDb, userPasswordDb);
    },
    login: (req, res, next) => {
        login(req, res, next, userDb, userPasswordDb);
    },
    isValidAuthtoken: (req, res, next) => {
        isValidAuthtoken(req, res, next, userDb, userPasswordDb);
    },
    forgetPassword: (req, res, next) => {
        forgetpassword(req, res, next, userDb, userPasswordDb);
    },
    updatePassword:(req,res,next)=>{
        updatePassword(req,res,next,userDb,userPasswordDb)
    }
};

export default authRoutes;
