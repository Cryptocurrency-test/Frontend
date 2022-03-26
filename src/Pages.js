import React from 'react'
import { Route, Switch } from 'react-router'
import { Dummy } from './pages/Dummy'
import App from './Dashboard/App';

export function Pages() {
    return (
        <Switch>
            <Route path='/explore'>
                <Dummy title='Wallet Service' />
            </Route>
            <Route path='/subscription-1'>
                <Dummy title='Subscription Channel 1' />
            </Route>
            <Route path='/subscription-2'>
                <Dummy title='Subscription Channel 2' />
            </Route>
            <Route path='/subscription-3'>
                <Dummy title='Subscription Channel 3' />
            </Route>
            <Route path='/'>
                <App />
            </Route>
        </Switch>
    )
}