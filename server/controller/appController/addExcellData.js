import xlsx from "xlsx";
import dropdownData from "../../models/appModels/dropdownData.js";
const partyData = xlsx.readFile("partyCopy.xlsx");
const sheetName = partyData.SheetNames[0];
const sheet = partyData.Sheets[sheetName];
const jsonData = xlsx.utils.sheet_to_json(sheet);

const data = [
    {
        entity: "partyType",
        data: [
            {
                label: "Client",
                value: "Client",
            },
            {
                label: "Vendor",
                value: "Vendor",
            },
        ],
    },
    {
        entity: "firmType",
        data: [
            {
                label: "Proprietorship",
                value: "Proprietorship",
            },
            {
                label: "Pvt Ltd",
                value: "Pvt Ltd",
            },
            {
                label: "LLP",
                value: "LLP",
            },
            {
                label: "Partnership",
                value: "Partnership",
            },
        ],
    },
    {
        entity: "states",
        data: [
            { label: "ANDHRA PRADESH", value: "ANDHRA_PRADESH" },
            { label: "ARUNACHAL PRADESH", value: "ARUNACHAL_PRADESH" },
            { label: "ASSAM", value: "ASSAM" },
            { label: "BIHAR", value: "BIHAR" },
            { label: "CHHATTISGARH", value: "CHHATTISGARH" },
            { label: "GOA", value: "GOA" },
            { label: "GUJARAT", value: "GUJARAT" },
            { label: "HARYANA", value: "HARYANA" },
            { label: "HIMACHAL PRADESH", value: "HIMACHAL_PRADESH" },
            { label: "JHARKHAND", value: "JHARKHAND" },
            { label: "KARNATAKA", value: "KARNATAKA" },
            { label: "KERALA", value: "KERALA" },
            { label: "MADHYA PRADESH", value: "MADHYA_PRADESH" },
            { label: "MAHARASHTRA", value: "MAHARASHTRA" },
            { label: "MANIPUR", value: "MANIPUR" },
            { label: "MEGHALAYA", value: "MEGHALAYA" },
            { label: "MIZORAM", value: "MIZORAM" },
            { label: "NAGALAND", value: "NAGALAND" },
            { label: "ODISHA", value: "ODISHA" },
            { label: "PUNJAB", value: "PUNJAB" },
            { label: "RAJASTHAN", value: "RAJASTHAN" },
            { label: "SIKKIM", value: "SIKKIM" },
            { label: "TAMIL NADU", value: "TAMIL_NADU" },
            { label: "TELANGANA", value: "TELANGANA" },
            { label: "TRIPURA", value: "TRIPURA" },
            { label: "UTTAR PRADESH", value: "UTTAR_PRADESH" },
            { label: "UTTARAKHAND", value: "UTTARAKHAND" },
            { label: "WEST BENGAL", value: "WEST_BENGAL" },
        ],
    },
    {
        entity: "country",
        data: [
            {
                label: "india",
                value: "india",
            },
        ],
    },
];

const addExcellData = async (req,res,next) => {
    const database = req.database
    for (let item of data) {
        console.log(item,database);
        const temData = new database(item);
        await temData.save();
    }
    res.status(200).json({
        success:1,
        data:[]
    })
};

export default addExcellData
