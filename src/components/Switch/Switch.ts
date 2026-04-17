import { BaseComponent } from '../BaseComponent';
import styles from './Switch.module.scss';

interface SwitchProps {
	className?: string;
	text: string;
}

export class Switch extends BaseComponent {
	#text: string;
	#className: string;
	#state: boolean = false;
	#onClick?: (state: boolean) => void;
	#switchElement: Element | null = null;

	constructor(props: SwitchProps) {
		super();
		this.#text = props.text;
		this.#className = props.className || '';
	}

	onClick(callback: (state: boolean) => void) {
		this.#onClick = callback;
	}

	setState(state: boolean) {
		if (state !== this.#state) {
			this.#toggleState();
		}
	}

	render() {
		queueMicrotask(() => {
			this.#switchElement =
				this.root?.querySelector(`.${styles['switch']}`) || null;
			this.#switchElement?.addEventListener('click', () => {
				this.#toggleState();
				this.#onClick?.(this.#state);
			});
		});
		return `
			<label class="${this.#className} ${styles['input-container']}" data-key="${this.key}">
				${this.#text}
				<span class="${styles['switch']}"></span>
				<input type="checkbox" hidden />
			</label>
        `;
	}

	#toggleState() {
		this.#state = !this.#state;
		if (this.#switchElement) {
			this.#switchElement.classList.toggle(styles['switch--active']);
		}
	}
}
