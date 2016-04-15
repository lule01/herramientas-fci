$(document).ready( function() {
  $('button').on('click', function() {
    function button_display(a,b,c) {
      $('.category_01').css('display',a);
      $('.category_02').css('display',b);
      $('.category_03').css('display',c);
    }

    console.log( $(this).data('show') )

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
      $('button').html('Conócelas aquí');
      $('button').data('show',true);
    }

  })
});