import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import Button from '../button/index';

class CategoryForm extends Component {
    render(){
        const { handleSubmit, cancelItemRequest } = this.props;
        return (
            <form onSubmit={handleSubmit}>
                <label htmlFor="Category creator">Category creator</label>
                <div>
                    <label htmlFor="categoryName">CategoryName</label>
                    <Field name="categoryName" component="input" type="text" />
                </div>
                <Button
                    type='submit'>
                    Save
                </Button>
                <Button
                    type="button"
                    onClick={cancelItemRequest}>
                    Cancel
                </Button>
            </form>
        )
    }
}


CategoryForm = reduxForm({
    form: 'category'
})(CategoryForm);

export default CategoryForm;

CategoryForm.propTypes={
    cancelItemRequest: PropTypes.func.isRequired,
};