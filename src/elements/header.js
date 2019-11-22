class Header extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = this._render();
  }

  _render = () => {
    return `
      <style>
        header {
          text-align: center;
          font-weight: 600;
          letter-spacing: 2px;
          position: sticky;
          top: 0;
          background-color: #F9EDCC;
          color: #61210F;
          padding: 6px;
        }
      </style>
      <header>WTD</header>
    `;
  };
}

customElements.define("wtd-header", Header);
