
"use strict";

// Menu open
function mobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close');

  menuToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.style.height && mobileMenu.style.height !== '0px';

    if (!isOpen) {
      mobileMenu.style.height = '400px';
      menuToggle.setAttribute('data-state', 'open');
      hamburgerIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
    } else {
      mobileMenu.style.height = '0';
      menuToggle.setAttribute('data-state', 'closed');
      hamburgerIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    }
  });
}

// Search box
function searchBox() {
  const searchToggle = document.getElementById('search-toggle');
  const searchBox = document.getElementById('search-box');
  const searchIcon = document.getElementById('search-icon');
  const closeIcon = document.getElementById('close-icon');

  // Set initial styles for the search box
  Object.assign(searchBox.style, {
    width: '0',
    overflow: 'hidden',
    transition: 'width 0.3s ease-in-out',
    position: 'absolute',
    top: '50%',
    right: '30px',
    transform: 'translateY(-50%)',
    padding: '0',
    border: '0',
  });

  searchToggle.addEventListener('click', () => {
    if (searchBox.style.width === '0px' || searchBox.style.width === '') {
      Object.assign(searchBox.style, {
        width: '250px',
        padding: '10px',
        border: '1px solid',
      });
      searchIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
    } else {
      Object.assign(searchBox.style, {
        width: '0',
        padding: '0',
        border: '0',
      });
      searchIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    }
  });

  document.addEventListener('click', (event) => {
    if (!searchBox.contains(event.target) && !searchToggle.contains(event.target)) {
      Object.assign(searchBox.style, {
        width: '0',
        padding: '0',
        border: '0',
      });
      searchIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    }
  });
}

// Add responsive class to buttons
function addResponsiveClassToButtons() {
  const width = window.innerWidth;
  const buttons = document.querySelectorAll('button');

  buttons.forEach((button) => {
    button.classList.remove('tablet', 'mobile');
    if (width >= 768 && width < 1024) {
      button.classList.add('tablet');
    } else if (width < 768) {
      button.classList.add('mobile');
    }
  });
}

// Sticky navigation
function stickyNav() {
  const header = document.querySelector('header');
  const stickyClass = 'sticky-nav';

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add(stickyClass);
    } else {
      header.classList.remove(stickyClass);
    }
  });
}

// Initialize functions on page load
document.addEventListener('DOMContentLoaded', () => {
  mobileMenu();
  addResponsiveClassToButtons();
  searchBox();
  stickyNav();

  // Initialize AOS library
  AOS.init({
    once: false,
    duration: 1200,
    offset: 70,
  });

  // Refresh AOS on resize
  window.addEventListener('resize', () => {
    AOS.refresh();
    addResponsiveClassToButtons();
  });
});
