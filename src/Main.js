import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Presentation from './Presentation';

class Main extends React.Component {
    render() {
      return (
        <div className="main">
            <Switch>
                <Route path='/presentation' component={Presentation}/>
            </Switch>
        </div>
      );
    }
  }
  
  export default Main;