let data;
let projects;
let projectsContainer;
let maxHeight = 1;
let id = 0;

function setup() {
  noCanvas();
  data = loadJSON("data.json", loaded);
  projectsContainer = select(".projects-container");
}

function loaded() {
  let projects = data.projects;
  for (let i = 0; i < data.projects.length; i++) {
    createProject(projects[i]);
  }

  let allContainers = document.getElementsByClassName("container");

  for (let j = 0; j < allContainers.length; j++) {
    let container = allContainers[j];

    container.style.height = maxHeight + "px";

    let title = container.getElementsByClassName("title")[0];
    let desc = container.getElementsByClassName("descBox")[0];


    let infoBox = container.getElementsByClassName("infoBox")[0];
    let paddingTop = container.offsetHeight - (title.offsetHeight + desc.offsetHeight + infoBox.offsetHeight + 45);
    console.log(paddingTop);
    infoBox.style.cssText = "padding-top: " + paddingTop + "px";
  }
}

function createProject(project) {
  let container = createEle('div', projectsContainer, 'container');
  container.id(id);

  let titleH = createEle('h2', container, 'title');
  let titleA = createEle('a', titleH, 'none', project.name);
  titleA.attribute("href", project.link);

  let imgA = createEle('a', container, 'none');
  imgA.attribute("href", project.link);
  let img = createImg(project.imgPath, project.name + " img").addClass('img left');
  img.parent(imgA);


  let rightContainer = createEle('div', container, 'rightContainer');

  let descBox = createEle('p', rightContainer, 'descBox right', project.desc);

  let infoBox = createEle('div', rightContainer, 'infoBox');

  let dateP = createEle('p', infoBox, 'none', "Date: " + project.date);
  let languageP = createEle('p', infoBox, 'none', "Language: " + project.language);

  let codeP = createEle('p', infoBox, 'none', "Code: ");
  let codeA = createEle('a', codeP, 'none', "Click here");
  codeA.attribute("href", project.codeLink);

  let formatFix = createEle('div', container, 'formatFix');

  let thisHeight = document.getElementById(id).offsetHeight;

  if (thisHeight > maxHeight) {
    maxHeight = thisHeight;
  }
  id++;
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