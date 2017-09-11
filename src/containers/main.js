import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../components/button/index';
import ItemForm from '../components/formItem/index';

class Main extends Component{
    render(){
        const { newItem, addItemRequest, cancelItemRequest, addItemSuccess, itemArr, categories } = this.props;
        return(
            <div>
                { newItem ?
                    <ItemForm
                        categories={categories}
                        cancelItemRequest={cancelItemRequest}
                        onSubmit={addItemSuccess}
                    />
                    :
                    <Button
                        title="Add category"
                        type="button"
                        onClick={addItemRequest}
                    >
                        Add money flow
                    </Button>
                }
                <table>
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Money</th>
                            <th>Money type</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                        <tbody>
                        {itemArr.map((item, index) =>
                            <tr key={index}>
                                <td>{item.selectCategory}</td>
                                <td>{item.money}</td>
                                <td>{item.moneyType}</td>
                                <td>{item.description}</td>
                                <td><Button>Change</Button></td>
                                <td><Button>Delete</Button></td>
                            </tr>
                        )}
                        </tbody>
                </table>
            </div>
        )
    }
}

export default Main

Main.propTypes={
    newItem: PropTypes.bool.isRequired,
    addItemRequest: PropTypes.func.isRequired,
    cancelItemRequest: PropTypes.func.isRequired,
    addItemSuccess: PropTypes.func.isRequired,
    itemArr: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired
};
