## Install

    npm install --save react-bundle-util

## Config for React Router

    import get from 'react-bundle-util';

    // local import
    import Home from '../views/Home';

    // routes for react-router with v4.
    const routes = [
        {
            path: '/',
            exact: true,
            // sync module without code splitting.
            component: get(Home)
        }, {
            path: '/comment',
            // async module but not lazy load with code splitting.
            component: get(import('../views/Comment'))
        }, {
            path: '/detail/:id',
            // lazy load module with code splitting.
            component: get(resolve => require(['../views/Detail'], resolve))
        }, {
            path: '/list',
            // the export module is not the default.
            component: get(resolve => require(['../views/List'], module => resolve(module.List)))
        }
    ];

    // export routes
    export default routes;

## Component for React Router

    import React from 'react';
    import ReactDOM from 'react-dom';
    import {BrowserRouter, Route, Switch} from 'react-router-dom';

    import get from 'react-bundle-util';

    // local import
    import Home from './views/Home';

    // async module but not lazy load with code splitting.
    const Comment = get(import('./views/Comment'));
    // lazy load module with code splitting.
    const Detail = get(resolve => require(['./views/Detail'], resolve));
    // the export module is not the default.
    const List = get(resolve => require(['./views/List'], module => resolve(module.List)));

    class App extends React.Component {
        render() {
            return (
                <div>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/comment" component={Comment}/>
                        <Route path="/detail/:id" component={Detail}/>
                        <Route path="/list" component={List}/>
                    </Switch>
                </div>
            );
        }
    }

    ReactDOM.render(
        <BrowserRouter>
            <App/>
        </BrowserRouter>,
        document.getElementById('root')
    );






