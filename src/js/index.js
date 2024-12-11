// menu open
function mobileMenu() {
  const $menuToggle = $('#menu-toggle');
  const $mobileMenu = $('#mobile-menu');
  const $hamburgerIcon = $('#hamburger-icon');
  const $closeIcon = $('#close');

  $menuToggle.on('click', function () {
    const isOpen = $mobileMenu.css('height') !== '0px' && $mobileMenu.css('height') !== ''; // Check if menu is open
    if (!isOpen) {
      // Open menu
      $mobileMenu.css('height', '400px'); // Adjust height as needed
      $menuToggle.attr('data-state', 'open');
      $hamburgerIcon.addClass('hidden');
      $closeIcon.removeClass('hidden');
    } else {
      // Close menu
      $mobileMenu.css('height', '0');
      $menuToggle.attr('data-state', 'closed');
      $hamburgerIcon.removeClass('hidden');
      $closeIcon.addClass('hidden');
    }
  });
}

// search box
function searchBox() {
  const $searchToggle = $('#search-toggle');
  const $searchBox = $('#search-box');
  const $searchIcon = $('#search-icon');
  const $closeIcon = $('#close-icon');

  // Set initial styles for the search box
  $searchBox.css({
    width: '0',
    overflow: 'hidden',
    transition: 'width 0.3s ease-in-out',
    position: 'absolute', // Position it relative to the parent container
    top: '50%', // Adjust to align with the toggle button
    right: '30px', // Adjust as needed
    transform: 'translateY(-50%)', // Center vertically
    padding: 0,
    border: 0,
  });

  // Toggle the width of the search box on click
  $searchToggle.on('click', function () {
    if ($searchBox.width() === 0) {
      // Expand the search box and add padding
      $searchBox.css({
        width: '250px',
        padding: '10px',
        border: 1,
      });
      $searchIcon.addClass('hidden'); // Hide search icon
      $closeIcon.removeClass('hidden'); // Show close icon
    } else {
      // Collapse the search box and remove padding
      $searchBox.css({
        width: '0',
        padding: '0',
        border: 0,
      });
      $searchIcon.removeClass('hidden'); // Show search icon
      $closeIcon.addClass('hidden'); // Hide close icon
    }
  });

  // Close the search box if clicking outside of it
  $(document).on('click', function (event) {
    if (
      !$searchBox.is(event.target) &&
      $searchBox.has(event.target).length === 0 &&
      !$searchToggle.is(event.target) &&
      $searchToggle.has(event.target).length === 0
    ) {
      $searchBox.css({
        width: '0',
        padding: '0',
        border: 0,
      });
      $searchIcon.removeClass('hidden'); // Show search icon
      $closeIcon.addClass('hidden'); // Hide close icon
    }
  });
}

// Function to add the appropriate class to buttons based on viewport size
function addResponsiveClassToButtons() {
  // Get the current viewport width
  const width = $(window).width();

  // Select all buttons on the page
  const $buttons = $('button');

  // Remove the class is already there
  $buttons.removeClass('tablet mobile');

  // Add 'tablet' or 'mobile' class based on width
  if (width >= 768 && width < 1024) {
    $buttons.addClass('tablet');
  } else if (width < 768) {
    $buttons.addClass('mobile');
  }
}
 function stickyNav() {
  const $header = $('header');
  const stickyClass = 'sticky-nav';

  // Add scroll event listener
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 50) { // Add the class if scrolled more than 50px
      $header.addClass(stickyClass);
    } else {
      $header.removeClass(stickyClass);
    }
  });
 }
// Run the function on page load
$(document).ready(() => {
  mobileMenu(); 
  addResponsiveClassToButtons();
  searchBox();
  stickyNav();
  AOS.init({
    once: false, // Animation happens on every scroll
    duration: 1200, // Duration of the animation in ms
    offset: 70,    // Trigger animation 200px from the element
  });

  // Refresh AOS if needed for dynamically added content
  $(window).on('resize', function() {
    AOS.refresh();
  });
  // Update the classes when the window is resized
  $(window).resize(addResponsiveClassToButtons);
});

