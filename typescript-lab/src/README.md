
# Topics
- Intro
	- Static type analysis.. nice build errors!
	- Just typings NOT runtime!
	- Transpiles (Compiles) down to JS
	- Allows us to use JS features of tomorrow
	- If you're familiar with C# or Java you will love it :)
- Typings - boolean, number, void, array, any
	- Optional properties
- Access Modifiers - private, public 
- Methods
	- Optional parameters
- Lambda
- Class, interface, enums
	- Creating new object
	- Models
- Template Strings
- For..of
- Spread
- ES6 Modules
	- Import, export and defaults (default as)
- Properties - get/set
- TypeDoc

## Definitly Typed
NPM module used to download typescript definitions for libraries.
	- Install a package `tsd install jquery --save`
	- Update all  `tsd update -so`
	- Update frequently
	- Commit TSD to source control
	- Custom e.g. _cachefactory


# Advanced/Extra
- Generics
- Union Types
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
- String Literals types

# Resources
- Typescript handbook - http://www.typescriptlang.org/docs/handbook/basic-types.html
- Whats New - https://github.com/Microsoft/TypeScript/wiki/What%27s-new-in-TypeScript
- Roadmap (for nerds like me) - https://github.com/Microsoft/TypeScript/wiki/Roadmap


