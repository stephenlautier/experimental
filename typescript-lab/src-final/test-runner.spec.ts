import "test-setup";
import {Animal, Cat, isCat, IAnimal} from "./animal";

beforeEach(JasminePromiseMatchers.install);
afterEach(JasminePromiseMatchers.uninstall);

describe("TestRunner", () => {

	it("animal should eat", () => {

		let animal = new Animal("mouse");
		animal.eat("cheese");
		animal.sleep("20");
		animal.sleep(20);

		let dog = new Animal("dog");
		let cow = new Animal("cow");
		let cat = new Animal("cat");

		let animals: Animal[] = [dog, cow, cat];


		for (let item of animals) {
			item.eat("something");
			// 			
			// 			let i: IAnimal = item;
			// 
			// 			if (isCat(i)) {
			// 				i.purr();
			// 			} else {
			// 				i.
			// 			}
		}

	});
});