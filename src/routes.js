import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './Pages/Home'
import Login from './Pages/Login'
import Error from './components/Error'

function Routes(){
    return(
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>

                <Route path="*" component={Error}/>
            </Switch>
        </div>
    )
}

export default Routes