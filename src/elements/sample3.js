class SampleShadowDOM2 extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = this._tmp();
  }

  _tmp() {
    return `
    <style>
      p { color:#00f; }
    </style>
    
    <p>Shadow DOM</p>`;
  }
}

customElements.define("sample-shadow-dom2", SampleShadowDOM2);
