import React from 'react';

class AsyncComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            component: null
        };
        const {__asyncLoadPromise: promise, __asyncLoadResolver: resolver} = props;
        const resolve = component => {
            let def = component ? component.default : null;
            this.setState({component: def ? def : component});
        };
        const reject = err => {
            throw err;
        };
        if (resolver) {
            resolver(resolve, reject);
        } else {
            promise.then(resolve, reject);
        }
    }

    render() {
        const {component: Component} = this.state;
        return Component ? <Component {...this.props}/> : null;
    }
}

function getPrototypes(func) {
    const prototypes = [];
    if (typeof func === 'function') {
        let objectPrototype = Object.prototype,
            prototype = func.prototype;
        while (prototype && prototype !== objectPrototype) {
            prototypes.push(prototype);
            prototype = Object.getPrototypeOf(prototype);
        }
    }
    return prototypes;
}

export default promise => {
    let AsyncComponentBundle = null;
    if (promise && typeof promise.then === 'function') {
        AsyncComponentBundle = props => <AsyncComponent __asyncLoadPromise={promise} {...props}/>;
    } else if (typeof promise === 'function' && !getPrototypes(promise).some(proto => proto === React.Component.prototype)) {
        AsyncComponentBundle = props => <AsyncComponent __asyncLoadResolver={promise} {...props}/>;
    }
    if (AsyncComponentBundle) {
        AsyncComponentBundle.displayName = 'AsyncComponentBundle';
        return AsyncComponentBundle;
    }
    return promise;
};