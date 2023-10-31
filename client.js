document.addEventListener('DOMContentLoaded', function() {
  // Array of objects for card layout
  const cardData = [
      { image: 'img/orange-beer.jpg', alt: 'Image 1', caption: 'Caption 1' },
      { image: 'img/blue-orange.jpg', alt: 'Image 2', caption: 'Caption 2' },
      { image: 'img/beer.jpg', alt: 'Image 3', caption: 'Caption 3' }
   
  ];dsvvdsvddvs

  // Function to generate card layout
  function generateCardLayout() {
      const cardContainer = document.getElementById('section1'); // Adjust the ID as needed

      cardData.forEach(item => {
          const card = document.createElement('div');
          card.classList.add('card');

          const image = document.createElement('img');
          image.src = item.image;
          image.alt = item.alt;

          const caption = document.createElement('p');
          caption.textContent = item.caption;

          card.appendChild(image);
          card.appendChild(caption);
          cardContainer.appendChild(card);
      });
  }

  generateCardLayout();

  // Toggle functions
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const infoBoxToggle = document.getElementById('infoBoxToggle');
  const infoBox = document.getElementById('infoBox'); // Assuming you have an info box

  mobileMenuToggle.addEventListener('click', function() {
      // Toggle mobile menu visibility
  
  });

  infoBoxToggle.addEventListener('click', function() {
      // Toggle info box visibility
      infoBox.classList.toggle('hidden'); // Define a 'hidden' class in your CSS
  });
});
