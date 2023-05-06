(function () {
  $('ul li ul').hide();

  $('.menulink').click(function () {
    const thismenu = $(this).next('ul');
    $('ul li ul').not(thismenu).hide();
    thismenu.toggle();
  });

})();