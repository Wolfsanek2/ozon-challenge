import { BaseComponent } from '../BaseComponent';
import styles from './Progress.module.scss';

type ProgressState = 'normal' | 'animated' | 'hidden';

interface ProgressProps {
	className?: string;
	value?: number;
	state?: ProgressState;
}

export class Progress extends BaseComponent {
	#value: number;
	#state: ProgressState;
	#className: string;
	#size = 100;
	#circleWidth = 10;
	#radius = (this.#size - this.#circleWidth) / 2;

	constructor(props?: ProgressProps) {
		super();
		// Ограничение value от 0 до 100
		this.#value = Math.min(Math.max(props?.value || 0, 0), 100);
		this.#state = props?.state || 'normal';
		this.#className = props?.className || '';
	}

	setValue(value: number) {
		this.#value = value;
		this.#circle?.setAttribute('stroke-dasharray', this.#dashArray);
	}

	setState(state: ProgressState) {
		this.#state = state;
		this.root?.setAttribute('class', this.#classNames);
	}

	render() {
		return `
            <svg class="${this.#classNames}" viewBox="0 0 ${this.#size} ${this.#size}" data-key="${this.key}">
				<circle 
					class="${styles['progress__bg']}"
					cx="${this.#size / 2}"
					cy="${this.#size / 2}"
					r="${this.#radius}"
					stroke-width="${this.#circleWidth}"
					fill="transparent"
				></circle>
				<circle 
					class="${styles['progress__fill']}"
					cx="${this.#size / 2}"
					cy="${this.#size / 2}"
					r="${this.#radius}"
					stroke-width="${this.#circleWidth}"
					fill="transparent"
					stroke-dasharray="${this.#dashArray}"
					stroke-dashoffset="${(Math.PI * this.#radius) / 2}"
				></circle>
            </svg>
        `;
	}

	get #classNames() {
		return `
			${this.#className}
			${this.#state === 'hidden' ? styles['progress--hidden'] : ''}
			${this.#state === 'animated' ? styles['progress--animated'] : ''}
		`;
	}

	get #dashArray() {
		const circumference = (2 * Math.PI * this.#radius * this.#value) / 100;
		return `${circumference} ${2 * Math.PI * this.#radius - circumference}`;
	}

	get #circle() {
		return this.root?.querySelector<SVGCircleElement>(
			`.${styles['progress__fill']}`,
		);
	}
}
