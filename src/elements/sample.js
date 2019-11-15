class SampleElement extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = this._tmp();
  }

  _tmp() {
    return `<p>DOM</p>`;
  }
}

customElements.define("sample-dom", SampleElement);
