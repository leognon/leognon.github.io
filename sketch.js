let data;
let projects;
let projectsContainer;

function setup() {
  data = loadJSON("data.json", loaded);
  projectsContainer = select(".projects-container");
  /*TODO (javascript to make the CSS better)
    1. Make width of projects-container flexible with max between (100% - margin-width) and (width of each project)
    2. Set min-width of projects-container to the width of a project
    2. Fix width of descBox to be flexible with img width and (.container width - .img width - .img padding - padding-left - padding right)
  */
}

function loaded() {
  // let projects = data.projects;
  // console.log(data);
  // //create div for each one
  // for (let i = 0; i < data.projects.length; i++) {
  //   console.log(projects[i]);
  //   // createProject(projects[i]);
  // }
  createProject();
}

function createProject(project) {
  let container = createEle('div', projectsContainer, 'container');

  let titleH = createEle('h2', container, 'title');
  let titleA = createEle('a', titleH, '', "The title!"); //Put project.title here and style this to link

  let imgA = createEle('a', container, 'none'); //Link this
  let img = createEle('img', imgA, 'img left'); //Add img src and alt
  img.style("src", "img/shapesGame+Img.jpg"); //GET IMG TO SHOW!
  img.style("alt", "ShapesGame+ Img");

  //REDUCE PADDING FOR CONTAINER AND FIGURE OUT WHY THE LEFT SIDE OF IMAGES AREN'T ROUNDED
}
//createEle('h2', projectsContainer, 'title');
function createEle(tag, theParent, theClass, content) {
  let ele = createElement(tag);
  ele.addClass(theClass);
  ele.parent(theParent);
  if (content != null) {
    ele.html(content);
  }
  return ele;

  // createElement(tag).addClass(theClass);
  // let ele = select("." + theClass);
  // ele.parent(theParent);
}

/*
create element and set a var to it
add the class to that var
set the parent to that var
DONT USE SELECT!

*/