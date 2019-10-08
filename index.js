import { render } from './renderer.js';
import * as data from './data.json';

console.log(data.results);
const things = data.results;
let content = '';
for(let i=0; i < things.length; i+=1) {
  console.log(things[i]);
  content +=things[i].name; 
}
console.log(content);

  render(content);
  