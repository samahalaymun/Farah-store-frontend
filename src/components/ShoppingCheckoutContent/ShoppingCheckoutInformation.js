import React from 'react'
import { Link } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import Input from '../Common/Input/Input';

function ShoppingCheckoutInformation() {
  return (
    <div className="">
      <h4 className="heading-title mb-2">Contact Information</h4>
      <div className="mb-4">
        <Input
          name="email"
          value="samah_abu_laymun@hotmail.com"
          isDisabled={true}
        />
      </div>

      <CheckoutForm />
    </div>
  );
}

export default ShoppingCheckoutInformation
