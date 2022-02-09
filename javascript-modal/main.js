const $openModal = document.querySelector('.open-modal');
const $survey = document.querySelector('.survey-container');
const $overlay = document.querySelector('.overlay');
$openModal.addEventListener('click', handleOpenModal);

function handleOpenModal(event) {
  if (event.target.matches('.open-modal')) {
    $survey.className = 'survey-container';
    $overlay.className = 'overlay';
  }
}

const $closeSurvey = document.querySelector('.close-survey');
$closeSurvey.addEventListener('click', function handleCloseSurvey(event) {

  if (event.target.matches('.close-survey')) {
    $survey.className = 'survey-container hidden';
    $overlay.className = 'overlay hidden';
  }
});
