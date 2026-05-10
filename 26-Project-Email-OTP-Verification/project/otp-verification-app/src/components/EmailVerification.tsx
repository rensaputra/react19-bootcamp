import { useState } from "react";
import { useNavigate } from "react-router";

const EmailVerification = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    fetch("http://localhost:5000/api/send-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then(async (response) => {
        if (response.ok) {
          navigate(`/otp-verification?email=${encodeURIComponent(email)}`);
        } else {
          const data = await response.json();
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
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
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors disabled:bg-gray-400"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Verification Code"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailVerification;
