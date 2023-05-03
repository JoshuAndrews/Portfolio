const linkSobre = document.querySelector('.linkSobre a');
const linkProjetos = document.querySelector('.linkProjetos a');
const linkServicos = document.querySelector('.linkServicos a');
const linkSkills = document.querySelector('.linkSkills a');

linkSobre.addEventListener('click', (event) => {
  event.preventDefault(); 
  const targetId = linkSobre.getAttribute('href');
  const targetSection = document.querySelector(targetId);
  targetSection.scrollIntoView({ behavior: 'smooth',block: 'center' });
});

linkProjetos.addEventListener('click', (event) => {
  event.preventDefault(); 
  const targetId = linkProjetos.getAttribute('href');
  const targetSection = document.querySelector(targetId);
  targetSection.scrollIntoView({ behavior: 'smooth' ,block: 'center' });
});

linkServicos.addEventListener('click', (event) => {
  event.preventDefault(); 
  const targetId = linkServicos.getAttribute('href');
  const targetSection = document.querySelector(targetId);
  targetSection.scrollIntoView({ behavior: 'smooth',block: 'center' });
});

linkSkills.addEventListener('click', (event) => {
  event.preventDefault(); 
  const targetId = linkSkills.getAttribute('href');
  const targetSection = document.querySelector(targetId);
  targetSection.scrollIntoView({ behavior: 'smooth',block: 'center' });
});

let menuOpen = false;
const mobileLinks = document.querySelector('.mobile-links');

function mobileMenu() {
  menuOpen = !menuOpen;
  if (menuOpen) {
    mobileLinks.style.display = 'block';
  } else {
    mobileLinks.style.display = 'none';
  }
}