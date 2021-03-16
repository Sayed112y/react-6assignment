import React, { Component, Fragment, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navigator from './product/naviagator';
import About from './product/about';
// import Addproduct from './product/addproduct';
// import Allproduct from './product/allproduct';
import ErrorWrapper from './ErrorWrapper';

class App extends Component {
  render() {
    return (
      <ErrorWrapper>
      <div className="container">
        <Router>
        <div>
          <Navigator />
           <Switch>
            <Route path="/product" component={About} exact/>
            <Route path="/product" component={lazy(() => import ('./product/about'))} />
            <Route path="/product" component={lazy(() => import ('./product/addproduct'))} />
            <Route path="/product" component={lazy (() => import ('./product/allproduct'))} />
          </Switch>
        </div>
        </Router>
        </div>
      </ErrorWrapper>
    )
  }
}

export default App;