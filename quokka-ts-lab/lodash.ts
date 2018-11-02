import * as _ from "lodash";


const rengar = {
	name: "rengar",
	// level: 1,
	powers: { dmg: 13372 },
	abilities: [{ name: "bola", dmg: 100 }, { name: "savage", dmg: 300 }, ]
};
const rengarUpdate = {
	name: "rengar",
	level: 2,
	powers: { dmg: 1337 },
	abilities: [{ name: "savage", dmg: 310 }, { name: "bola", dmg: 110 }]
};

const fruits = ["apple", "strawberry", "banana"];
const heroes = [{
	key: "rexxar",
	name: "Rexxar",
	role: "tank",
}, {
	key: "jaina",
	name: "Jaina",
	role: "assassin"
}, {
	key: "valeera",
	name: "Valeera",
	role: "assassin",
}, {
	key: "sylvanas",
	name: "Sylvanas",
	role: "specialist",
}, {
	key: "malthael",
	name: "Malthael",
	role: "assassin"
}];
const heroesMap = {
	"rexxar": false,
	"valaha": false,
	"ragnoros": false
};

_.every(heroesMap, (x, y) => {
	console.warn(">>> YOOO ", x, y);
	// return x;
});

const heroMapResult = _.some(heroesMap, x => x);
heroMapResult;

const result = _.chain(heroes)
	.map(x => x.name)
	.take(2)
	.value();

result;

const heroesByRole = _.groupBy(heroes, x => x.role)
heroesByRole

const heroesByRoleList = _.map(heroesByRole, (value, key) => {
	return {
		key,
		heroes: value
	}
});
heroesByRoleList

const titleTemplate = "You chose {{hero.name}}!";
const compiledTemplate = _.template(titleTemplate, {
	interpolate: /{{([\s\S]+?)}}/g
});
const rexxarTitle = compiledTemplate({ hero: { name: "Rexxar" } })
rexxarTitle;

const role = "assassin";
// const role = null;
const filtered = _.filter(heroes, x =>
	(!x.role || !role || role === x.role)
);
filtered
// let filtered = _.chain(heroes);

// if(role)
// 	filtered = filtered.filter(x => x.role === role);

// 	filtered = filtered.filter(x => x.role === role);
// const r = filtered.value();
// r;Pho

export const staticInfoContentKeys = {
	novoline: "provider-novoline"
};

const x = _.values(staticInfoContentKeys);
x;

const years = _.rangeRight(10, 21, 1);
years;
const last = _.last(years);
last;

const y = new Date().getFullYear();
y

const r = y - 18
r;