// Get the search input and notice cards
const searchInput = document.getElementById('search-notices');
const noticeCards = document.getElementById('notice-cards');

// Add event listener to the search input
searchInput.addEventListener('input', () => {
  const searchValue = searchInput.value.toLowerCase();
  const notices = noticeCards.children;

  // Loop through each notice card
  for (let i = 0; i < notices.length; i++) {
    const notice = notices[i].querySelector('.card-body');
    const noticeText = notice.textContent.toLowerCase();

    // Check if the search value is in the notice text
    if (noticeText.includes(searchValue)) {
      notices[i].style.display = 'block';
    } else {
      notices[i].style.display = 'none';
    }
  }
});

// Add event listeners to the category buttons
const categoryButtons = document.querySelectorAll('.btn');

categoryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const category = button.textContent.toLowerCase();
    const notices = noticeCards.children;

    // Loop through each notice card
    for (let i = 0; i < notices.length; i++) {
      const notice = notices[i].querySelector('.card-body');
      const noticeText = notice.textContent.toLowerCase();

      // Check if the notice belongs to the selected category
      if (category === 'all') {
        notices[i].style.display = 'block';
      } else if (category === 'exams') {
        if (noticeText.includes('exam')) {
          notices[i].style.display = 'block';
        } else {
          notices[i].style.display = 'none';
        }
      } else if (category === 'jobs') {
        if (noticeText.includes('job')) {
          notices[i].style.display = 'block';
        } else {
          notices[i].style.display = 'none';
        }
      } else if (category === 'academic') {
        if (noticeText.includes('academic')) {
          notices[i].style.display = 'block';
        } else {
          notices[i].style.display = 'none';
        }
      } else if (category === 'events') {
        if (noticeText.includes('event')) {
          notices[i].style.display = 'block';
        } else {
          notices[i].style.display = 'none';
        }
      } else {
        notices[i].style.display = 'none';
      }
    }
  });
});


// selecting elememts from webpage

const trainers = document.querySelectorAll(".trainers .member h4");
const campusImg = document.querySelector(".campusImg img");

//box shadow effect on image 

// moveover listener
campusImg.addEventListener('mouseover',function(){
    this.classList.add('campus');
})
// mouseout listener
campusImg.addEventListener('mouseout',function(){
    this.classList.remove('campus');
})

// trainers section animation effect

// moveover listener
trainers.forEach(function(card)
{
    card.addEventListener("mouseover", function()
    {
        this.classList.add("shade");
    });
});

// moveout listener
trainers.forEach(function(card)
{
    card.addEventListener("mouseout", function()
    {
        this.classList.remove("shade");
    });
});
