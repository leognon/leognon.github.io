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
    3. REDUCE PADDING FOR CONTAINER AND FIGURE OUT WHY THE LEFT SIDE OF IMAGES AREN'T ROUNDED
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
  let titleA = createEle('a', titleH, 'none', project.name);
  titleA.attribute("href", project.link);

  let imgA = createEle('a', container, 'none');
  imgA.attribute("href", project.link);
  let img = createImg(project.imgPath, project.name + " img").addClass('img left');
  img.parent(imgA);

  let descBox = createEle('p', container, 'descBox right', project.desc);

  let infoBox = createEle('div', container, 'infoBox');

  let dateP = createEle('p', infoBox, 'none', "Date: " + project.date);
  let languageP = createEle('p', infoBox, 'none', project.language);

  let codeP = createEle('p', infoBox, 'none', "Code: ");
  let codeA = createEle('a', codeP, 'none', project.codeLink);
  codeA.attribute("href", project.codeLink);
}

function createEle(tag, theParent, theClass, content) {
  let ele = createElement(tag);
  ele.addClass(theClass);
  ele.parent(theParent);
  if (content != null) {
    ele.html(content);
  }
  return ele;
}