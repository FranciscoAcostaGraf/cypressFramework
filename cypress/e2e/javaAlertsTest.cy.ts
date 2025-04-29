
import { AlertsPage } from "../pages/AlertsPage";

describe("Alerts Test", () => {
  const alertsPage = new AlertsPage();

  it("should see the diferent alerts successfully", () => {
    alertsPage.visit();
    alertsPage.jsAlert();
    alertsPage.jsAlertConf();
    alertsPage.jsAlertPrompt();
  });
});