import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';




const AppRouter = () => {
    return(
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/create" component={Create} exact={true} />
                </Switch>
            </div>       
        </BrowserRouter>
    )
}

export default AppRouter;