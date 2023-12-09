function switchImage(type) {
    const displayedImage = document.getElementById('displayedImage');
    if (type === 'general') {
      displayedImage.src = 'https://i.pinimg.com/originals/de/71/df/de71df345035c30d2830fef4ae4c562e.gif';
    } else if (type === 'detailed') {
      displayedImage.src = 'https://i.pinimg.com/originals/2c/76/0a/2c760a3b6851243d96b2e4b678d3ce5c.jpg';
    }
  
    // Reset button styles
    const buttons = document.querySelectorAll('.buttons button');
    buttons.forEach(button => button.classList.remove('selected-button'));
  
    // Add shadow to the selected button
    event.target.classList.add('selected-button');
  }

function goToHomepage() {
    window.location.href = 'index.html';
}

function goToWiki() {
    window.location.href = 'https://www.wikipedia.org/';
}

function toggleDropdown(type) {
    const dropdown = document.getElementById(`${type}-list`);
    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
}

function showDialog(genre) {
    const dialogOverlay = document.getElementById('dialogOverlay');
    dialogOverlay.style.display = 'flex';
}

function closeDialog() {
    const dialogOverlay = document.getElementById('dialogOverlay');
    dialogOverlay.style.display = 'none';
}

// Function for the first confirmation
function confirmVote(choice) {
  if (choice === 'yes') {
    showThanksDialog();
  } else {
    closeDialog();
  }
}

function showThanksDialog() {
  const dialogOverlay = document.getElementById('confirmationDialog');
  dialogOverlay.style.display = 'none';
  const thanksDialog = document.getElementById('thanksDialog');
  if (thanksDialog) {
    thanksDialog.style.display = 'flex';
  }
}

function goToRentScreen() {
    window.location.href = 'rent_screen.html';
}

  function goToRestaurantScreen() {
    window.location.href = 'restaurant-screen.html';
  }
  
  function goToMusicScreen() {
    window.location.href = 'music-screen.html';
  }

// Add the following script to the existing JavaScript file
    let isOtherIconSet = false;

    function toggleIcons() {
        const bottomNavigation = document.querySelector('.bottom-navigation');
        const icons = bottomNavigation.querySelectorAll('.action img');
        const otherText = bottomNavigation.querySelectorAll('.action p');
        if (icons.length === 4) {
            if (isOtherIconSet) {
                icons[0].src = 'https://uxwing.com/wp-content/themes/uxwing/download/weather/thunder-icon.png';
                icons[1].src = 'https://uxwing.com/wp-content/themes/uxwing/download/controller-and-music/guitar-icon.png';
                icons[2].src = 'https://uxwing.com/wp-content/themes/uxwing/download/controller-and-music/keyboard-piano-icon.png';
                otherText[0].textContent = 'EDM';
                otherText[1].textContent = 'Acoustic';
                otherText[2].textContent = 'Classic';
            } else {
                icons[0].src = 'https://uxwing.com/wp-content/themes/uxwing/download/nature-and-environment/leaf-icon.png';
                icons[1].src = 'https://uxwing.com/wp-content/themes/uxwing/download/controller-and-music/trombone-icon.png';
                icons[2].src = 'https://uxwing.com/wp-content/themes/uxwing/download/festival-culture-religion/party-hat-icon.png';
                otherText[0].textContent = 'Nature';
                otherText[1].textContent = 'Jazz';
                otherText[2].textContent = 'Party';
            }

            isOtherIconSet = !isOtherIconSet;
        } else {
            console.error('Icons or text not found or not in the correct structure.');
        }
    }

    

  
  