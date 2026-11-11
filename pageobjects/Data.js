const XLSX = require('xlsx');

function getExcelData(SheetOne) 
{
    const workbook = XLSX.readFile('../pageobjects/UtilData.xlsx');
    const worksheet = workbook.Sheets[SheetOne];
    const data = XLSX.utils.sheet_to_json(worksheet);
    return data;
}

module.exports = { getExcelData };