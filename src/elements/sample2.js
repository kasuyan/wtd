class SampleShadowDOM extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = this._tmp();
  }

  _tmp() {
    return `<p>Shadow DOM</p>`;
  }
}

customElements.define("sample-shadow-dom", SampleShadowDOM);
