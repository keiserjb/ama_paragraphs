(function ($) {
  Drupal.behaviors.galleryLightbox = {
    attach: function (context, settings) {
      var modals = $('.modal', context);
      modals.each(function () {
        var modal = $(this);
        modal.on('shown.bs.modal', function () {
          var modalContent = modal.find('.modal-content');
          modalContent.scrollTop(0);
        });
      });
    }
  };
})(jQuery);

(function ($) {
  $('.modal').on('shown.bs.modal', function () {
    var modalContent = $(this).find('.modal-content');
    modalContent.scrollTop(0);
  });

  $('.modal-close').on('click', function () {
    var modal = $(this).closest('.modal');
    modal.modal('hide');
  });
})(jQuery);

