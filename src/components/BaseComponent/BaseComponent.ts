export class BaseComponent {
	protected key: string;
	protected rootElement: Element | null = null;

	constructor() {
		this.key = crypto.randomUUID();
	}

	protected get root() {
		if (!this.rootElement) {
			this.rootElement = document.querySelector(
				`[data-key="${this.key}"]`,
			);
		}
		return this.rootElement;
	}
}
