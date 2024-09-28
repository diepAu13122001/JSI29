export default class Nav {
  constructor() {}

  render(mainContainer) {
    const nav = document.createElement("nav");
    nav.classList.add("navbar", "bg-body-tertiary");

    const divContainer = document.createElement("div");
    divContainer.classList.add("container-fluid");

    const logoLink = document.createElement("a");
    logoLink.classList.add("navbar-brand");
    logoLink.innerText = "TodoList";
    // bat su kien cho link
    logoLink.href = "./index.html";
    // add in div container
    divContainer.appendChild(logoLink);

    const divButton = document.createElement("div");
    divButton.classList.add("d-flex");

    const loginButton = document.createElement("button");
    loginButton.classList.add("btn", "btn-outline-success");
    // bat su kien cho nut login
    loginButton.innerText = this.checkLogin(loginButton);

    // add button vao div button
    divButton.appendChild(loginButton);
    // add div button vao container
    divContainer.appendChild(divButton);

    // add container vao nav
    nav.appendChild(divContainer);

    mainContainer.appendChild(nav);
  }

  checkLogin(loginButton) {
    // check current user in local storage
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      // bat su kien button
      loginButton.onclick = this.gotoLogout;
      return "Logout";
    } else {
      // bat su kien button
      loginButton.onclick = this.gotoLogin;
      return "Login";
    }
  }

  gotoLogin() {
    window.location.href = "./pages/login.html";
  }

  gotoLogout() {
    // xoa du lieu trong local storage
    localStorage.removeItem("currentUser");
    window.location.href = "./index.html";
  }
}
