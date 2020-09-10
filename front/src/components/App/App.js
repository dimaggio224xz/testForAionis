import React, { useState, useEffect } from 'react';
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";


import Nav from '../Nav';
import MainPage from '../MainPage'
import CompletedNotes from '../CompletedNotes';


const App = (props) => {



    return (<>
            <div className='wrapper'>
                <div>
                    <Nav/>
                    
                    <Switch>
                        <Route exact path='/'>
                            <MainPage/>
                        </Route>

                        <Route path='/completed'>
                            <CompletedNotes/>
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