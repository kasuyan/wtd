class SampleShadowDOM3 extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = this._tmp();
  }

  get color() {
    return this.getAttribute("color");
  }

  static get observedAttributes() {
    console.log("observedAttributes");
    return ["color"];
  }

  set color(val) {
    this.setAttribute("color", val);
    console.log("set color", this.color);
  }

  connectedCallback() {
    console.log("connectedCallback");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(
      "attributeChangedCallback",
      name,
      oldValue,
      newValue,
      this.color
    );
  }

  _tmp() {
    return `
    <style>
      ${console.log("in tmp", this.color)}
      p { color:${this.color}; }
    </style>
    
    <p>Shadow DOM</p>`;
  }
}

customElements.define("sample-shadow-dom3", SampleShadowDOM3);
