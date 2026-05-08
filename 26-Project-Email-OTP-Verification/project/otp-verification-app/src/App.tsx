import { Route, Routes } from "react-router";
import "./App.css";
import EmailVerification from "@/components/EmailVerification";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<EmailVerification />} />
        <Route
          path="/otp-verification"
          element={<h1>OTP Verification Page</h1>}
        />
      </Routes>
    </>
  );
}

export default App;
