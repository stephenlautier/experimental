const Lokka = require("lokka").Lokka;
const Transport = require("lokka-transport-http").Transport;

// note: update also your schema within `graphql-schema.json`
const gqlEndpoint = "http://localhost:47080/api/graphql";

const client = new Lokka({
  transport: new Transport(gqlEndpoint)
});

const query = gql`
	query {
		hero {
			id,
			appearsIn,
			name
		},
		human(id: "1") {
			name
		}
	}
`;
// tslint:disable-next-line:no-unused-expression
query;

client.query(query)
	.then(x => {
		// tslint:disable-next-line:no-unused-expression
		x;
	});


// stub for quokka
function gql(text: TemplateStringsArray) {
	return text.toString();
}