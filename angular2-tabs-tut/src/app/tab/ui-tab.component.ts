import {Component, ContentChildren, QueryList} from "angular2/core";
import {UiPane} from "./ui-pane.directive";
import config from "../app.config";

@Component({
	selector: "ui-tabs",
	templateUrl: `${config.basePath}/tab/ui-tab.html`
})
export class UiTabs {
	@ContentChildren(UiPane) panes: QueryList<UiPane>;

	select(pane: UiPane) {
		this.panes.toArray().forEach((p: UiPane) => p.active = p === pane);
	}
}