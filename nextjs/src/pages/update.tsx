/**
 * Update Profile Page
 *
 */

import { Mutation } from '@apollo/react-components';
import React from 'react';
import { toast } from 'react-toastify';

import UPDATE_PRODUCT from '../graphql/mutation/updateProduct';

interface UpdateProduct {
  [key: string]: any;
  title: string;
  imageurl: string;
  price: number;
  oldPrice?: number;
  rating: number;
  date: string;
}

class Update extends React.PureComponent<any, UpdateProduct> {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      imageurl: '',
      price: 0,
      oldPrice: undefined,
      rating: 0,
      date: '',
    };
  }

  handleChange = (event: any) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (updateProduct, event) => {
    try {
      event.preventDefault();
      const { state, props } = this;
      await updateProduct({
        variables: {
          productId: props.productId,
          updateProduct: { ...state },
        },
      });
      toast.success('Profile Updated');
    } catch (error) {
      toast.error('Check your connection');
    }
  };
  render() {
    const { state } = this;
    return (
      <div className='container'>
        <h1 className='heading'>Update Profile</h1>
        <Mutation mutation={UPDATE_PRODUCT}>
          {(updateProduct) => (
            <form
              onSubmit={(event) => this.handleSubmit(updateProduct, event)}
              className='update-form'
            >
              <input
                type='text'
                placeholder='Title'
                name='title'
                value={state.title}
                onChange={this.handleChange}
                className='update-input-box'
                required
              />
              <input
                type='text'
                placeholder='Image Url'
                name='imageurl'
                value={state.imageurl}
                onChange={this.handleChange}
                className='update-input-box'
                required
              />
              <input
                type='text'
                placeholder='rating'
                name='rating'
                value={state.rating}
                onChange={this.handleChange}
                className='update-input-box'
                required
              />
              <input
                type='text'
                placeholder='price'
                name='price'
                value={state.price}
                onChange={this.handleChange}
                className='update-input-box'
                required
              />
              <input
                type='text'
                placeholder='oldPrice'
                name='oldPrice'
                value={state.oldPrice}
                onChange={this.handleChange}
                className='update-input-box'
              />
              <input type='submit' value='Submit' className='update-button' />
            </form>
          )}
        </Mutation>
      </div>
    );
  }
}

export default Update;
