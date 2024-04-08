
class Login {  
  constructor() {
    this.username = 'input[name=username]';
    this.password = 'input[name=password]';
    this.submitButton = 'button[type="submit"]';
  }


  getUsername(username) {
    return cy.get(this.username).type(username)
  }

  getPassword(password) {
    return cy.get(this.password).type(password)
  }

  clickSubmitButton() {
    return cy.get(this.submitButton).click()
  }

  login(username, password) {
    cy.visit('/login'); // Assuming the login page URL is '/login'
    getUsername().type('Admin');
    getPassword().type('admin123');
    clickSubmitButton().click();
  }


}
export default Login