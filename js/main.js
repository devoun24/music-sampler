$(document).ready(() => {

  function hideAll() {
    $('#oursong').hide();
    $('#youbelongwithme').hide();
    $('#mine').hide();
    $('#22').hide();
    $('#song1').hide();
    $('#song2').hide();
    $('#song3').hide();
    $('#song4').hide();
  }

  hideAll();

  $('.albums').click(function() {

    hideAll();

    $("audio").each(function() {
    this.pause();
    this.currentTime = 0;
    });


    switch ($(this).attr("id")) {
      case "taylorswift":
        $('#oursong').show();
        $('#song1').slideToggle();
        break;
      case "fearless":
        $('#youbelongwithme').show();
        $('#song2').slideToggle();
        break;
      case "speaknow":
        $('#mine').show();
        $('#song3').slideToggle();
        break;
      case "red":
        $('#22').show();
        $('#song4').slideToggle();
        break;
    }
  });



































});
