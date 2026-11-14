import { FormControl, FormControlLabel,  RadioGroup } from "@mui/material"
import { useSelector } from "react-redux"

const PaymentMethod = () => {
    
    const {paymentMethod} = useSelector((state) => state.payment)

  return (
    <div className="max-w-md mx-auto p-5 bg-white shadow-md rounded-lg mt-16 border">
        <h1 className="text-2xl font-semibold mb-4">Select Payment Method </h1>
        <FormControl>
            <RadioGroup
                aria-label="payment method"
                name="paymentMethod"
                value={paymentMethod}
                onChange={handleChange} >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
        </FormControl>
    </div>
  )
}

export default PaymentMethod
