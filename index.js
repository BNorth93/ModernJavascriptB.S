import { render } from './renderer.js';
import * as data from './data.json';

function getThingTemplate(thing){
  return `<li>${thing.name}</li>`;
}
function sorttheplayers(first, second) {
  if(first.subclass > second.subclass){
    return -1;
  }
  else if(first.subclass < second.subclass){
    return 1;
  }
  else { return 0;
  }
}
console.log(data.results);
const things = data.results.sort(sorttheplayers);
let content = '<ul>';
for(let i=0; i < things.length; i+=1) {
  console.log(things[i]);
  content += getThingTemplate(things[i]); 
}
content += '</ul>';
console.log(content);

  render(content);
  
