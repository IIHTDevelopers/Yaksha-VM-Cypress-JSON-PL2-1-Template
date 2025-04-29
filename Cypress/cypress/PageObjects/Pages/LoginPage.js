import loginData from "../../fixtures/Data/ValidLogin.json";

class LoginPage {
  user = "";
  pass = "";
  signIn = "";
  errorMsg = "";
  admin = "";
  logout = "";

  /**
   * @Test0 This method logs in the user with valid credentials.
   *
   * @description This method performs the login operation using the provided valid credentials. It highlights the input
   *              fields for better visibility during interaction and fills the username and password fields. After submitting
   *              the login form by clicking the login button, it validates the success of the login process. The login is
   *              considered successful if there are no errors.
   */
  performLogin() {
  }

  /**
   * @Test15
   * @description This method verifies the logout functionality from the Admin dropdown.
   * @expected
   * User is logged out successfully and the login page is displayed.
   */
  verifyLogoutFunctionality() {
  }
}

export default LoginPage;
