$(document).ready(function(){

  // Esto hace el efecto "Parallax" en el fondo de nuestra página web
  // Esto lo hice gracias a "FalconMasters" :)
  $(window).scroll(function(){
    var barra = $(window).scrollTop();
    var posicion =  (barra * 0.10);
    $('body').css({
      'background-position': '0 -' + posicion + 'px'
    });
 
  });

    // Esto es para que cuando hagamos scroll hasta cierto punto, va a aparecer un boton
    // que nos permitira subir si lo presionamos
    $('.boton-subir').click(function(){
    $('body, html').animate({
      scrollTop: '0px'
    }, 500);
  });
 
  $(window).scroll(function(){
    if( $(this).scrollTop() > 900 ){
      $('.boton-subir').slideDown(100);
    } else {
      $('.boton-subir').slideUp(100);
    }
  });

  /* Acá le decimos que al presionar el boton de menu la navegacion se va a abrir y
  va a cambiar el icono de menu a una X y si no, hará lo contrario*/
  $(".boton-menu span").click(function(){
    if($(".boton-menu span").attr('class') == 'icon-menu'){
      $(".boton-menu span").removeClass('icon-menu').addClass('icon-cancel');
      $(".navegacion nav").animate({left:'0'});
    } else {
      $(".boton-menu span").removeClass('icon-cancel').addClass('icon-menu');
      $(".navegacion nav").animate({left:'-100%'});
    }
  });

  // Cambiamos la navegacion a responsive y le agregamos fixed
  var width = $(window).width();
  if(width <= 768 ){
    $(".navegacion nav").addClass('nav-responsive')
  } else{
    $(".navegacion nav").removeClass('nav-responsive')
  }

  $(window).resize(function(){
    var width = $(window).width();
    if(width <= 700 ){
      $(".navegacion nav").addClass('nav-responsive')
    } else{
      $(".navegacion nav").removeClass('nav-responsive')
      $(".navegacion nav").css({'position':''})
    }
  });

  // Hacemos el menu "Fixed"
  var topNav = $('.navegacion').offset().top;
  var heightNav = $('.navegacion').height();

  $(window).scroll(function(){
    // document.write($(window).scrollTop());
    if($(window).scrollTop() > topNav){
      $('.navegacion').css({'position':'fixed','top':'0'})
      $('body').css({'padding-top':heightNav})
      $('.nav-responsive').css({'position':'fixed'})
    } else{
      $('.navegacion').css({'position':'','top':''})
      $('body').css({'padding-top':'0'})
      $('.nav-responsive').css({'position':'absolute'})
    }
  });
});