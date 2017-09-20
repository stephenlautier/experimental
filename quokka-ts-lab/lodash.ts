import * as _ from "lodash";


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