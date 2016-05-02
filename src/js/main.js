$(function () {
    var body = $('body');
    // the height of the screen
    body.append('<style>header .height{height:' + $( window ).height() + 'px;}</style>');

    //init();
});

ymaps.ready(init);
var myMap,
    myPlacemark;

function init(){
    myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 7
    });

    myPlacemark = new ymaps.Placemark([55.76, 37.64], {
        hintContent: 'Москва!',
        balloonContent: 'Столица России'
    });

    myMap.geoObjects.add(myPlacemark);
}
