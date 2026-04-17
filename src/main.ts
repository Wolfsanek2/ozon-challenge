import './style.scss';
import { Input, Progress, Switch } from '@/components';

const valueInput = new Input({
	label: 'Value',
	className: 'control__input',
	value: '0',
});

const animateSwitch = new Switch({
	text: 'Animate',
	className: 'control__input',
});

const hideSwitch = new Switch({
	text: 'Hide',
	className: 'control__input',
});

const progress = new Progress({ className: 'progress-container__progress' });

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
	<h2 class="title">Progress</h2>
	<div class="content">
		<div class="progress-container">
			${progress.render()}
		</div>
		<div class="control">
			${valueInput.render()}
			${animateSwitch.render()}
			${hideSwitch.render()}
		</div>
	</div>
`;

valueInput.onInput((value) => {
	const normalizedValue = isNaN(Number(value))
		? 0
		: Math.min(Math.max(Number(value), 0), 100);
	console.log(normalizedValue);
	valueInput.value = normalizedValue.toString();
	progress.setValue(normalizedValue);
});

animateSwitch.onClick((status) => {
	if (status) {
		progress.setState('animated');
		hideSwitch.setState(false);
	} else {
		progress.setState('normal');
	}
});

hideSwitch.onClick((status) => {
	if (status) {
		progress.setState('hidden');
		animateSwitch.setState(false);
	} else {
		progress.setState('normal');
	}
});
