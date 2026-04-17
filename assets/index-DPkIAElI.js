(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=class{key;rootElement=null;constructor(){this.key=crypto.randomUUID()}get root(){return this.rootElement||=document.querySelector(`[data-key="${this.key}"]`),this.rootElement}},t={"progress--hidden":`_progress--hidden_18fbe_1`,"progress--animated":`_progress--animated_18fbe_4`,rotation:`_rotation_18fbe_1`,progress__bg:`_progress__bg_18fbe_7`,progress__fill:`_progress__fill_18fbe_10`},n=class extends e{#e=0;#t;#n;#r=100;#i=10;#a=(this.#r-this.#i)/2;constructor(e){super(),this.#u=e?.value||0,this.#t=e?.state||`normal`,this.#n=e?.className||``}setValue(e){this.#u=e,this.#c?.setAttribute(`stroke-dasharray`,this.#s)}setState(e){this.#t=e,this.root?.setAttribute(`class`,this.#o)}render(){return`
            <svg class="${this.#o}" viewBox="0 0 ${this.#r} ${this.#r}" data-key="${this.key}">
				<circle 
					class="${t.progress__bg}"
					cx="${this.#r/2}"
					cy="${this.#r/2}"
					r="${this.#a}"
					stroke-width="${this.#i}"
					fill="transparent"
				></circle>
				<circle 
					class="${t.progress__fill}"
					cx="${this.#r/2}"
					cy="${this.#r/2}"
					r="${this.#a}"
					stroke-width="${this.#i}"
					fill="transparent"
					stroke-dasharray="${this.#s}"
					stroke-dashoffset="${Math.PI*this.#a/2}"
				></circle>
            </svg>
        `}get#o(){return`
			${this.#n}
			${this.#t===`hidden`?t[`progress--hidden`]:``}
			${this.#t===`animated`?t[`progress--animated`]:``}
		`}get#s(){let e=2*Math.PI*this.#a*this.#u/100;return`${e} ${2*Math.PI*this.#a-e}`}get#c(){return this.root?.querySelector(`.${t.progress__fill}`)}get#u(){return this.#e}set#u(e){this.#e=Math.min(Math.max(e,0),100)}},r={"input-container":`_input-container_12i4n_1`,"input-container__input":`_input-container__input_12i4n_8`,input:`_input_12i4n_1`},i=class extends e{#e;#t;#n;#r;constructor(e){super(),this.#e=e.label,this.#t=e.className||``,this.#n=e.value||``}onInput(e){this.#r=e}render(){return queueMicrotask(()=>{this.#i.addEventListener(`input`,()=>{this.#r?.(this.#i.value)})}),`
        	<label class="${this.#t} ${r[`input-container`]}" data-key="${this.key}">
                ${this.#e}
				<input class="${r.input} ${r[`input-container__input`]}" type="text" value="${this.#n}"/>
			</label>
        `}set value(e){this.#i.value=e}get#i(){return this.root?.querySelector(`input`)}},a={"input-container":`_input-container_hinn6_1`,switch:`_switch_hinn6_9`,"switch--active":`_switch--active_hinn6_31`},o=class extends e{#e;#t;#n=!1;#r;#i=null;constructor(e){super(),this.#e=e.text,this.#t=e.className||``}onClick(e){this.#r=e}setState(e){e!==this.#n&&this.#a()}render(){return queueMicrotask(()=>{this.#i=this.root?.querySelector(`.${a.switch}`)||null,this.#i?.addEventListener(`click`,()=>{this.#a(),this.#r?.(this.#n)})}),`
			<label class="${this.#t} ${a[`input-container`]}" data-key="${this.key}">
				${this.#e}
				<span class="${a.switch}"></span>
				<input type="checkbox" hidden />
			</label>
        `}#a(){this.#n=!this.#n,this.#i&&this.#i.classList.toggle(a[`switch--active`])}},s=new i({label:`Value`,className:`control__input`,value:`0`}),c=new o({text:`Animate`,className:`control__input`}),l=new o({text:`Hide`,className:`control__input`}),u=new n({className:`progress-container__progress`});document.querySelector(`#app`).innerHTML=`
	<h2 class="title">Progress</h2>
	<div class="content">
		<div class="progress-container">
			${u.render()}
		</div>
		<div class="control">
			${s.render()}
			${c.render()}
			${l.render()}
		</div>
	</div>
`,s.onInput(e=>{let t=isNaN(Number(e))?0:Math.min(Math.max(Number(e),0),100);s.value=t.toString(),u.setValue(t)}),c.onClick(e=>{e?(u.setState(`animated`),l.setState(!1)):u.setState(`normal`)}),l.onClick(e=>{e?(u.setState(`hidden`),c.setState(!1)):u.setState(`normal`)});