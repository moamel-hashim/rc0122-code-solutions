const $tabContainer = document.querySelector('.tab-container');
const $tab = document.querySelectorAll('.tab');
const $view = document.querySelectorAll('.view');
$tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tab.length; i++) {
      if (event.target === $tab[i]) {
        $tab[i].className = 'tab active';
        const getAttribute = event.target.getAttribute('data-view');
        for (let j = 0; j < $view.length; j++) {
          if ($view[j].getAttribute('data-view') === getAttribute) {
            $view[j].className = 'view';
          } else if ($view[j].getAttribute('data-view') !== getAttribute) {
            $view[j].className = 'view hidden';
          }
        }
      } else if (event.target !== $tab[i]) {
        $tab[i].className = 'tab';
      }
    }
  }
});
