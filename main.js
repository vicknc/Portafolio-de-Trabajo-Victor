// Agrega un evento de scroll para detectar cuando se encuentra en una sección
$(window).scroll(function() {
    console.log('Se está ejecutando el código');
    var scrollPosition = $(window).scrollTop();
    var sections = $('section');
  
    sections.each(function() {
      var sectionId = $(this).attr('id');
      var sectionTop = $(this).offset().top;
      var sectionBottom = sectionTop + $(this).height();
  
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        // Agrega la clase activa al botón correspondiente
        $('.nav-link[data-section="' + sectionId + '"]').addClass('active');
      } else {
        // Elimina la clase activa del botón correspondiente
        $('.nav-link[data-section="' + sectionId + '"]').removeClass('active');
      }
    });
  });

  $(window).scroll(function() {
    var scrollPosition = $(window).scrollTop();
    var sections = $('section');
  
    sections.each(function() {
      var sectionId = $(this).attr('id');
      var sectionTop = $(this).offset().top;
      var sectionBottom = sectionTop + $(this).height();
  
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        if (sectionId === 'nombre') {
          $('.navbar').addClass('inicio');
        } else {
          $('.navbar').removeClass('inicio');
        }
      }
    });
  });