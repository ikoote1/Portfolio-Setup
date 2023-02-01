/* eslint-disable no-unused-vars */
const hamburger = document.querySelector('.icon-Menu');
const x = document.querySelector('.menu-17');
const navMenu = document.querySelector('.menu-p');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
x.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
document.querySelectorAll('.menu-r').forEach((n) => n.addEventListener('click', () => {
  navMenu.classList.toggle('active');
}));

// Displaying modals

const modalsObj = [
  {
    modalTitle: 'Components website',
    modalList: ['css', 'html', 'Bootstrap', 'Ruby on rails'],
    modalImg: './images/Snapshoot Portfolio.png',
    modalText:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  },
  {
    modalTitle: 'Data Dashboard Healthcare',
    modalList: ['html', 'Bootstrap', 'Ruby'],
    modalImg: './images/Snapshoot Portfolio.png',
    modalText:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  },
  {
    modalTitle: 'Profesional Art Printing Data More',
    modalList: ['html', 'Bootstrap', 'Ruby'],
    modalImg: './images/Snapshoot Portfolio.png',
    modalText:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  },
  {
    modalTitle: 'Website Protfolio',
    modalList: ['html', 'Bootstrap', 'Ruby'],
    modalImg: './images/Snapshoot Portfolio.png',
    modalText:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  },
  {
    modalTitle: 'Data Dashboard Healthcare',
    modalList: ['html', 'Bootstrap', 'Ruby'],
    modalImg: './images/Snapshoot Portfolio.png',
    modalText:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  },
  {
    modalTitle: 'Profesional Art Printing Data More',
    modalList: ['html', 'Bootstrap', 'Ruby'],
    modalImg: './images/Snapshoot Portfolio.png',
    modalText:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  },
  {
    modalTitle: 'Website Protfolio',
    modalList: ['html', 'Bootstrap', 'Ruby'],
    modalImg: './images/Snapshoot Portfolio.png',
    modalText:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  },
];

const modals = document.querySelector('.pop-upD');

let modalCount = 1;

modalsObj.forEach((o) => {
  let techStack = '';

  for (let i = 0; i < o.modalList.length; i += 1) techStack += `<li>${o.modalList[i]}</li>`;

  modals.innerHTML += `
  
  <div style="z-index=19000" class="modal-${modalCount} pacD">
      <div class="h-popD">
          <h2>${o.modalTitle}</h2>
          <h3>${o.modalTitle}</h3>
          <img style="z-index:20000" onClick="closeModal(${modalCount});" src="./images/Icon17.png" alt="">
      </div>
      <ul class="pacDD">
           ${techStack}
      </ul>
      <div class="details-popD">
          <img src="${o.modalImg}" alt="">
          <div class="pop-B">
              <p>${o.modalText}</p>
              <div class="btn-popD">

                  <button type="button" class="btn-pop btn-pop2" onclick="location.href='https://ikoote1.github.io/Portfolio-Setup/'">See Live <img src="./images/Icon - Export.png"
                          alt=""></button>
                  <button type="button" class="btn-pop btn-pop3" onclick="location.href='https://github.com/ikoote1/Portfolio-Setup.git'">See Source <img src="./images/Vectorpop.png"
                          alt=""></button>
              </div>
          </div>
      </div>
  </div>
`;
  modalCount += 1;
});

// Show Modal
const showModal = (i) => {
  modals.classList.toggle('active-modal');
  document.querySelector('.pop-BG').style.display = 'block';
  document.querySelector(`.modal-${i}`).style.display = 'block';
};

// Close Modal
function closeModal(i) {
  modals.classList.toggle('active-modal');
  document.querySelector('.pop-BG').style.display = 'none';
  document.querySelector(`.modal-${i}`).style.display = 'none';
}

// work section 1.

const modalsOb = [
  {
    modalTitl: 'Components website',
    modalLis: ['css', 'html', 'Bootstrap', 'Ruby'],
    modalIm: './images/Img Placeholder.png',
    modalTex:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  }];
const work = document.querySelector('.description-med');

modalsOb.forEach((o) => {
  let techStack = '';

  for (let i = 0; i < o.modalLis.length; i += 1) techStack += `<li>${o.modalLis[i]}</li>`;

  work.innerHTML = `
  <div class="portfolio" id="portfolio">
  <div>
  <h2 class="myrr" id="myrr">My Recent Work</h2>
  <img src="./images/Vecto1.png" alt="blackline" class="blackline">
</div>
<div class="img-pp"> <img src="${o.modalIm}"></div>
<div class="description" id="description">
  <h2 class="multi">${o.modalTitl}</h2>
  <p class="daily">${o.modalTex}</p>
  <ul class="languages">
          ${techStack} </ul>
  <button type="button" onclick="showModal(1);" class="but1">See project</button>
</div>
<div class="title-med">
  <div class="img-med"><img src="./images/Img Placeholder1.png"></div>
  <div class="img-medm"><img src="${o.modalIm}"></div>
  <div class="title-tree">
      <h2 class="multi">${o.modalTitl}</h2>
      <p class="daily">${o.modalTex}</p>
      <ul class="languages">
      ${techStack}
      </ul>
      <button type="button" onclick="showModal(1);" class="but2">See project</button>
  </div>
</div>     
</div>
 
`;
});

// WORK SECTION 2
const modalsO = [

  {
    modalTitle: 'Data Dashboard Healthcare',
    modalList: ['html', 'Bootstrap', 'Ruby'],
    modalText:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  },
  {
    modalTitle: 'Profesional Art Printing Data More',
    modalList: ['html', 'Bootstrap', 'Ruby'],
    modalText:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  },
  {
    modalTitle: 'Website Protfolio',
    modalList: ['html', 'Bootstrap', 'Ruby'],
    modalText:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  },
  {
    modalTitle: 'Profesional Art Printing Data More',
    modalList: ['html', 'Bootstrap', 'Ruby'],
    modalText:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  },
  {
    modalTitle: 'Data Dashboard Healthcare',
    modalList: ['html', 'Bootstrap', 'Ruby'],
    modalText:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  },
  {
    modalTitle: 'Website Protfolio',
    modalList: ['html', 'Bootstrap', 'Ruby'],
    modalText:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
  },
];

const modalT = document.querySelector('.frams');

let modalCountT = 1;

modalsO.forEach((o) => {
  let techStack = '';

  for (let i = 0; i < o.modalList.length; i += 1) techStack += `<li>${o.modalList[i]}</li>`;

  modalT.innerHTML += `
  <div class="grid-item3 modalT-${modalCountT}">
    <div class="grid-medd3">
        <h2 class="proff">${o.modalTitle}</h2>
        <p class="daily1">${o.modalText}</p>
        <ul class="languagess">
        ${techStack}
        </ul>
        <button type="button" onclick="showModal(${modalCountT});" class="but">See project</button>
    </div>
    <button type="button" onclick="showModal(${modalCountT});" class="but3">See project</button>
</div>
`;
  modalCountT += 1;
});

// validation

const form = document.querySelector('#acts');
const errorSpan = document.querySelector('.error');

const EMAIL_ERROR = 'Email should be in lower cases';

function validateEmail(email) {
  if (email.value === email.value.toLowerCase()) form.submit();
  else errorSpan.innerHTML = EMAIL_ERROR;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  validateEmail(form.elements.nam);
});