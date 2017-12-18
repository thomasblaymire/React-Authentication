import React, {Component} from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
    class Authentication extends Component {
        static contextTypes = {
            router: React.PropTypes.object
        }

        componentWillMount() {
            if (!this.props.autheticated) {
                this.context.router.push('/');
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.autheticated) {
                this.context.router.push('/');
            }
        }

        render() {
            console.log(this.context);
            return <ComposedComponent {...this.props} />
        }
    }

    function mapStateToProps(state) {
        return { autheticated: state.authenticated };
    }

    return connect(mapStateToProps)(Authentication);
}


/* How To HOC

In some other location, we want to use this HOC.

import Authentication // This is my HOC
import Resrouces // This is the component I want to wrap

const ComposedComponent = Authentication(Resrouces);

// In some render method...
<ComposedComponent resrouces={resourceList}/>

"Our higher order component is a function that is called with the existing component"

*/
