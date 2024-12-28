import { setCursor } from "./brain.js";

document.addEventListener('DOMContentLoaded', () => {
  localStorage.setItem('cursor', 0)

  setCursor();
  contactIntro();

  const home = document.querySelector('.home');
  const list = document.querySelector('.list');
  const brand = document.querySelector('.brand');

  home.addEventListener('click', back);
  brand.addEventListener('click', back);
  list.addEventListener('click', listItem);
})

function contactIntro() {
  const page = document.querySelector('#intro');
  const contact = document.querySelector('#contact-us');
  
  if (localStorage.getItem('goto')) {
    page.style.display = 'none';
    page.style.top = '-100vh';
    setTimeout(() => {
      contact.style.left = '-100vw';
    }, 500);

    localStorage.removeItem('goto')
  } else {
    contact.style.display = 'none';
    contact.style.left = '-100vw';
  
    setTimeout(() => {
      page.style.letterSpacing = '0';
  
      setTimeout(() => {
        page.style.transition = 'all 1s ease'
        page.style.top = '-100vh';
      }, 500);
    }, 500);
  }
}

function introIn() {
  const page = document.querySelector('#intro');

  page.style.display = 'flex';
  page.style.transition = 'all 1s ease';
  setTimeout(() => {
    page.style.top = '0';
    page.style.letterSpacing = '10px';
  }, 300);
}

function back() {
  introIn()

  setTimeout(() => {
    window.location.href = 'index.html'
  }, 1300);
}

function contactIntroIn(title) {
  const contact = document.querySelector('#contact-us');

  if (title) {
    contact.innerHTML = title
  }

  contact.style.display = 'flex';
  setTimeout(() => {
    contact.style.left = '0';
  }, 300);
}

function listItem() {
  contactIntroIn('List Item')

  localStorage.setItem('goto', 1);

  setTimeout(() => {
    window.location.href = './list.html'
  }, 1300);
}