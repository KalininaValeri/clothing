$(function () {
    var body = $('body');
    // the height of the screen
    body.append('<style>header .height{height:' + $( window ).height() + 'px;}</style>');

    YMaps();
})

YMaps.jQuery(function () {
    // Создает экземпляр карты и привязывает его к созданному контейнеру
    var map = new YMaps.Map(YMaps.jQuery("#YMapsID")[0]);

    // Устанавливает начальные параметры отображения карты: центр карты и коэффициент масштабирования
    map.setCenter(new YMaps.GeoPoint(37.64, 55.76), 10);
})
