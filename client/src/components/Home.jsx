import React from 'react';
import mindful from 'mindful';

class Home extends React.Component {
  constructor(props) {
    super(props);

    window.drawMap = this.drawMap;
  }

  drawMap() {
    let location = mindful.get('location');
    let map = new google.maps.Map(document.getElementById('googleMap'), {
      zoom: 15,
      center: {
        lat: location.latitude,
        lng: location.longitude
      }
    });

    mindful.set('map', map)
  }

  getLocation(callback) {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by this browser.');
    } else {
      navigator.geolocation.getCurrentPosition(callback);
    }
  }


  runGoogleScript() {
    var oldScript = document.getElementById('googleMapScript');
    if (!oldScript) {
      var script = document.createElement('script');
      script.id = 'googleMapsScript';
      script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAQHWSAEQdwlUA00k32ytnXXjjhbrwkwWs&callback=drawMap';
      document.body.appendChild(script);
    }
  }


  componentWillMount() {
    this.getLocation((location) => {
      mindful.set('location', location.coords);
      this.runGoogleScript();
    });
  }

  render() {
    return (
      <div>
        <div id='googleMap' style={{
          height: '400px',
          width: '50%'
        }}>
          
        </div>
      </div>
    );
  }
};

export default Home;
