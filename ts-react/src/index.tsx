import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hero } from "./components/hero";

ReactDOM.render(
	<Hero name="Deadpool" ability="Regenerate" />,
	document.getElementById("appRoot")
);