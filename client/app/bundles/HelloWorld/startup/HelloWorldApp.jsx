import ReactOnRails from 'react-on-rails';
import React from 'react';
import HelloWorld from '../containers/HelloWorld';

export default (props) => (
  <HelloWorld {...props} />
);


// This is how react_on_rails can see the HelloWorldApp in the browser.
ReactOnRails.register({ HelloWorldApp });
