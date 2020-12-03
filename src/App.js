import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Layout/Header';
import {
  AuthenticationProvider,
  oidcLog,
  OidcSecure,
} from '@axa-fr/react-oidc-context';
import oidcConfiguration from './configuration';
import Routes from './Router';

function App() {
  return (
    <div>
      <AuthenticationProvider
        configuration={oidcConfiguration}
        loggerLevel={oidcLog.DEBUG}
      >
        <Router>
          <OidcSecure>
            <Header />
            <Routes />
          </OidcSecure>
        </Router>
      </AuthenticationProvider>
    </div>
  );
}

export default App;
