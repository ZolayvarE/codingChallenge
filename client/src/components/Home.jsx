import mindful from 'mindful';
import React from 'react';
import GoogleMap from './GoogleMap.jsx';
import { browserHistory } from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);

  }

  handleJSON(json) {
    mindful.set('foodtrucks', json);
  }

  handleResponse(response) {
    response.json().then(this.handleJSON);
  }

  componentWillMount() {

    if (!mindful.get('foodtrucks')) {
      fetch('/foodtrucks').then(this.handleResponse.bind(this));
    }
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
