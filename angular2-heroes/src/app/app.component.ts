import "bootstrap/css/bootstrap.css!";
import {Component, OnInit} from "angular2/core";
import config from "./app.config";
import {Hero, HeroDetailComponent, HeroListComponent, HeroService} from "./hero/hero";

@Component({
	selector: "app-heroes",
	templateUrl: `${config.basePath}/app.html`,
	directives: [HeroDetailComponent, HeroListComponent],
	providers: [HeroService],
})
export class AppComponent implements OnInit {

	title = "Tour of Heroes";
	selectedHero: Hero;
	heroes: Hero[];

	constructor(
		private _heroService: HeroService
	) {

	}

	ngOnInit() {
		this.getHeroes();
	}

	getHeroes() {
		this._heroService.getHeroes()
			.then((x: Hero[]) => this.heroes = x);
	}

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}
}