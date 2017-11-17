let data;
let projects;
let projectsContainer;
let maxHeight = 1;
let id = 0;
let kittenCode = "javascript:(function(){let srcs=['https://static.boredpanda.com/blog/wp-content/uploads/2016/08/cute-kittens-29-57b30ad229af3__605.jpg','https://www.petsworld.in/blog/wp-content/uploads/2015/09/Cat-makes-Smile.jpg','https://www.warrenphotographic.co.uk/photography/bigs/15707-Cute-fluffy-silver-tortoiseshell-kitten-white-background.jpg','https://i.pinimg.com/736x/b4/6b/07/b46b079df6f47c093f7c123e70776892--fluffy-kittens-cute-kitten-fluffy.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpjYKnbQu-at9y18z9Tu48R-TnQ_3DFpSTMQlxaZST26faIwIPlQ'];let types=['p','h1','span','button','li'];let imgs=document.getElementsByTagName('img');for(let i=0;i<imgs.length;i++){imgs[i].src=srcs[i%srcs.length]}for(type of types){let elts=document.getElementsByTagName(type);for(elt of elts){elt.innerHTML='MEOW!'}}})()";

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
    console.log(maxHeight);
    infoBox.style.cssText = "padding-top: " + paddingTop + "px";
  }
}

function createProject(project) {
  let container = createEle('div', projectsContainer, 'container');
  container.id(id);

  let titleH = createEle('h2', container, 'title');
  let titleA = createEle('a', titleH, 'none', project.name);
  if (project.link == "kitten") {
    titleA.attribute("href", kittenCode);
  } else {
    titleA.attribute("href", project.link);
  }

  if (project.imgPath != "none") {
    let imgA = createEle('a', container, 'none');

    if (project.link == "kitten") {
      imgA.attribute("href", kittenCode);
    } else {
      imgA.attribute("href", project.link);
    }

    let img = createImg(project.imgPath, project.name + " img").addClass('img left');
    img.parent(imgA);

    if (project.link == "kitten") {
      img.attribute("alt", "Kittens!");
    }
  }


  let rightContainer = createEle('div', container, 'rightContainer');

  let descBox = createEle('p', rightContainer, 'descBox right', project.desc);

  let infoBox = createEle('div', rightContainer, 'infoBox');

  let dateP = createEle('p', infoBox, 'none', "Date: " + project.date);
  let languageP = createEle('p', infoBox, 'none', "Language: " + project.language);

  let codeP = createEle('p', infoBox, 'none', "Code: ");
  let codeA = createEle('a', codeP, 'none', "Click here");


  if (project.link == "kitten") {
    codeA.attribute("href", kittenCode);
  } else {
    codeA.attribute("href", project.codeLink);
  }

  let formatFix = createEle('div', container, 'formatFix');

  let thisHeight = document.getElementById(id).offsetHeight;

  if (thisHeight > maxHeight) {
    maxHeight = thisHeight;
    console.log("New leader is " + id + "   at " + thisHeight);
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