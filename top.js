$(function () {
  const $picture = $('.picture'),
    show = 'is-show';

  $('button').on('click', function () {
    if ($picture.hasClass(show)) {
      $picture.removeClass(show);
      $(this).text('画像を表示');
    } else {
      $picture.addClass(show);
      $(this).text('画像を非表示');
    }
  });
});
