$(function () {
   $('.team__slider').slick({
      infinite: true,
      slidesToShow: 3,
      nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
      prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
      slidesToScroll: 1
   });

   var s = document.forms.Sum,
    d = s.querySelectorAll('input[type="checkbox"]:not([value]), input[type="checkbox"][value=""]');
  for (var i = 0; i < d.length; i++) // чтобы не было написано NaN, убираем в disabled пункты, где не прописаны значения
    d[i].disabled = true;
s.onchange = function() { // начало работы функции сложения
  var n = s.querySelectorAll('[type="checkbox"]'),
      itog = 0;
  for(var j=0; j<n.length; j++)
    n[j].checked ? itog += parseFloat(n[j].value) : itog;
    document.getElementById('rezultat').innerHTML = 'Стоимость работ.................' + itog;
} 



});