let data;
let projects;
let projectsContainer;
let maxHeight = 1;
let id = 0;
let kittenCode = "javascript:(function() { let srcs = ['https://static.boredpanda.com/blog/wp-content/uploads/2016/08/cute-kittens-29-57b30ad229af3__605.jpg', 'https://www.petsworld.in/blog/wp-content/uploads/2015/09/Cat-makes-Smile.jpg', 'https://www.warrenphotographic.co.uk/photography/bigs/15707-Cute-fluffy-silver-tortoiseshell-kitten-white-background.jpg', 'https://i.pinimg.com/736x/b4/6b/07/b46b079df6f47c093f7c123e70776892--fluffy-kittens-cute-kitten-fluffy.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpjYKnbQu-at9y18z9Tu48R-TnQ_3DFpSTMQlxaZST26faIwIPlQ']; let types = ['p', 'h1', 'span', 'button', 'li']; let imgs = document.getElementsByTagName('img'); let word = prompt('Enter a sentence here', 'Kittens!'); for (let i = 0; i < imgs.length; i++) { imgs[i].src = srcs[i % srcs.length] } for (type of types) { let elts = document.getElementsByTagName(type); for (elt of elts) { elt.innerHTML = word; } } })()";
let scrollAmount;
let scrollInterval;
let scrollSpeed = 15;


function setup() {
  scrollAmount = document.getElementById("landingPage").offsetHeight;
  let cnvContainer = select("#cnvContainer");
  createCanvas(windowWidth, windowHeight).position(0, 0);
  // background();
  frameRate(3);


  data = loadJSON("data.json", loaded);
  projectsContainer = select(".projects-container");
}

function javascript() {
  startScroll();
}

function java() {
  startScroll();
}

function cSharp() {
  startScroll();
}

function startScroll() {
  scrollInterval = setInterval(() => {
    if (window.scrollY < scrollAmount) {
      if (window.scrollY + scrollSpeed <= scrollAmount) {
        window.scrollBy(0, scrollSpeed);
      } else {
        window.scrollBy(0, scrollAmount - window.scrollY);
      }
      scrollSpeed -= .2;
    } else {
      clearInterval(scrollInterval);
      scrollSpeed = 15;
    }
  }, .001);
}

function draw() {
  noStroke();
  fill(random(255), random(255), random(255));
  rect(random(width), random(height), 50, 50);
}

function loaded() {
  let projects = data.javascriptProjects;
  for (let i = 0; i < projects.length; i++) {
    createProject(projects[i]);
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

  let leftDIV = createEle('div', container, 'leftDIV');
  if (project.imgPath != "none") {
    let imgA = createEle('a', leftDIV, 'none');

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

  let rightDIV = createEle('div', container, 'rightDIV');
  let rightContainer = createEle('div', rightDIV, 'rightContainer');

  let descBox = createEle('p', rightContainer, 'descBox right pTxt', project.desc);

  let infoBox = createEle('div', rightContainer, 'infoBox');

  let dateP = createEle('p', infoBox, 'pTxt', "Date: " + project.date);
  let languageP = createEle('p', infoBox, 'pTxt', "Language: " + project.language);

  let codeP = createEle('p', infoBox, 'pTxt', "Code: ");
  let codeA = createEle('a', codeP, 'none', "Click here");


  if (project.link == "kitten") {
    codeA.attribute("href", kittenCode);
  } else {
    codeA.attribute("href", project.codeLink);
  }

  let formatFix = createEle('div', container, 'formatFix');
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