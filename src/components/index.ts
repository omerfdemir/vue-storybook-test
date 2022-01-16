import Vue, { VueConstructor } from "vue";
import MbButton from "./MbButton.vue";
interface IObjectKeys {
	[key: string]: VueConstructor;
}
const Components: IObjectKeys = {
	MbButton,
};

Object.keys(Components).forEach((name) => {
	Vue.component(name, Components[name]);
});

export default Components;
