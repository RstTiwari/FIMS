import xlsx from "xlsx";

import party from "./models/appModels/party.js";

const partyData = xlsx.readFile("partyCopy.xlsx");
const sheetName = partyData.SheetNames[0];
const sheet = partyData.Sheets[sheetName];
const jsonData = xlsx.utils.sheet_to_json(sheet);

console.log(jsonData, typeof jsonData);
const addData = async () => {
    for (let data of jsonData) {
        console.log(data);
        await party.insertOne(data);
    }
};

addData();
