import {Injectable} from "angular2/core";
import {Hero} from "./hero.model";
import {Heroes} from "./mock-heroes";


@Injectable()
export class HeroService {
	getHeroes(): Promise<Hero[]> {
		return Promise.resolve(Heroes);
	}
}