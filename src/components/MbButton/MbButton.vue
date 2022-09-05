<template>
	<button type="button" :class="classes" @click="onClick" :style="style">{{ label }}</button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class MbButton extends Vue {
	@Prop({ required: true })
	public label!: string;

	@Prop({ default: false })
	public primary!: boolean;

	@Prop({
		default: "medium",
		validator: function (value) {
			return ["small", "medium", "large"].indexOf(value) !== -1;
		},
	})
	public size!: string;

	@Prop()
	public backgroundColor!: string;

	get classes() {
		return {
			"mb-button": true,
			"mb-button--primary": this.primary,
			"mb-button--secondary": !this.primary,
			[`mb-button--${this.size}`]: true,
		};
	}

	get style() {
		return {
			backgroundColor: this.backgroundColor,
		};
	}

	public onClick() {
		this.$emit("onClick");
	}
}
</script>

<style lang="css" src="./MbButton.scss"></style>
