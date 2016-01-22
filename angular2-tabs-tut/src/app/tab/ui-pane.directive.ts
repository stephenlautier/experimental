import {Directive, Input, ViewContainerRef, TemplateRef } from "angular2/core";

@Directive({
	selector: "[ui-pane]"
})
export class UiPane {
	@Input() title: string;
	private _active = false;

	constructor(
		public viewContainer: ViewContainerRef,
		public templateRef: TemplateRef
	) {

	}

	@Input() set active(active: boolean) {
		if (active === this._active) {
			return;
		}

		this._active = active;

		if (active) {
			this.viewContainer.createEmbeddedView(this.templateRef);
		} else {
			this.viewContainer.remove(0);
		}
	}

	get active(): boolean {
		return this._active;
	}


}