// shadow dom and
class SampleShadowDOM3 extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = this._tmp();

    const button = shadowRoot.querySelector(".toggle-button");
    button.addEventListener("click", this.onHidden);
  }

  static get observedAttributes() {
    console.log("observedAttributes");
    return ["color"];
  }

  get color() {
    console.log("get color");
    return this.getAttribute("color");
  }

  set color(val) {
    console.log("set color");
    this.setAttribute("color", val);
    console.log("set color", this.color);
    this.shadowRoot.innerHTML = this._tmp();
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

  onHidden = e => {
    console.log("onHidden");
    if (this.color === "#fff") {
      this.color = "#0f0";
    } else {
      this.color = "#fff";
    }
  };

  _tmp() {
    console.log(this.color);
    return `
      <style>
        p { color: ${this.color}; }
      </style>
      <p>Shadow DOM. this color is ${this.color}</p>
      <button class="toggle-button">hidden Shadow DOM</button>
    `;
  }
}

customElements.define("sample-shadow-dom3", SampleShadowDOM3);
