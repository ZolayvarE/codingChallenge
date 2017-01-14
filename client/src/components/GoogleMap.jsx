import React from 'react';
import mindful from 'mindful';

class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
    window.initMap = this.initMap.bind(this);
  }

  drawMap() {
    let location = mindful.get('location');
    let zoom = 15;

    if (!location) {
      zoom = 2;
      location = {
        latitude: 0,
        longitude: 0
      };
    }

    let map = new google.maps.Map(document.getElementById('googleMap'), {
      zoom: zoom,
      center: {
        lat: location.latitude,
        lng: location.longitude
      }
    });

    mindful.set('map', map);
  }

  centerMap() {
    let location = mindful.get('location');
    let map = mindful.get('map');
    map.center = {
      lat: location.latitude,
      lng: location.longitude
    };
  }

  initMap() {
    if (mindful.get('map')) {
      this.centerMap();
    } else {
      this.drawMap();
    }
  }

  getLocation(callback) {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by this browser.');
    } else {
      navigator.geolocation.getCurrentPosition(callback);
    }
  }

  extend(object1, object2) {
    var object2 = object2 || {};
    for (var key in object1) {
      object2[key] = object1[key];
    }
    return object2;
  }

  runGoogleScript() {
    let oldScript = document.getElementById('googleMapsScript');
    if (!oldScript) {
      let newScript = document.createElement('script');
      newScript.id = 'googleMapsScript';
      newScript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAQHWSAEQdwlUA00k32ytnXXjjhbrwkwWs&callback=initMap';
      document.body.appendChild(newScript);
    }
  }

  componentWillMount() {
    this.runGoogleScript();
    this.getLocation((location) => {
      var locationCopy = this.extend(location.coords, {});
      mindful.retain('location', locationCopy);
      this.drawMap();
    });
  }


  render() {
    return (
      <div id='googleMap' style={{
        height: '400px',
        width: '50%'
      }}>
            
      </div>
    );
  }
}

export default GoogleMap;




