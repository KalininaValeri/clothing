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
        center: [54.981236780152074,82.91233549999997],
        zoom: 16
    });

    myPlacemark = new ymaps.Placemark([54.981236780152074,82.91233549999997], {
        hintContent: 'Детская одежда',
        balloonContent: 'Кислород'
    });

    myMap.behaviors.disable('scrollZoom');

    myMap.geoObjects.add(myPlacemark);
}
