export default class CustomPage {

  constructor() {
    this.buttons = {
      reportsButton: "",
      schemeRefundTab: '',
      counterItem: "",
      newSchemenRefundEntryButton: "",
      saveSchemeRefundButton: "",
      warningPopup: "",
      bookAppointmentButton: "",
      newPatientButton: "",
      firstNameField: "",
      lastNameField: "",
      maleCheckbox: "",
      ageField: "",
      contactNumberField: "",
      appointmenttimeField: "",
    };
  }

  /**
   * Purpose:
   * @Test1.1 @Test2.1 @Test3.1 @Test3.3 @Test4.1 @Test5.1 @Test6.1 @Test7.1 @Test8.1 @Test9.1 @Test10.2 @Test11.1 @Test12.1 @Test13.1 @Test14.1 To navigate to a specific page within the application by appending a relative path to the base URL.
   *
   * Steps:
   * 1. Define the base URL of the application.
   * 2. Append the given relative path to the base URL to form the full URL.
   * 3. Use Cypress `cy.visit()` to navigate to the constructed URL.
   * 4. Wait for 2 seconds to ensure the page loads completely (optional but helpful for stability).
   * 5. Log the full URL in the console for debugging and tracking purposes.
   *
   * Additional Info:
   * - `cy.wait(2000)` is used here for stability, but explicit waits should be avoided unless necessary.
   * - Useful for navigation in modular or multi-page applications.
   */
  navigateToCustomUrl(relativePath) {
  }

  createNewPatient(data) {
  }
}
