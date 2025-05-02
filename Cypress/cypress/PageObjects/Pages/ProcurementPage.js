class ProcurementPage {
  constructor() {
    this.procurement = {
      procurementLink: 'a[href="#/ProcurementMain"]',
      settings: '//a[contains(text(),"Settings")]',
      currencySubTab: 'a[routerlink="CurrencyList"]',
      addCurrencyButton1: 'input[value="Add Currency"]',
      addCurrencyButton2: "input#AddCurrency",
      currencyCode: "input#CurrencyCode",
      currencyDescriptionField: "input#Description",
      searchBar: "input#quickFilterInput",
      currecnyCodeColum: 'div[col-id="CurrencyCode"]',

      purchaseRequest: 'a:contains("Purchase Request")',
      purchaseOrder: '(//a[contains(text(),"Purchase Order")])[1]',
      goodsArrivalNotification:
        '//a[contains(text(),"Goods Arrival Notification")]',
      quotations: '//a[contains(text(),"Quotation")]',
      settings: '//a[contains(text(),"Settings")]',
      reports: '//a[contains(text(),"Reports")]',
      favoriteButton: '//i[contains(@class,"icon-favourite")]',
      //okButton: '//button[contains(text(),"OK")]', //from-to-date-select td button
      okButton: "from-to-date-select td button",
      printButton: '//button[text()="Print"]',
      firstButton: '//button[text()="First"]',
      previousButton: '//button[text()="Previous"]',
      nextButton: '//button[text()="Next"]',
      lastButton: '//button[text()="Last"]',
      fromDate: "danphe-date-picker input:nth-child(1)",
      toDate: "danphe-date-picker input:nth-child(1)",
      invalidMsg: '//div[contains(@class,"invalid-msg-cal")]',
      requestedDateColumn: 'div[col-id="RequestDate"]',
    };
  }

  /**
   * Purpose:
   * @Test14.2 This function verifies that all dates in the "Requested Date" column of a table are within the specified date range.
   * It accepts `testData` as input, which contains the "FromDate" and "ToDate" for the date range.
   * It checks whether each date in the "Requested Date" column is within the provided date range.
   *
   * Steps:
   * 1. Extract the "FromDate" and "ToDate" from `testData` and log them.
   * 2. Apply the "FromDate" and "ToDate" values as filters in the respective input fields.
   * 3. Wait for the table to update.
   * 4. Parse the "FromDate" and "ToDate" into Date objects for comparison.
   * 5. Retrieve and parse each date in the "Requested Date" column.
   * 6. Compare each "Requested Date" to ensure it's within the range. If any date is out of range, log it and stop further checking.
   *
   * Preconditions:
   * - Ensure the table and date fields are visible and interactable before performing actions.
   * - Ensure the dates in the "Requested Date" column are formatted consistently (dd-mm-yyyy).
   */
  verifyRequestedDateColumnDateWithinRange(testData) {
  }
}

export default ProcurementPage;
