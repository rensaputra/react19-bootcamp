import { Route, Routes } from "react-router";
import "./App.css";
import EmailVerification from "@/components/EmailVerification";
import OtpVerification from "@/components/OtpVerification";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<EmailVerification />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
      </Routes>
    </>
  );
}

export default App;
