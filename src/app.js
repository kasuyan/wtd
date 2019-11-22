import "/elements/header.js";
import "/elements/list.js";
import "/elements/input.js";

class App extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = this._render();
  }

  _render = () => {
    return `
      <wtd-header></wtd-header>
      <tasks-list></tasks-list>
      <wtd-input></wtd-input>
    `;
  };
}

customElements.define("wtd-app", App);
