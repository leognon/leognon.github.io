let data;
let projects;

function setup() {
  data = loadJSON("data.json", loaded);
  /*TODO (javascript to make the CSS better)
    Make width of projects-container flexible with max between (100% - margin-width) and (width of each project)
  */
}

function loaded() {
  let projects = data.projects;
  console.log(data);
  //create div for each one
  for (let i = 0; i < data.projects.length; i++) {
    console.log(projects[i]);
  }
}