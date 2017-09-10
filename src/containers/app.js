import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import * as mainActions from '../actions/mainAction';
import Button from '../components/button/index';
import Prova from '../components/prova/index';
import ContactForm from "../components/form/index";

class App extends Component {
    submit = (values) => {
        // print the form values to the console
        console.log(values)
    };
    render(){
        const { main } = this.props;
        // const {    } = this.props.mainActions;
        return(
            <div>
                <Button>
                    Add money move!
                </Button>
                <Button>
                    Add category
                </Button>
                <Prova/>
                <ContactForm onSubmit={this.submit} />
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