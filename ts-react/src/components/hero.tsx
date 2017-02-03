import * as React from "react";

export interface HeroProps {
	name: string;
	ability: string;
}

// export const Hero = (props: HeroProps) =>
// 	<h1>Hero '{props.name}' with {props.ability}!</h1>

export class Hero extends React.Component<HeroProps, undefined> {
	render() {
		return <h1>{this.props.name} casts {this.props.ability}!</h1>;
	}
}