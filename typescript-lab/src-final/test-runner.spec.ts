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

		let animals: IAnimal[] = [dog, cow, cat];

		for (let item of animals) {

			if (isCat(item)) {
				item.sleep();
			} else {
				item.name;
			}

			let i: IAnimal = item;

			if (isCat(i)) {
				i.purr();
			} else {
				// i.
			}
		}
	});
});