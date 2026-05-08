import { useState } from "react";

const OtpVerification = () => {
  const [otp, setOtp] = useState("");

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(event.target.value);
  };

  const onSubmitHandler = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Logic to verify the OTP entered by the user
    console.log("OTP submitted:", otp);
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="border border-gray-200 p-8 shadow-lg rounded-lg w-full max-w-md bg-white">
        <h1 className="text-3xl font-bold text-center">Verify Your Email</h1>
        <p className="text-center mt-5">We've sent a verification code to:</p>
        <p className="text-center font-semibold">rendy@rendy.com</p>
        <form onSubmit={onSubmitHandler} className="space-y-4 mt-3">
          <div className="flex flex-col space-y-2">
            <label htmlFor="verification-code" className="font-medium">
              Verification Code
            </label>
            <input
              type="number"
              id="verification-code"
              placeholder="Enter 6-digit code"
              className="border border-gray-300 rounded-md py-2 px-4"
              onChange={onChangeHandler}
              value={otp}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Verify Code
          </button>
          <div className="flex justify-center gap-1">
            <span>Don't receive the code?</span>
            <button
              type="button"
              className="text-blue-500 font-semibold hover:cursor-pointer"
            >
              Resend
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OtpVerification;
