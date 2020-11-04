import React, { memo } from 'react';
import {renderRoutes} from 'react-router-config';
import {HashRouter} from "react-router-dom";

import routes from './router';
import HYAppHeader from "./components/app-header";
import HYAppFooter from "./components/app-footer"

export default memo(function App() {
    return (
        <HashRouter>
            <HYAppHeader />
            {renderRoutes(routes)}
            <HYAppFooter />
        </HashRouter>
    )
})
