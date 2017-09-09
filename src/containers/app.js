import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import * as mainActions from '../actions/mainAction';
import Button from '../components/button/index';

class App extends Component {
    render(){
        const { main } = this.props;
        // const {    } = this.props.mainActions;
        return(
            <div>
                <Button>
                    Add money move
                </Button>
                <Button>
                    Add category
                </Button>
            </div>

        )
    }
}

function mapStateToProps (state) {
    return {
        main: state.main
    }
}

// function mapDispatchToProps(dispatch){
//     return {
//         mainActions: bindActionCreators(mainActions, dispatch)
//     }
// }

export default connect(mapStateToProps
    // , mapDispatchToProps
)(App);