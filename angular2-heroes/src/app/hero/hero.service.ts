import {Injectable} from "angular2/core";
import {Hero} from "./hero.model";
import {Heroes} from "./mock-heroes";


@Injectable()
export class HeroService {
	getAll(): Promise<Hero[]> {
		return Promise.resolve(Heroes);
	}

	getByKey(key: string): Promise<Hero> {
		return this.getAll().then(x => {
			//TODO: implement
			return x[0];
		});
	}
}