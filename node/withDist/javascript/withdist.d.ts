declare module 'something/javascript/bar' {
	export var bar: any;

}
declare module 'something/javascript/bas' {
	export var bas: any;

}
declare module 'something/javascript/foo' {
	export var foo: any;

}
declare module 'something' {
	import main = require('something/javascript/foo');
	export = main;
}