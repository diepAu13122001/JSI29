import Home from "./pages/home.js";
import Login from "./pages/login.js";
import Register from "./pages/register.js";

class App {
  constructor(component) {
    this.component = component;
    this.mainContainer = document.getElementById("app");
  }

  renderComponent() {
    this.component.render(this.mainContainer);
  }
}

const home = new Home();
const login = new Login();
const register = new Register();

// 1 project = 1 app
const app = new App(register);
// render giao dien
app.renderComponent();

export default app;
