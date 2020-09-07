import React, { useState, useEffect } from 'react';
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { connect } from 'react-redux';

import Nav from '../Nav';
import MainPage from '../MainPage'


const App = (props) => {


    return (<>
            <div className='wrapper'>
                <div>
                    <Nav/>
                    
                    <Switch>
                        <Route exaxt path='/'>
                            <MainPage/>
                        </Route>
                        <Route path="*">
                            <MainPage/>
                        </Route>

                        <Redirect to="/"/>
                    </Switch>
                </div>
            </div>
            </>)
}

export default App;