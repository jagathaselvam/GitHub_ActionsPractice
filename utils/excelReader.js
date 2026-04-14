import XLSX from "xlsx";

export function excelReader() {
  const path = "testData/utils.xlsx";
  const workBook = XLSX.readFile(path);
  const sheetName = workBook.SheetNames[0];
  const workSheet = workBook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(workSheet);
  return data;
}
