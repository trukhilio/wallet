import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import Button from '../button/index';

class ItemForm  extends Component{
    render(){
        const { handleSubmit, categories, cancelItemRequest } = this.props;
        return (
            <form onSubmit={ handleSubmit }>
                <label htmlFor="Item creator">Item creator</label>
                <div>
                    <label>Select Category</label>
                    <div>
                        <Field name="selectCategory" component="select">
                            <option value="">Select a category...</option>
                            {categories.map((categoryOption, index) =>
                                <option value={categoryOption.categoryName} key={index}>
                                    {categoryOption.categoryName}
                                </option>
                            )}
                        </Field>
                    </div>
                </div>
                <div>
                    <label htmlFor="money">Money</label>
                    <Field name="money" component="input" type="number" />
                </div>
                <div>
                    <label htmlFor="moneyType">Money Type</label>
                    <div>
                        <label>
                            <Field
                                name="moneyType"
                                component="input"
                                type="radio"
                                value="gain"
                            />{' '}
                            Gain
                        </label>
                        <label>
                            <Field
                                name="moneyType"
                                component="input"
                                type="radio"
                                value="spend"
                            />{' '}
                            Spend
                        </label>
                    </div>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <Field name="description" component="textarea" type="text" />
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

ItemForm = reduxForm({
    form: 'item'
})(ItemForm);

export default ItemForm;

ItemForm.propTypes={
    cancelItemRequest: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired
};