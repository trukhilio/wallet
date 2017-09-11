import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryForm from '../components/formCategory/index';
import Button from '../components/button/index';

class Category extends Component{
    render(){
        const { newItem, addItemRequest, cancelItemRequest, addItemSuccess, categories } = this.props;
        const categoriesList = categories.map((item, index)=>(
            <div key={index}>
                <p>{item.categoryName}</p>
            </div>
        ));
        return(
            <div>
                { newItem ?
                    <CategoryForm
                        onSubmit={addItemSuccess}
                        cancelItemRequest={cancelItemRequest}/>
                :
                    <Button
                        title="Add category"
                        type="button"
                        onClick={addItemRequest}
                    >
                        Add category
                    </Button>
                }
                <h4>Categories</h4>
                {categoriesList}
            </div>
        )
    }
}

export default Category

Category.propTypes={
    newItem: PropTypes.bool.isRequired,
    addItemRequest: PropTypes.func.isRequired,
    cancelItemRequest: PropTypes.func.isRequired,
    addItemSuccess: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
};