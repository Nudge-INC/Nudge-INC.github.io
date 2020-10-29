$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
  
    $('.home-overlay').css({
      opacity: function() {
        var elementHeight = $(this).height();
        return 1 - (elementHeight - scrollTop) / elementHeight;
      }
    });
  });