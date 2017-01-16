import mindful from 'mindful';
import React from 'react';
import GoogleMap from './GoogleMap.jsx';
import { browserHistory } from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);
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
