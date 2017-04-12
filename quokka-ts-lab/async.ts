async function main() {
	const fruits = ["apple", "strawberry", "banana"];

	// await Promise.all(fruits.map(x => get(x)));

	for (const fruit of fruits) {
		await get(fruit);
	}
}

async function get(key) {
	console.log("get::init", key);
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("get::resolving...", key);
			resolve();
		}, 1000);
	});
}

const r = main().then(x => {
	console.log("main - complete!");
});