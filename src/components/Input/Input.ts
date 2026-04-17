import { BaseComponent } from '../BaseComponent';
import styles from './Input.module.scss';

interface InputProps {
	className?: string;
	label: string;
	value?: string;
}

export class Input extends BaseComponent {
	#label: string;
	#className: string;
	#value: string;
	#onInput?: (value: string) => void;

	constructor(props: InputProps) {
		super();
		this.#label = props.label;
		this.#className = props.className || '';
		this.#value = props.value || '';
	}

	onInput(callback: (value: string) => void) {
		this.#onInput = callback;
	}

	render() {
		queueMicrotask(() => {
			this.#input.addEventListener('input', () => {
				this.#onInput?.(this.#input.value);
			});
		});
		return `
        	<label class="${this.#className} ${styles['input-container']}" data-key="${this.key}">
                ${this.#label}
				<input class="${styles['input']} ${styles['input-container__input']}" type="text" value="${this.#value}"/>
			</label>
        `;
	}

	set value(value: string) {
		this.#input.value = value;
	}

	get #input() {
		return this.root?.querySelector('input') as HTMLInputElement;
	}
}
