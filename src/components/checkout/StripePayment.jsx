import { Alert, AlertTitle } from '@mui/material'


// Stripe is the payment method is going to implement in the project
const StripePayment = () => {
  return (
    <div className="h-96 flex justify-center items-center">
           <Alert severity="warning" variant='filled' style={{maxWidth: "400px"}}>
                <AlertTitle>Stripe unavailable</AlertTitle>
                  Stripe payment is unavailable . Please use another payment method.
           </Alert>
        </div>
  )
}

export default StripePayment
