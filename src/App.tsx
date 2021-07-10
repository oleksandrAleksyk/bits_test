import React from 'react';
import {observer} from "mobx-react";
import {BrowserRouter} from "react-router-dom";
//
import {Navbar} from "./components/nabvar/Navbar";
//
import './common/styles/default-styles.scss';
import {Router} from "./common/router/router";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Router />
    </BrowserRouter>
  );
}

export default observer(App);
