import React, {  } from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppContent from './AppContent';


const App = ({
    user,
}) => {

    return (
    <BrowserRouter>
        <AppContent
            user={user}
        ></AppContent>
    </BrowserRouter>
    );
};

export default App;