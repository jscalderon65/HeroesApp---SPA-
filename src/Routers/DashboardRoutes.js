import React from "react";
import Navbar from "../Components/UI/Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import { BackTop } from 'antd';
import HeroeScreen from "../Components/UI/Heroes/HeroeScreen";
import MarvelScreen from "../Components/MARVEL/MarvelScreen";
import DcScreen from "../Components/DC/DcScreen";
import {SearchScreen} from '../Components/Search/SearchScreen';
const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div style={{margin:"20px"}} className="mb-5">
        <BackTop />
        <Switch>
          <Route exact path="/marvel" component={(history) => <MarvelScreen />} />
          <Route
            exact
            path="/heroe/:heroeId"
            component={() => <HeroeScreen />}
          />
          <Route exact path="/dc" component={() => <DcScreen />} />
          <Route exact path="/search" component={SearchScreen} />
          <Redirect to="/marvel" />
        </Switch>
      </div>
      <br/>
      </>
  );
};

export default DashboardRoutes;
