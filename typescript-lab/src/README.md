
# Topics
- Intro
	- Static type analysis.. nice build errors!
	- Just typings NOT runtime!
	- Transpiles (Compiles) down to JS
	- Allows us to use JS features of tomorrow
	- If you're familiar with C# or Java you will love it :)
- Class
	- Creating new object
- Template Strings
- Methods
	- Optional parameters
- Typings - boolean, number, void, array, any
	- Optional properties
- Class CTOR params
	- CTOR with accessor modifier
- Enums
	- Normal Enum
	- Const Enum
- Interfaces
- Access Modifiers - private, public
- Lambda
- For..of
- Spread
- ES6 Modules
	- Import, export and defaults (default as)
- Properties - get/set
- Installing 3rd Party lib - lodash

## Typings
NPM module used to download typescript definitions for libraries.
	- Install a package `typings install lodash --save` or `typings install dt~cachefactory --save`
	- Update frequently
	- Commit typings to source control
	- Custom e.g. _cachefactory

# Advanced/Extra
- Union Types
- String Literals types e.g. `easing: "ease-in" | "ease-out"`
- Generics
- Type guards
```
export function isAuthError(error: any): error is IAuthError {
	if (error && error.authError) {
		return true;
	}
		return false;
	}
```
- Explain `this`

# Resources
- Typescript handbook - http://www.typescriptlang.org/docs/handbook/basic-types.html
- Whats New - https://github.com/Microsoft/TypeScript/wiki/What%27s-new-in-TypeScript
- Roadmap (for nerds like me) - https://github.com/Microsoft/TypeScript/wiki/Roadmap


