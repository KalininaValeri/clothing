$(function () {
    var body = $('body');
    // the height of the screen
    body.append('<style>header .height{height:' + $( window ).height() + 'px;}</style>');

    initMap()
})

function initMap() {

    var myLatLng = {lat: 54.981245, lng: 82.912314};

    // Specify features and elements to define styles.
    var styleArray = [
        {
            featureType: "all",
            stylers: [
                { saturation: -80 }
            ]
        },{
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [
                { hue: "#00ffee" },
                { saturation: 50 }
            ]
        },{
            featureType: "poi.business",
            elementType: "labels",
            stylers: [
                { visibility: "off" }
            ]
        }
    ];

    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        scrollwheel: false,
        // Apply the map style array to the map.
        styles: styleArray,
        zoom: 17
    });

    var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: 'Hello World!'
    });
}

