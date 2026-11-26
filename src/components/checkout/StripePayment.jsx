import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useDispatch, useSelector } from 'react-redux'
import PaymentForm from './PaymentForm';
import { useEffect } from 'react';
import { createStripePaymentSecret } from '../../store/actions';
import toast from 'react-hot-toast';
import Skeleton from '../shared/Skeleton';

// Stripe is the payment method is going to implement in the project
// Learning the flow of stipe or any payment method
// how stripe and payments workk ? (client side and server side workflow)
// how stripe and payment integration would work in our app
// Overview of Stripe and their comprehensive documentation
// creating a stripe test account 
// Overview of the StripePayment Component

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
const StripePayment = () => {
  const dispatch = useDispatch();
  const {clientSecret} = useSelector((state) => state.auth);
  const {totalPrice} = useSelector((state) => state.carts);
  const {isLoading , errorMessage } = useSelector((state) => state.errors);

  useEffect (() => {
    if(!clientSecret){
      dispatch(createStripePaymentSecret(totalPrice,toast))
    }
  } , [clientSecret]);

  if(isLoading){
    <div className="max-lg-w mx-auto">
      <Skeleton />
    </div>
  }

  return (
    <>
      {clientSecret && (
        <Elements stripe={stripePromise} options={{clientSecret}} >
        <PaymentForm  clientSecret={clientSecret} totalPrice={totalPrice}/>
        </Elements>
      )} 
    </>
  )
}

export default StripePayment
