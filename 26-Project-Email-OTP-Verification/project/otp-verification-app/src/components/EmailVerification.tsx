import { useState } from "react";

const EmailVerification = () => {
  const [email, setEmail] = useState("");

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Logic to send OTP to the provided email address
    console.log("Email submitted:", email);
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="border border-gray-200 p-8 shadow-lg rounded-lg w-full max-w-md bg-white">
        <h1 className="text-3xl font-bold text-center">Email Verification</h1>
        <form onSubmit={handleSubmit} className="space-y-4 mt-6">
          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded-md py-2 px-4"
              onChange={onChangeHandler}
              value={email}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Send Verification Code
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailVerification;
