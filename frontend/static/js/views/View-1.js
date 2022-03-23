import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("View");
    }

    async getHtml() {
        return `
        <h1>View 1</h1>
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At blanditiis porro reiciendis culpa dolorum beatae, minus magni autem sint.
        </p>
        <p>
            <a href="/otherview" data-link>Link to other view</a>
        </p>
        `;
    }
}