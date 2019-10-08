import { render } from './renderer.js';
import * as data from './data.json';

function getThingTemplate(thing){
  return `<li>${thing.name} - ${thing.description} - ${thing.subclass}</li>`;
}

console.log(data.results);
const things = data.results;
let content = '<ul>';
for(let i=0; i < things.length; i+=1) {
  console.log(things[i]);
  content += getThingTemplate(things[i]); 
}
content += '</ul>';
console.log(content);

  render(content);
  