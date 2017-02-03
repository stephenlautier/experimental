import * as React from "react";
import { Hero } from "./hero";

export class AppShell extends React.Component<undefined, undefined> {
	render() {
		return <Hero name="Deadpool" ability="Regenerate" />;
	}
}