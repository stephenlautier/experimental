import "bootstrap/css/bootstrap.css!";
import {Component} from "angular2/core";
import {UiPane, UiTabs, PaneModel} from "./tab/tab";
import config from "./app.config";

@Component({
	selector: "app-tabs-demo",
	templateUrl: `${config.basePath}/app.html`,
	directives: [UiPane, UiTabs]
})
export class AppComponent {

	details: PaneModel[] = [];
	id = 0;

	addDetail() {
		this.id++;
		this.details.push({
			title: `Detail ${this.id}`,
			text: `Some detail text for ${this.id}...`
		});
	}

	removeDetail(detail: PaneModel) {
		this.details = this.details.filter((d: PaneModel) => d !== detail);
	}
}