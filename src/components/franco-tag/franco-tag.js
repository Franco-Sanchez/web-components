const template = document.createElement("template");
template.innerHTML = `
  <article>
    <header>
      <h2>Hello world!</h2>
    </header>
    <button>Click me</button>
  </article>
`;

class FrancoTag extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open'});
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.style.display = "inline-block";
    this.style.backgroundColor = "blue";
    this.style.padding = "20px";
    this.style.color = "white";
    this._shadowRoot.firstElementChild.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") {
        alert("I'm a button");
      }
    });
  }
};

customElements.define('franco-tag', FrancoTag);