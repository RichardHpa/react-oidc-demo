// import React from 'react';
// import { Switch, Route } from 'react-router-dom';
// import { OidcSecure, withOidcSecure } from '@axa-fr/react-oidc-context';

// const PageNotFound = () => <div>Page not found</div>;
// const Home = () => <div>Home</div>;

// const Routes = () => (
//   <Switch>
//     {/* <Route exact path="/">
//       <OidcSecure>Home</OidcSecure>
//     </Route> */}

//     <Route exact path="/" component={withOidcSecure(Home)} />
//     <Route component={PageNotFound} />
//   </Switch>
// );

// export default Routes;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { withOidcSecure, OidcSecure } from '@axa-fr/react-oidc-context';

const PageNotFound = () => <div>Page not found</div>;

const Routes = () => (
  <Switch>
    {/* <OidcSecure> */}
    <Route exact path="/">
      Home
    </Route>
    {/* </OidcSecure> */}

    <Route component={PageNotFound} />
  </Switch>
);

export default Routes;
