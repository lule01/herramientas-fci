$(document).ready( function() {
  $('#three-axis button').on('click', function() {

  });

  $('button').on('click', function() {
    function button_display(a,b,c) {
      $('.category_01').parent().css('display',a);
      $('.category_02').parent().css('display',b);
      $('.category_03').parent().css('display',c);
    }

    if( $(this).data('category') === 'category_01' && $(this).data('show') === true ) {
      button_display('','none','none');
      $(this).html('Limpiar filtro');
      $(this).data('show',false);
    } else if( $(this).data('category') === 'category_02' && $(this).data('show') === true ) {
      button_display('none','none','');
      $(this).html('Limpiar filtro');
      $(this).data('show',false);
    } else if( $(this).data('category') === 'category_03' && $(this).data('show') === true ) {
      button_display('none','','none');
      $(this).html('Limpiar filtro');
      $(this).data('show',false);
    } else {
      button_display('','','');
      $('#three-axis button').html('Conócelas aquí');
      $('#three-axis button').data('show',true);
    }

  })
});