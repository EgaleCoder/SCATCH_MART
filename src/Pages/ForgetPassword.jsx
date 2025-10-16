import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";



const ForgotPasswordForm = () => {
  const navigate = useNavigate();
  const {
    sendOtp,
    verifyOtp,
    resetPassword,
    loading: authLoading,
  } = useAuthContext();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(0);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  // Timer for OTP resend
  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const showMessage = (msg, type = "success") => {
    setMessage(msg);
    setMessageType(type);
    setTimeout(() => setMessage(""), 1500);
  };

  const handleSendOTP = async (e) => {
    if (e) e.preventDefault();

    try {
      if (!email) {
        showMessage("Please enter your email address", "error");
        toast.error("Enter the email linked to your account.");
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showMessage("Please enter a valid email address", "error");
        toast.error("That doesn't look like a valid email.");
        return;
      }

      setLoading(true);

      const result = await sendOtp(email);

      if (result.success) {
        setLoading(false);
        setStep(2);
        setTimer(60);
        showMessage("OTP sent successfully!", "success");
        toast.success(result.message || "OTP sent to your inbox.");
      } else {
        setLoading(false);
        showMessage(result.error || "Failed to send OTP", "error");
        toast.error(result.error || "Failed to send OTP. Please try again.");
      }
    } catch (error) {
      setLoading(false);
      showMessage("Server error, please try again later.", "error");
      toast.error("Server error. Please try again shortly.");
    }
  };

  const handleVerifyOTP = async (e) => {
    if (e) e.preventDefault();

    if (!otp || otp.length !== 6) {
      showMessage("Please enter 6-digit OTP", "error");
      toast.error("Enter the 6-digit OTP we sent.");
      return;
    }

    setLoading(true);

    try {
      const result = await verifyOtp(email, otp);

      if (result.success) {
        setLoading(false);
        setStep(3);
        showMessage("OTP verified successfully!");
        toast.success(
          result.message || "OTP confirmed. Let's reset your password."
        );
      } else {
        setLoading(false);
        showMessage(result.error || "Invalid OTP", "error");
        toast.error(result.error || "Incorrect OTP. Please try again.");
      }
    } catch (error) {
      setLoading(false);
      showMessage("Verification failed", "error");
      toast.error("Failed to verify OTP. Please try again.");
      console.error("Verify OTP Error:", error);
    }
  };

  const handleResetPassword = async (e) => {
    if (e) e.preventDefault();

    if (!newPassword || !confirmPassword) {
      showMessage("Please fill all fields", "error");
      toast.error("Fill in both password fields.");
      return;
    }

    if (newPassword.length < 6) {
      showMessage("Password must be at least 6 characters", "error");
      toast.error("Password must be at least 6 characters.");
      return;
    }

    if (newPassword !== confirmPassword) {
      showMessage("Passwords do not match", "error");
      toast.error("Passwords don't match yet.");
      return;
    }

    setLoading(true);

    try {
      const result = await resetPassword(newPassword);
      if (result.success) {
        setLoading(false);
        showMessage("Password reset successfully!");
        toast.success(
          result.message || "Password updated. You can log in now."
        );

        // Redirect to login page after success
        setTimeout(() => {
          setStep(1);
          setEmail("");
          setOtp("");
          setNewPassword("");
          setConfirmPassword("");
          navigate("/login");
        }, 1500);
      } else {
        setLoading(false);
        showMessage(result.error || "Failed to reset password", "error");
        toast.error(
          result.error || "Failed to reset password. Please try again."
        );
      }
    } catch (error) {
      setLoading(false);
      showMessage("Password reset failed", "error");
      toast.error("Failed to reset password. Please try again.");
    }
  };

  const handleResendOTP = async () => {
    if (timer > 0) return;

    try {
      const result = await sendOtp(email);

      if (result.success) {
        setTimer(60);
        showMessage("OTP sent again to your email!");
        toast.success(result.message || "OTP re-sent. Check your inbox.");
      } else {
        showMessage(result.error || "Failed to resend OTP", "error");
        toast.error(result.error || "Failed to resend OTP. Please try again.");
      }
    } catch (error) {
      showMessage("Failed to resend OTP", "error");
      toast.error("Failed to resend OTP. Please try again.");
      console.error("Resend OTP Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Forgot Password
          </h1>
          <p className="text-gray-600">
            {step === 1 && "Enter your email to receive OTP"}
            {step === 2 && "Enter the OTP sent to your email"}
            {step === 3 && "Set your new password"}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Progress</span>
            <span className="text-sm font-medium text-gray-600">{step}/3</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Message Display */}
        {message && (
          <div
            className={`mb-6 p-4 rounded-lg ${messageType === "success"
              ? "bg-green-50 text-green-700 border border-green-200"
              : "bg-red-50 text-red-700 border border-red-200"
              }`}
          >
            {message}
          </div>
        )}

        {/* Step 1: Email Input */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Enter your email address"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                We'll send a 6-digit OTP to this email
              </p>
            </div>

            <button
              onClick={handleSendOTP}
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending OTP..." : "Send OTP to Email"}
            </button>
          </div>
        )}

        {/* Step 2: OTP Verification */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <label
                htmlFor="otp"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Enter 6-Digit OTP
              </label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) =>
                  setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-center text-2xl font-mono tracking-widest"
                placeholder="000000"
                maxLength="6"
                required
              />
              <p className="text-sm text-gray-500 mt-2">OTP sent to: {email}</p>
            </div>

            <div className="flex justify-between items-center">
              <button
                type="button"
                onClick={handleResendOTP}
                disabled={timer > 0}
                className="text-blue-600 hover:text-blue-700 font-medium text-sm disabled:text-gray-400 disabled:cursor-not-allowed"
              >
                {timer > 0 ? `Resend in ${timer}s` : "Resend OTP"}
              </button>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-gray-600 hover:text-gray-700 font-medium text-sm"
              >
                Change Email
              </button>
            </div>

            <button
              onClick={handleVerifyOTP}
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Verifying..." : "Verify OTP"}
            </button>
          </div>
        )}

        {/* Step 3: New Password */}
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <label
                htmlFor="newPassword"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                New Password
              </label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Enter new password"
                required
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Confirm New Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Confirm new password"
                required
              />
            </div>

            <div className="text-sm text-gray-500">
              <p>Password requirements:</p>
              <ul className="list-disc list-inside mt-1 space-y-1">
                <li>At least 6 characters long</li>
                <li>Must match confirmation</li>
              </ul>
            </div>

            <button
              onClick={handleResetPassword}
              disabled={loading}
              className="w-full bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Updating Password..." : "Update Password"}
            </button>
          </div>
        )}

        {/* Back to Login Link */}
        <div className="mt-8 text-center">
          <button
            onClick={() => (window.location.href = "/login")}
            className="text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            ? Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
