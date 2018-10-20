import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from 'config/routes';
import PrivateRoute from 'containers/PrivateRoute';

// TODO: PrivateRoute with layout
const AppRoute = ({ component: Component, layout: Layout, isExact, path, component, ...rest }) => (
  <Route
    path={path}
    key={path}
    exact={isExact}
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

// const MainLayout = props => (
//   <div>
//     <h1>Main</h1>
//     {props.children}
//   </div>
// );

// const AltLayout = props => (
//   <div>
//     <h1>Alt</h1>
//     {props.children}
//   </div>
// );

// const Foo = () => <p>Foo Component</p>;

// const Bar = () => <p>Bar Component</p>;

// const App = () => (
//   <div>
//     <Switch>
//       <AppRoute exact path="/foo" layout={MainLayout} component={Foo} />
//       <AppRoute exact path="/bar" layout={AltLayout} component={Bar} />
//     </Switch>
//   </div>
// );

const App = () => (
  <Fragment>
    <Switch>
      {routes.map(({ path, component, isPrivate, isExact, layout }) =>
          (isPrivate ? (
            <PrivateRoute path={path} component={component} exact={isExact} key={path} />
          ) : (
            <AppRoute
              path={path}
              component={component}
              exact={isExact}
              key={path}
              layout={layout}
            />
          )),)}
    </Switch>
  </Fragment>
);

export default App;
