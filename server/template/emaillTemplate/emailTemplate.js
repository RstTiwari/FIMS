
export const  emailVerification = ({  name, emailOtp }) => {
    return `${name} Thank you for signing up for Myfac8ry FTMS ! Before we can activate your account, we kindly ask you to verify your email  by entring the otp provided below   ${emailOtp}  valid for 15 minutes only` ;
};

export const passwordVerification =({name,emailOtp})=>{
  return `Hello ${name} We have received a request to reset the password for your account on FIMS for Light and Grips Equipment . To proceed with the password reset,  by entring the otp provided below ${emailOtp} valid for 15 minutes only` ;
};
