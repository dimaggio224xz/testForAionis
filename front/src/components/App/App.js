import React from 'react';
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";


import Nav from '../Nav';
import MainPage from '../MainPage'
import CompletedNotes from '../CompletedNotes';
import CreateNote from '../CreateNote';
import UpdateNote from '../UpdateNote';

const App = () => {
    return (<>
            <div className='wrapper'>
                <div>
                    <Nav/>
                    
                    <Switch>
                        <Route exact path='/'>
                            <MainPage/>
                        </Route>

                        <Route exact path='/completed'>
                            <CompletedNotes/>
                        </Route>

                        <Route exact path='/create'>
                            <CreateNote/>
                        </Route>

                        <Route exact path='/update/:id'>
                            <UpdateNote/>
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