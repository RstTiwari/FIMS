import dropDownData from "./dropdownData.js"

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

};



export default appController
