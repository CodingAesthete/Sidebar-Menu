(function () {
  "use strict";

  hideSubMenus();
  const menulinks = document.querySelectorAll('.menulink');

  for (let i = 0; i < menulinks.length; i++) {
    menulinks[i].addEventListener('click', function (e) {
      e.preventDefault();

      let thisMenu = this.parentNode.querySelector('ul');

      if (thisMenu.classList.contains('show-menu')) {
        thisMenu.className='hide-menu';
      } else {
        hideSubMenus()
        thisMenu.className = 'show-menu';
      }
    });
    
  }

  function hideSubMenus(){
    const submenus = document.querySelectorAll('ul li ul');

    for (let i = 0; i < submenus.length; i++) {
      submenus[i].className = 'hide-menu';
    }

  }

})();