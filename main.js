
const 
   toggleThemeButton = document.querySelector('.mode-footer-sidebar__toggle'),
   toggleMenuButton = document.querySelector('.header-sidebar__burger'),
   sidebar = document.querySelector('.sidebar'),
   menuTollips = document.querySelectorAll('.menu-sidebar__text'),
   checkbox = toggleThemeButton.querySelector('.mode-footer-sidebar__checkbox'),
   searchButton = document.querySelector('.search-sidebar__search'),
   labelMove = document.querySelector('.mode-footer-sidebar__label');

checkbox.checked ? document.body.classList.toggle('_dark') : document.body.classList.toggle('_light');

const toggleMenu = e => {
   sidebar.classList.toggle('_active');
   sidebar.classList.toggle('_close');

   if(sidebar.classList.contains('_active')){
      menuTollips.forEach(toollip => toollip.classList.remove('_absolute'));
   }
}

menuTollips.forEach(toollip => {
   const transitioinEndTollipListener = e => {
      if(sidebar.classList.contains('_close')){
         toollip.classList.add('_absolute');
      }
   }

   transitioinEndTollipListener();
   toollip.addEventListener('transitionend', transitioinEndTollipListener);
});

toggleThemeButton.addEventListener('click', e => {
   checkbox.checked = !checkbox.checked;

   document.body.classList.toggle('_dark');
   document.body.classList.toggle('_light');

   if(document.body.classList.contains('_light')){
      labelMove.innerHTML = 'Dark mode';
   }else{
      labelMove.innerHTML = 'Light mode';
   }
});

toggleMenuButton.addEventListener('click', toggleMenu);
searchButton.addEventListener('click', e => {
   if(sidebar.classList.contains('_close')){
      toggleMenu();
   }
})