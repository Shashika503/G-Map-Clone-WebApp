mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhc2hrYWh0eiIsImEiOiJja3g5YzI1cXIzbnFsMndsYWlrOHdhZmg5In0.dd-AxQclhYTVEGF1SToZeQ';

navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{
    enableHighAccuracy:true
})

function successLocation(position) {

    console.log(position)
    setupMap([position.coords.longitude, position.coords.latitude])


}

function errorLocation() {

       setupMap([ 6.585395, 79.960739])

}

function setupMap(center) {

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom:14

        });

        const nav = new mapboxgl.NavigationControl()
        map.addControl(nav)  

        var directions = new MapboxDirections({
            accessToken: mapboxgl.accessToken
          })
        
          map.addControl(directions, "top-left")

}

