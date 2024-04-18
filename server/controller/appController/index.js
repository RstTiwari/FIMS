import dropDownData from "./dropdownData.js"
import addDropDownData from "./addDropDownData.js";
import create from "../appController/create.js"


import  addExcellData  from "./addExcellData.js";


const appController = {
    /**
     * 
     * @param {entity name of module} req 
     * @param {data an array of lable and value} res 
     * @param {*} next 
     */
    dropDownData: (req, res, next) => {
        dropDownData(req,res,next)
    },

    addDropDownData:(req,res,next)=>{
        addDropDownData(req,res,next)
    },

    create:(req,res,next)=>{
        create(req,res,next)
    },

    /* 
    Adding excell Datas
    */
    addExcellData:(req,res,next)=>{
        addExcellData(req,res,next)
     }

};



export default appController
