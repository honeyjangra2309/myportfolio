const progress=document.querySelector('.html');
setTimeout(()=>{
  progress.style.width=progress.getAttribute('data-done')+'%';
  progress.style.opacity=1;
},500)
const progress1=document.querySelector('.css');
setTimeout(()=>{
  progress1.style.width=progress1.getAttribute('data-done')+'%';
  progress1.style.opacity=1;
},500)
const progress2=document.querySelector('.javascript');
setTimeout(()=>{
  progress2.style.width=progress2.getAttribute('data-done')+'%';
  progress2.style.opacity=1;
},500)
const progress3=document.querySelector('.c');
setTimeout(()=>{
  progress3.style.width=progress3.getAttribute('data-done')+'%';
  progress3.style.opacity=1;
},500)
const progress4=document.querySelector('.nodejs');
setTimeout(()=>{
  progress4.style.width=progress4.getAttribute('data-done')+'%';
  progress4.style.opacity=1;
},500)
const progress5=document.querySelector('.bootstrap');
setTimeout(()=>{
  progress5.style.width=progress5.getAttribute('data-done')+'%';
  progress5.style.opacity=1;
},500)
const progress6=document.querySelector('.reactjs');
setTimeout(()=>{
  progress6.style.width=progress6.getAttribute('data-done')+'%';
  progress6.style.opacity=1;
},500)
const progress7=document.querySelector('.mysql');
setTimeout(()=>{
  progress7.style.width=progress7.getAttribute('data-done')+'%';
  progress7.style.opacity=1;
},500)




$(document).ready(function(){
  $('#menu').click(function()
  {
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
  });
  $(window).on('scroll load',function()
  {
    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');
  })
});





// var flg = localStorage.getItem('on_load_counter');

// if (flg === null) {
//     flg = 0;
// }

// flg++;

// localStorage.setItem("on_load_counter", flg);

// document.getElementById('result').innerHTML = "visitors count: "+flg;