import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { useRouter } from "expo-router";

// Mock expo-router
jest.mock("expo-router", () => ({
  useRouter: jest.fn(),
  useLocalSearchParams: jest.fn(() => ({})),
  Redirect: jest.fn(({ href }) => null),
  Stack: {
    Screen: jest.fn(() => null),
  },
  Tabs: {
    Screen: jest.fn(() => null),
  },
}));

// Mock expo-linear-gradient
jest.mock("expo-linear-gradient", () => ({
  LinearGradient: jest.fn(({ children, ...props }) => children),
}));

// Mock lucide-react-native
jest.mock("lucide-react-native", () => ({
  User: jest.fn(() => null),
  Lock: jest.fn(() => null),
  Globe: jest.fn(() => null),
  Compass: jest.fn(() => null),
  ChevronLeft: jest.fn(() => null),
  Phone: jest.fn(() => null),
  CheckCircle2: jest.fn(() => null),
}));

describe("Auth Navigation Flow", () => {
  const mockPush = jest.fn();
  const mockReplace = jest.fn();
  const mockBack = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
      replace: mockReplace,
      back: mockBack,
    });
  });

  describe("Login Screen", () => {
    it("should navigate to forgot password on press", async () => {
      const { default: LoginScreen } = await import(
        "@/app/auth/login"
      );
      const { getByText } = render(<LoginScreen />);

      const forgotPasswordLink = getByText("Forgot password?");
      fireEvent.press(forgotPasswordLink);

      expect(mockPush).toHaveBeenCalledWith("/auth/forgot-password");
    });

    it("should navigate to signup on create account press", async () => {
      const { default: LoginScreen } = await import(
        "@/app/auth/login"
      );
      const { getByText } = render(<LoginScreen />);

      const createAccountLink = getByText(/New here\?/);
      fireEvent.press(createAccountLink);

      expect(mockPush).toHaveBeenCalledWith("/auth/signup");
    });

    it("should navigate to tabs on sign in press", async () => {
      const { default: LoginScreen } = await import(
        "@/app/auth/login"
      );
      const { getByText } = render(<LoginScreen />);

      const signInButton = getByText("Sign In");
      fireEvent.press(signInButton);

      expect(mockReplace).toHaveBeenCalledWith("/(tabs)");
    });
  });

  describe("Signup Screen", () => {
    it("should navigate back on back button press", async () => {
      const { default: SignupScreen } = await import(
        "@/app/auth/signup"
      );
      const { getByTestId } = render(<SignupScreen />);

      const backButton = getByTestId("back-button");
      fireEvent.press(backButton);

      expect(mockBack).toHaveBeenCalled();
    });

    it("should navigate to login on sign in press", async () => {
      const { default: SignupScreen } = await import(
        "@/app/auth/signup"
      );
      const { getByText } = render(<SignupScreen />);

      const signInLink = getByText(/Already have an account\?/);
      fireEvent.press(signInLink);

      expect(mockPush).toHaveBeenCalledWith("/auth/login");
    });

    it("should navigate to tabs on create account press", async () => {
      const { default: SignupScreen } = await import(
        "@/app/auth/signup"
      );
      const { getByText } = render(<SignupScreen />);

      const createAccountButton = getByText("Create Account");
      fireEvent.press(createAccountButton);

      expect(mockReplace).toHaveBeenCalledWith("/(tabs)");
    });
  });

  describe("Verify OTP Screen", () => {
    it("should navigate back on back button press", async () => {
      const { default: VerifyOtpScreen } = await import(
        "@/app/auth/verify-otp"
      );
      const { getByTestId } = render(<VerifyOtpScreen />);

      const backButton = getByTestId("back-button");
      fireEvent.press(backButton);

      expect(mockBack).toHaveBeenCalled();
    });

    it("should navigate to tabs on verify press", async () => {
      const { default: VerifyOtpScreen } = await import(
        "@/app/auth/verify-otp"
      );
      const { getByText } = render(<VerifyOtpScreen />);

      const verifyButton = getByText("Verify OTP");
      fireEvent.press(verifyButton);

      expect(mockReplace).toHaveBeenCalledWith("/(tabs)");
    });
  });

  describe("Forgot Password Screen", () => {
    it("should navigate back on back button press", async () => {
      const { default: ForgotPasswordScreen } = await import(
        "@/app/auth/forgot-password"
      );
      const { getByTestId } = render(<ForgotPasswordScreen />);

      const backButton = getByTestId("back-button");
      fireEvent.press(backButton);

      expect(mockBack).toHaveBeenCalled();
    });

    it("should navigate to tabs on submit press", async () => {
      const { default: ForgotPasswordScreen } = await import(
        "@/app/auth/forgot-password"
      );
      const { getByText } = render(<ForgotPasswordScreen />);

      const submitButton = getByText("Submit");
      fireEvent.press(submitButton);

      expect(mockReplace).toHaveBeenCalledWith("/(tabs)");
    });
  });
});

describe("Auth Index Redirect", () => {
  it("should redirect to login", async () => {
    const { default: AuthIndex } = await import("@/app/auth/index");
    const { Redirect } = require("expo-router");

    render(<AuthIndex />);

    expect(Redirect).toHaveBeenCalledWith(
      expect.objectContaining({ href: "/auth/login" }),
      expect.anything()
    );
  });
});
