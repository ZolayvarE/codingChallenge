import mindful from 'mindful';
import React from 'react';
import GoogleMap from './GoogleMap.jsx';
import { browserHistory } from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  filterTrucks(trucks) {
    trucks = trucks.filter((truck) => {
      return truck.status === 'APPROVED';
    });
    mindful.set('foodtrucks', trucks);
    console.log('set trucks');
  }

  handleJSON(json) {
    this.filterTrucks.call(this, json);
  }

  handleResponse(response) {
    response.json().then(this.handleJSON.bind(this));
  }

  componentWillMount() {
    fetch('/foodtrucks').then(this.handleResponse.bind(this));
  }

  render() {
    return (
      <div>
        <GoogleMap />
      </div>
    );
  }
}

export default Home;
