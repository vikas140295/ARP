import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import AllComponents from '../components';
import routesConfig from './config';

export default class CRouter extends Component {
    requireAuth = (permission, component) => {
        const { auth } = this.props;
        const { permissions } = auth.data;

        if (!permissions || !permissions.includes(permission)) return <Redirect to={'404'} />;
        return component;
    };
    requireLogin = (component, permission) => {
        const { auth } = this.props;
        const { permissions } = auth.data;
        if (process.env.NODE_ENV === 'production' && !permissions) {
            return <Redirect to={'/login'} />;
        }
        return permission ? this.requireAuth(permission, component) : component;
    };
    mapRoutes = r => {
        const route = r => {
            const Component = AllComponents[r.component];
            return (
                <Route
                    key={r.route || r.key}
                     path={r.route || r.key}
                    // render={props => r.login ? 
                    //     <Component {...props} />
                    //     : this.requireLogin(<Component {...props} />, r.auth)}
                    render={props => <Component {...props} />}
                />
            )
        }
        return r.component && !r.subs ? route(r) : r.subs.map(this.mapRoutes);
    }    
    render() {
        return (
            <Switch>
                {
                    Object.keys(routesConfig).map(key => 
                        routesConfig[key].map(this.mapRoutes)
                    )
                }

                <Route render={() => <Redirect to="/404" />} />
            </Switch>
        )
    }
}
