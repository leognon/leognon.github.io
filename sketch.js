let data;
let projects;

function setup() {
  data = loadJSON("data.json", loaded);
  /*TODO (javascript to make the CSS better)
    1. Make width of projects-container flexible with max between (100% - margin-width) and (width of each project)
    2. Set min-width of projects-container to the width of a project
    2. Fix width of descBox to be flexible with img width and (.container width - .img width - .img padding - padding-left - padding right)
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