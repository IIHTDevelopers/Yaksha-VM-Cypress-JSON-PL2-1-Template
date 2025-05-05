class HelpDeskPage {
  
  constructor() {
    this.buttons = {
      totalMaleWard: '',
    };
  }

  /**
   * Purpose:
   * @Test3.2 To retrieve and return the total count of Male Ward beds displayed on the UI.
   *
   * Steps:
   * 1. Locate the Male Ward total count element using XPath.
   * 2. Ensure the element is visible on the page.
   * 3. Extract the text content from the element.
   * 4. Trim any extra spaces and convert the text into a number.
   * 5. Return the extracted number for further validation or usage.
   *
   * Additional Info:
   * - Using `.invoke("text")` fetches the text inside the element.
   * - `.trim()` ensures no leading/trailing spaces affect the number parsing.
   */
  verifyTotalMaleWard() {
  }
}

export default new HelpDeskPage();
