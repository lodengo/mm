import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import App from '../layouts/App.jsx';

const AppContainer = withTracker(() => {
    return {
        user: Meteor.user(),
    };

})(App);

export default AppContainer;