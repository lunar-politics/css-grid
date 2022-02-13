ymaps.ready(init);
    function init(){

        var myMap = new ymaps.Map("map", {
            center: [55.76041449234624,37.61597972931669],
            zoom: 13
        });
        myPlacemark1 = new ymaps.Placemark([55.76963285029638,37.64009815277861], {

          hintContent: 'Метка'
        }, {
          iconLayout: 'default#image',
          iconImageHref: 'img/yandex-mark.svg',
          iconImageSize: [12, 12],
          iconImageOffset: [-5, -5]
        });
        myMap.geoObjects
          .add(myPlacemark1);
        myMap.behaviors.disable('scrollZoom');

        myPlacemark1.events.add('click', function() {
          document.querySelector('.contacts__modal').style='display: flex'
        })

    }

const contactCloseBtn = document.querySelector('.contacts__close-btn--mark');
const contactsModal = document.querySelector('.contacts__modal');

contactCloseBtn.onclick = function() {
  contactsModal.style='display: none';
}
