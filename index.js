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
    modalTitle: 'Data Dashboard Healthcare',
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
    modalTitle: 'Profesional Art Printing Data More',
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

/* eslint-enable no-unused-vars */
