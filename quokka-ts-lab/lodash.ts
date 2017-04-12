import * as _ from "lodash";


const fruits = ["apple", "strawberry", "banana"];
const heroes = [{
	name: "rexxar",
}, {
	name: "jaina"
}, {
	name: "valeera"
}, {
	name: "zul'jin"
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