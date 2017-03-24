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

const result = _.chain(heroes)
	.map(x => x.name)
	.take(2)
	.value();

result;