class Input extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = this._render();

    const button = shadowRoot.querySelector(".submit");
    button.addEventListener("click", this.onSubmit);
  }

  onSubmit() {
    console.log("submit!!");
    const taskList = customElements.get("tasks-list");
    console.log(taskList);
    console.log(taskList.addItem);
    taskList.addItem = { id: 12, label: "bbbbb" };
  }

  _render = () => {
    return `
    <style>
      div {
        background-color: #F9DF74;
        padding: 8px;
        position: sticky;
        bottom: 0;
      }

      textarea {
        display: block;
        width: 100%;
        height: 4rem;
        margin-bottom: 12px;
      }

      button {
        width: 100%;
        padding: 8px;
        background-color: #EDAE49;
      }
    </style>

    <div>
      <textarea type="text" value=""></textarea>
      <button class="submit">送信</button>
    </div>
    `;
  };
}

customElements.define("wtd-input", Input);
