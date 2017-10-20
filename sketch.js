let data;
let projects;

function setup() {
  data = loadJSON("data.json", loaded);
}

function loaded() {
  let projects = data.projects;
  console.log(data);
  //create div for each one
  for (let i = 0; i < data.projects.length; i++) {
    console.log(projects[i]);
  }
}