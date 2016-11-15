import { string } from "@ssv/core";

console.log(`>>> INITx2 ${string.interpolate("name=:name", { name: "Chiko" })}`);