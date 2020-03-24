import * as imported from './external.js'; // didn't seem to import default
//import ab, {value as val, test} from './external.js';
//import ab from './external.js'; // only alowed one per file


console.log(imported.value);
imported.test();
console.log(imported.value);
console.log(imported.ab);