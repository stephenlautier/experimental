import {Component, Input, EventEmitter, Output} from "angular2/core";
import config from "../app.config";
import {Hero} from "./hero.model";

@Component({
	selector: "my-hero-list",
	templateUrl: `${config.basePath}/hero/hero-list.html`,
})
export class HeroListComponent {
	@Input() heroes: Hero[];

	@Output() selectHero = new EventEmitter();

	onSelect(hero: Hero) {
		this.selectHero.emit(hero);
	}
}