import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import i18n from 'meteor/universe:i18n';
import AppContainer from '../imports/ui/containers/AppContainer';

function getLang () {
  return (
      navigator.languages && navigator.languages[0] ||
      navigator.language ||
      navigator.browserLanguage ||
      navigator.userLanguage ||
      'en-US'
  );
}

i18n.setLocale(getLang());

Meteor.startup(() => {   
  render(<AppContainer />, document.getElementById('app')); 
});
