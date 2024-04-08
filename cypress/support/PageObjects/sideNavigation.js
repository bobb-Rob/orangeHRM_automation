class SideNavigation {
    constructor() {
        this.sideNavItemName = 'a.oxd-main-menu-item > span';
    }

    getNavItem(name) {
      return cy.get(this.sideNavItemName).contains(name);
    }
}

export default SideNavigation;