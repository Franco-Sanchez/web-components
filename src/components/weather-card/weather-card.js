const template = document.createElement("template");
template.innerHTML = `
  <article class="card">
    <div class="card-body"></div>
  </article>
`;

class WeatherCard extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' })
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }

  get longitude() {
    return this.getAttribute('longitude');
  }

  get latitude() {
    return this.getAttribute('latitude');
  }

  async connectedCallback() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${this.latitude}&lon=${this.longitude}&appid=4315c11d495e4dbe1759c2342bf1e8ac`);
    const data = await response.json();
    this.card = this._shadowRoot.querySelector(".card-body");
    const townName = document.createElement("p");
    townName.textContent = `Town: ${data.name}`;
    this.card.appendChild(townName);
    const temperature = document.createElement("p");
    temperature.textContent = `${parseInt(data.main.temp - 273)} °C`;
    this.card.appendChild(temperature);
  }
}

customElements.define('weather-card', WeatherCard);