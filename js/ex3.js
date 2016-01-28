$(document).ready(function() {
  console.log('can u see me?'),

    //hides all tool tips
    $('.tip').hide();

    
  //internet tooltip
  $('#internet').hover(function() {
    
    $('#internettimeline').show();
      
  }, function() { 
    $('#internettimeline').hide();

  });

    
    
  //gym tooltip
  $('#gym').hover(function() {

    $('#gymtimeline').show();
  }, function() {
    $('#gymtimeline').hide();
  });

    
    
    
  //bother tooltip
    
  $('#bother').hover(function() {
    $('#bothertimeline').show();
  }, function() {
    $('#bothertimeline').hide();

  });
    
    
    //eating tooltip
  $('#eating').hover(function() {
    
    $('#eatingtimeline').show();
      
  }, function() { 
    $('#eatingtimeline').hide();

  });

     

}); //close function