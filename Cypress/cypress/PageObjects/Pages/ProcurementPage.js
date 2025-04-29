class ProcurementPage {
  constructor() {
    this.procurement = {
      procurementLink: '',
      settings: '',
      currencySubTab: '',
      addCurrencyButton1: '',
      addCurrencyButton2: "",
      currencyCode: "",
      currencyDescriptionField: "",
      searchBar: "",
      currecnyCodeColum: '',
      purchaseRequest: '',
      purchaseOrder: '',
      goodsArrivalNotification: '',
      quotations: '',
      settings: '',
      reports: '',
      favoriteButton: '',
      //okButton: '', //from-to-date-select td button
      okButton: "",
      printButton: '',
      firstButton: '',
      previousButton: '',
      nextButton: '',
      lastButton: '',
      fromDate: "",
      toDate: "",
      invalidMsg: '',
      requestedDateColumn: '',
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
