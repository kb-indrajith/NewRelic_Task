// menu open
function mobileMenu() {
  const $menuToggle = $('#menu-toggle');
  const $mobileMenu = $('#mobile-menu');

  // Check if elements exist
  if ($menuToggle.length && $mobileMenu.length) {
    $menuToggle.on('click', () => {
      $mobileMenu.toggleClass('hidden'); // Show/hide menu
    });
  } else {
    console.error("Menu toggle or mobile menu element is missing in the DOM.");
  }
}

// search box
function searchBox() {
  const $searchToggle = $('#search-toggle');
  const $searchBox = $('#search-box');

  // Toggle search box visibility on click
  $searchToggle.on('click', function (e) {
    e.stopPropagation(); // Prevent the click event from propagating to the document
    $searchBox.toggleClass('hidden'); // Show/hide search box
  });

  // Close search box when clicking outside
  $(document).on('click', function (e) {
    if (!$searchBox.is(e.target) && !$searchBox.has(e.target).length && !$searchToggle.is(e.target)) {
      $searchBox.addClass('hidden'); // Hide search box
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

// Run the function on page load
$(document).ready(() => {
  mobileMenu(); 
  addResponsiveClassToButtons();
  searchBox();
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
