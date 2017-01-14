import React from 'react';
import { browserHistory } from 'react-router';
import mindful from 'mindful';

var About = () => {
  if (!mindful.get('map')) {
    setTimeout(function () {
      browserHistory.push('/');
    })

    return (<div></div>);

  } else {    

    return (
      <div>
        <h3>About</h3>
        <p>This page was coded using React</p>
      </div>
    );

  }
};



export default About;

