/// <reference types="cypress"  />
import LoginPage from '../support/PageObjects/login';
import SideNavigation from '../support/PageObjects/sideNavigation';

describe('Admin Management', () => {  
  let loginCredentials;
  let sideNav;
  beforeEach(() => {
    cy.fixture('userData').then((data) => {
      loginCredentials = data;
    });
    const loginPage = new LoginPage();
    loginPage.login(loginCredentials.username, loginCredentials.password);
    sideNav = new SideNavigation();
  })
  it('should create, edit, and delete an admin', () => {
    sideNav.getNavItem('Admin').click();
  })
})