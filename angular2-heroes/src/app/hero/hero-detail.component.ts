import {Component, Input} from "angular2/core";
import config from "../app.config";
import {Hero} from "./hero.model";

@Component({
	selector: "my-hero-detail",
	templateUrl: `${config.basePath}/hero/hero-detail.html`
})
export class HeroDetailComponent {

	@Input() hero: Hero;
}