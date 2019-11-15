class TasksList extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = this._tmp();
    this.innerHTML = this._tmp();
  }

  _tmp() {
    return `<p>abc</p>`;
  }
}

customElements.define("tasks-list", TasksList);
