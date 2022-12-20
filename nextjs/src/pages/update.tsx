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
              <input
                type='date'
                placeholder='Date'
                name='date'
                value={state.date}
                onChange={this.handleChange}
                className='update-input-box'
              />
              <input type='submit' value='Submit' className='update-button' />
            </form>
          )}
        </Mutation>
        <style jsx>
          {`
            .container {
              height: 100%;
              min-height: 100vh;
              width: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-flow: column wrap;
            }
            .heading {
              color: white;
              text-align: center;
              font-size: 5rem;
              padding: 5rem 0rem;
            }
            form {
              display: flex;
              flex-flow: column wrap;
              justify-content: center;
              align-items: center;
            }
            .update-input-box {
              background-color: white;
              border-radius: 14px 0px 14px 1px;
              -moz-border-radius: 14px 0px 14px 1px;
              -webkit-border-radius: 14px 0px 14px 1px;
              border: 0px solid #000000;
              box-shadow: 0 20px 30px -16px rgba(9, 9, 16, 0.2);
              border: 0;
              width: 15rem;
              padding: 0.5rem;
              height: 2rem;
              margin-bottom: 2rem;
              font-family: Candara;
            }
            .update-button {
              background-color: white;
              border-radius: 14px 0px 14px 1px;
              -moz-border-radius: 14px 0px 14px 1px;
              -webkit-border-radius: 14px 0px 14px 1px;
              border: 0px solid #000000;
              box-shadow: 0 20px 30px -16px rgba(9, 9, 16, 0.2);
              width: 15rem;
              font-size: 0.9rem;
              padding: 0.5rem;
              height: 3rem;
              margin: 2rem;
              font-family: Candara;
              transition: transform 0.2s;
              cursor: pointer;
            }
            .update-button:hover {
              transform: scale(1.1);
              background: #355c7d;
              background: -webkit-linear-gradient(
                to right,
                #c06c84,
                #6c5b7b,
                #355c7d
              );
              background: linear-gradient(to right, #c06c84, #6c5b7b, #355c7d);
              color: white;
            }
            input:focus {
              outline: none;
            }
          `}
        </style>
        <style jsx global>
          {`
            h1,
            h2 {
              margin: 0;
              font-family: Candara;
            }
            body {
              margin: 0;
              padding: 0;
              height: 100%;
              min-height: 100vh;
              font-family: Candara;
              background: #355c7d;
              background: -webkit-linear-gradient(
                to right,
                #c06c84,
                #6c5b7b,
                #355c7d
              );
              background: linear-gradient(to right, #c06c84, #6c5b7b, #355c7d);
            }
          `}
        </style>
      </div>
    );
  }
}

export default Update;
