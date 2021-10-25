import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ShipContext from 'context/Shipcontext';
import Home from 'components/Home';
import Layout from 'components/Layout';

function App() {
  const [shipData, setShipData] = useState<any>([]);
  const value = {shipData, setShipData};
  return (
    <>
      <ShipContext.Provider value={value}>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </Layout>
        </Router>
      </ShipContext.Provider>
    </>
  );
}

export default App;
