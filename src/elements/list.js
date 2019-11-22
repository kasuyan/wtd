class TasksList extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    this.data = [
      { id: 1, label: "aaaaa" },
      { id: 2, label: "aaaaa" },
      { id: 3, label: "aaaaa" },
      { id: 4, label: "aaaaa" },
      { id: 5, label: "aaaaa" },
      { id: 6, label: "aaaaa" },
      { id: 7, label: "aaaaa" },
      { id: 8, label: "aaaaa" },
      { id: 9, label: "aaaaa" },
      { id: 10, label: "aaaaa" },
      { id: 11, label: "aaaaa" }
    ];
    shadowRoot.innerHTML = this._render();
  }

  static set addItem(item) {
    console.log("!!!!", item);
    console.log(typeof this, this.data, this.addItem);
    this.data.unshift(item);
  }

  set deleteItem(id) {
    this.data.some((item, index) => {
      if (item.id === id) {
        this.data.splice(index, 1);
      }
    });
  }

  renderItems() {
    let items = "";
    this.data.forEach(item => {
      items += `
      <li>
        ${item.label}
      </li>`;
    });
    return items;
  }

  _render = () => {
    this.addItem = { id: 12, label: "bbbbb" };
    this.deleteItem = 12;
    return `
    <style>
    ul {
      margin-bottom: 120px;
    }
    li {
      margin-bottom: 36px;
    }
    </style>
    <ul>
      ${this.renderItems()}
    </ul>`;
  };
}

customElements.define("tasks-list", TasksList);
