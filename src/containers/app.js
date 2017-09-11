import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as mainActions from '../actions/mainAction';
import * as categoryActions from '../actions/categoryAction';
import Button from '../components/button/index';
import Category from './cat';
import Main from './main';

class App extends Component {
    render(){
        const { main, cat } = this.props;
        const {  addItemRequest, cancelItemRequest, addItemSuccess  } = this.props.mainActions;
        const { addCatRequest, cancelCatRequest, addCatSuccess } = this.props.categoryActions;
        return(
            <div>
                <Main
                    newItem={main.addNewItem}
                    addItemRequest={addItemRequest}
                    cancelItemRequest={cancelItemRequest}
                    addItemSuccess={addItemSuccess}
                    itemArr={main.mainArr}
                    categories={cat.categoryArr}
                />
                <Category
                    newItem={cat.addNew}
                    addItemRequest={addCatRequest}
                    cancelItemRequest={cancelCatRequest}
                    addItemSuccess={addCatSuccess}
                    categories={cat.categoryArr}
                />
            </div>

        )
    }
}

function mapStateToProps (state) {
    return {
        main: state.main,
        cat: state.cat
    }
}

function mapDispatchToProps(dispatch){
    return {
        mainActions: bindActionCreators(mainActions, dispatch),
        categoryActions: bindActionCreators(categoryActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
