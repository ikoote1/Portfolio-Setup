const openbtn = document.querySelector('.nav-bar .toggle-menu');
const mobileMenu = document.querySelector('.nav-bar .mobile-menu');
const menuBar = document.querySelector('.nav-bar .menu-bar');
const closebtn = document.querySelector('.nav-bar .close-menu');
const navLinks = document.querySelector('.nav-bar .mobile-menu .nav-links');

function toggleMenu() {
  mobileMenu.classList.toggle('disable');
  menuBar.classList.toggle('disable');
}

openbtn.addEventListener('click', toggleMenu);
closebtn.addEventListener('click', toggleMenu);
navLinks.addEventListener('click', (e) => {
  if (e.target.className === 'nav-item') {
    toggleMenu();
  }
});
// -----------Dynamic projwct section----------

const projectsInfo = [];
const firstProject = document.querySelector('.work-section .project1');
const projectCards = document.querySelectorAll('.work-section .project-sample');

projectsInfo.push({
  projectName: 'SummerWave Hotels',
  projectLang: ['Ruby on rails', 'Rspec', 'React', 'API'],
  projectImgSrc: './img/reserve.PNG',
  projectImgAlt: 'SummerWave Hotels',
  featureImg: './img/reserve.PNG',
  projectshortDescription:
    'SummerWave Hotels is a website to reserve rooms for the SummerWave Hotel chains. You can select available rooms from a gaphic list, or by clicking on the reserve menu.',
  projectDescription:
    'Welcome to the SummerWave Hotels! 🚀 Embark on an extraordinary journey by reserving tour rooms through our web application. Developed as a thrilling group project, At SummerWave Hotels, You can select available rooms from a gaphic list in the home page of the website, or you can just click on the reserve menu item and see the full list of available rooms and the city in which they are available..',
  seeLive: 'https://space-travel-9ex2.onrender.com/',
  seeSource: 'https://github.com/dev89s/final-capstone-front-end',
});
projectsInfo.push({
  projectName: 'BudgetTrackr ',
  projectLang: ['Ruby on rails', 'CSS', 'Rspec'],
  projectImgSrc: './img/transactions.PNG',
  projectImgAlt: 'Budget',
  featureImg: './img/transactions.PNG',
  projectshortDescription:
    'The budget tracker offers details and transactions for people. ',
  projectDescription:
    'This is a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
  seeLive: 'https://budgettrack.onrender.com/',
  seeSource: 'https://github.com/ikoote1/BudgetTrackr',
});
projectsInfo.push({
  projectName: 'Space',
  projectLang: ['React', 'CSS', 'API'],
  projectImgSrc: './img/space.png',
  projectImgAlt: 'Space Hub',
  featureImg: './img/space.png',
  projectshortDescription:
    'Space Hub is a webapp built with React and Redux, it fetches data from SpaceX API and Displays it. ',
  projectDescription:
    "Welcome to the Space Travel Hub! 🚀 Embark on an extraordinary journey through the cosmos with our out-of-this-world web application. Developed as a thrilling group project, Space Travel Hub integrates SpaceX's powerful API to offer you an unrivaled experience in the realm of space exploration.",
  seeLive: 'https://space-travel-9ex2.onrender.com/',
  seeSource: 'https://github.com/ikoote1/space-travelers-hub',
});
projectsInfo.push({
  projectName: 'Physics-and-Space-Science conference',
  projectLang: ['html', 'css', 'javascript'],
  projectImgSrc: './img/book3.PNG',
  projectImgAlt: 'Physics-and-Space-Science conference',
  featureImg: './img/book3.PNG',
  projectshortDescription:
    'This is Physics-and-Space-Science conference website with speakers and their scheduled time',
  projectDescription: `Welcome to the space science Conference Project! 🎮🕹️ Immerse yourself in the worlds above and outside our world.This captivating and cutting-edge web application was developed and crafted entirely using JavaScript.

    At SSC, we believe in exploring the space and transfer our knowledge to young people to unleash their creativity and shape the future of astronomy. Dive into a dynamic platform that offers a plethora of resources, insights, and tools to fuel your space journey.`,
  seeLive: 'https://ikoote1.github.io/Physics-and-Space-Science/',
  seeSource: 'https://github.com/ikoote1/Physics-and-Space-Science',
});
projectsInfo.push({
  projectName: 'To Do List',
  projectLang: ['Redux', 'bootstrap', 'React'],
  projectImgSrc: './img/todolist.png',
  projectImgAlt: 'ToDo list project',
  featureImg: './img/todolist.png',
  projectshortDescription: 'Simple ToDo list to keep trak of your daily tasks ',
  projectDescription:
    "'To-do list' is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete. You will build a simple website that allows for doing that, and you will do it using ES6 and Webpack!",
  seeLive: 'https://to-do-list-o5vo.onrender.com/',
  seeSource: 'https://github.com/ikoote1/react-todo-app',
});
projectsInfo.push({
  projectName: 'Breweries',
  projectLang: ['Javascript', 'CSS', 'HTML'],
  projectImgSrc: './img/breweries.PNG',
  projectImgAlt: 'Brewery',
  featureImg: './img/breweries.PNG',
  projectshortDescription:
    'Get your near by brewery through state search.',
  projectDescription: `This web application helps people to locate the nearby brewery across different states in United state.

    How to search?
    ◉ Click on the type you want.
    ◉ Move to the location.
    ◉ Find your drink place.`,
  seeLive: 'https://get-your-breweries.onrender.com/',
  seeSource: 'https://github.com/ikoote1/get-your-nearby-brewery',
});
projectsInfo.push({
  projectName: 'Leaderboard',
  projectLang: ['html', 'bootstrap', 'JavaScript'],
  projectImgSrc: './img/leader.png',
  projectImgAlt: 'Awesome book project',
  featureImg: './img/leader.png',
  projectshortDescription:
    'This project registers the score and player name using APIs, and it also displays the top players.',
  projectDescription:
    "'This project registers the score and player name using APIs, and it also displays the top players.",
  seeLive: '#',
  seeSource: 'https://github.com/ikoote1/Leaderboard',
});

function addProjectLang(langList) {
  let prolangs = '';
  langList.forEach((lang) => {
    prolangs += `
          <li>${lang}</li>`;
  });
  return prolangs;
}

function createProjectCards() {
  projectsInfo.forEach((project, index) => {
    if (index === 0) {
      firstProject.innerHTML = `
          <img src=${
  project.projectImgSrc
} alt="sample image" class="project-img">
          <div class="project-content">
              <h3 class="project-name">${project.projectName}</h3>
              <p class="project-description">${
  project.projectshortDescription
}</p>
              <ul class="project-lang">
                  ${addProjectLang(project.projectLang)}
              </ul>
              <button type="button" class="half-btn" id="project${index}">See Project</button>
            </div>`;
    } else {
      projectCards[
        index - 1
      ].style.backgroundImage = `url(${project.projectImgSrc})`;
      projectCards[index - 1].innerHTML = `
            <div class="content-wrapper">
                <h3 class="project-name">${project.projectName}</h3>
                <p class="project-description">${
  project.projectshortDescription
}</p>
                <ul class="project-lang">
                  ${addProjectLang(project.projectLang)}
                </ul>
            </div>
            <button type="button" class="full-btn" id="project${index}">See Project</button>`;
    }
  });
}

createProjectCards();

// -------------Model----------
const project = document.querySelector('#portfolio .grid-wrapper');
const modelWrapper = document.querySelector('.model-wrapper');
const model = document.querySelector('.model');
const closepopup = document.querySelector('.model .close-popup');

function addProjectInfo(projectObj) {
  model.querySelector('.project-name').textContent = projectObj.projectName;
  model.querySelector('.project-description').textContent = projectObj.projectDescription;
  model.querySelector('.project-img').src = projectObj.featureImg;
  model.querySelector('.project-img').alt = projectObj.projectImgAlt;
  model.querySelector('.project-lang').innerHTML = `${addProjectLang(
    projectObj.projectLang,
  )}`;
  model.querySelector('.model .see-live').href = projectObj.seeLive;
  model.querySelector('.model .see-source').href = projectObj.seeSource;
}

project.addEventListener('click', (e) => {
  if (e.target.id) {
    const index = e.target.id.replace('project', '');
    if (projectsInfo[index]) {
      modelWrapper.classList.toggle('disable');
      addProjectInfo(projectsInfo[index]);
    }
  }
});

closepopup.addEventListener('click', () => {
  modelWrapper.classList.toggle('disable');
});

// -------------Form----------
const form = document.querySelector('.contact-section .contact-form');
const msg = document.querySelector('.contact-section .contact-form .message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = form.elements.mail;
  msg.textContent = '';
  if (email.value === email.value.toLowerCase()) {
    form.submit();
  } else {
    msg.textContent = 'Please enter a lowercase email';
  }
});

// ---------Storage-------
function restoreData() {
  const formData = JSON.parse(localStorage.getItem('formData'));
  form.elements.name.value = formData.name;
  form.elements.mail.value = formData.email;
  form.elements.msg.value = formData.msg;
}

function updateLocalStorage() {
  const formData = {
    name: form.elements.name.value,
    email: form.elements.mail.value,
    msg: form.elements.msg.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
  restoreData();
}

form.elements.name.onchange = updateLocalStorage;
form.elements.mail.onchange = updateLocalStorage;
form.elements.msg.onchange = updateLocalStorage;

if (!localStorage.getItem('formData')) {
  updateLocalStorage();
} else {
  restoreData();
}

/* eslint-disable */
window.addEventListener('load', () => {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false,
  });
});
/* eslint-enable */
