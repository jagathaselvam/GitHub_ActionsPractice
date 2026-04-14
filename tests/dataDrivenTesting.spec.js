import { test } from "@playwright/test";
import { LoginPage1 } from "../tests/pages/loginPage1";
//import logindata from "../testData/dataDrivenTestData.json";
import data from "../testData/adactinTestData.json";
import { excelReader } from "../utils/excelReader";

const logindata = excelReader();
for (let DD of logindata) {
  test(`DataDriven Testing using ${DD.userName} and ${DD.password}`, async ({
    page,
  }) => {
    const logObj1 = new LoginPage1(page);

    await logObj1.navigate(data.url);
    await logObj1.loginMethod(DD.userName, DD.password, DD.result);
  });
}
