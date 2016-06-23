export type FoodTypeAllowed = "chicken" | "vegg";
export const foodTypeAllowed = {
	chicken: "chicken" as "chicken",
	vegg: "vegg" as "vegg"
};

export class Animal implements IAnimal {

	constructor(
		public name: string
	) {

	}

	eat(food: string): void {
		console.log(`[animal::eat] ${this.name} eats '${food}'`);
	}

	sleep(amount: string | number): void {
		let value: string;
		if (typeof amount === "number") {
			value = amount.toFixed(2);
		} else {
			value = amount;
		}

		console.log(`[animal::sleep] ${this.name}' sleeps for ${value}`);
	}

	purr(): void {
		console.log(`[animal::purr] ${this.name}'`);
	}
}

export interface IAnimal {
	name: string;
}

export interface Cat extends IAnimal {
	sleep(): void;
	purr(): void;
}

export function isCat(animal: IAnimal): animal is Cat {
	if (animal.name === "cat") {
		return true;
	} else {
		return false;
	}
}