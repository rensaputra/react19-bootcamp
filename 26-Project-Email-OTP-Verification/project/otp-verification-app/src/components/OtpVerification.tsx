import { useState } from "react";
import { useSearchParams } from "react-router";
import { useNavigate } from "react-router";

const OtpVerification = () => {
  const [otp, setOtp] = useState("");
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const email = searchParams.get("email");

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(event.target.value);
  };

  const onSubmitHandler = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);
    fetch("http://localhost:5000/api/verify-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, otp }),
    })
      .then(async (response) => {
        const data = await response.json();
        alert(data.message);
        if (response.ok) {
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Error occurred while verifying OTP:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onResendHandler = () => {
    fetch("http://localhost:5000/api/send-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then(async (response) => {
        if (response.ok) {
          alert("OTP sent successfully");
        } else {
          const data = await response.json();
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="border border-gray-200 p-8 shadow-lg rounded-lg w-full max-w-md bg-white">
        <h1 className="text-3xl font-bold text-center">Verify Your Email</h1>
        <p className="text-center mt-5">We've sent a verification code to:</p>
        <p className="text-center font-semibold">{email}</p>
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
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors disabled:bg-gray-400"
            disabled={loading}
          >
            {loading ? "Verifying..." : "Verify Code"}
          </button>
          <div className="flex justify-center gap-1">
            <span>Don't receive the code?</span>
            <button
              type="button"
              className="text-blue-500 font-semibold hover:cursor-pointer"
              onClick={onResendHandler}
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
