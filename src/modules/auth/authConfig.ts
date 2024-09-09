import { WFAuth } from "@xatom/core";
import { apiClient } from "../api/apiConfig";

// Xano Endpoints
const LOGIN_ENDPOINT = "/auth/login";
const SIGNUP_ENDPOINT = "/auth/signup";
const LOGOUT_ENDPOINT = "/auth/logout";
const ME_ENDPOINT = "/auth/me";

// Define UserInfo interface with additional fields
interface UserInfo {
  name: string;
  email: string;
  plan: "free" | "basic" | "growth" | "pro";
  tokens_remaining: number;
  role: "admin" | "user";
  subscription_type?: "monthly" | "annual"; // Allow undefined as well
  brokerage: string; // New field
  licensed_in: string; // New field
  years_experience: number; // New field
}

// Updated AuthResponse to reflect additional fields
interface AuthResponse {
  token: string;
  user_details: {
    name: string;
    email: string;
    plan: "free" | "basic" | "growth" | "pro";
    tokens_remaining: number;
    role: "admin" | "user";
    subscription_type: string;
    brokerage: string; // New field
    licensed_in: string; // New field
    years_experience: number; // New field
  };
}

interface SignupResponse {
  token: string;
  user_details: {
    id: string;
    name: string;
    email: string;
    plan: "free" | "basic" | "growth" | "pro";
    verified: boolean;
    brokerage: string; // New field
    stripe_id: string;
    created_at: number;
    magic_link: string | null;
    licensed_in: string; // New field
    renewel_date: string | null;
    terms_of_service: boolean;
    tokens_remaining: number;
    years_experience: number; // New field
    subscription_type: string;
  };
}

// Initialize WFAuth instance with UserInfo and role
const userAuth = new WFAuth<UserInfo, "admin" | "user", { token: string }>();

// Keys for storing in localStorage
const TOKEN_KEY = "auth_token";
const USER_INFO_KEY = "user_info";

// Store token in localStorage
const setTokenInLocalStorage = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

// Get token from localStorage
const getTokenFromLocalStorage = () => {
  return localStorage.getItem(TOKEN_KEY);
};

// Remove token from localStorage
const removeTokenFromLocalStorage = () => {
  localStorage.removeItem(TOKEN_KEY);
};

// Store user info in localStorage
export const setUserInfoInLocalStorage = (userInfo: UserInfo) => {
  localStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfo));
};

// Get user info from localStorage
const getUserInfoFromLocalStorage = (): UserInfo | null => {
  const userInfoString = localStorage.getItem(USER_INFO_KEY);
  return userInfoString ? JSON.parse(userInfoString) : null;
};

// Remove user info from localStorage
const removeUserInfoFromLocalStorage = () => {
  localStorage.removeItem(USER_INFO_KEY);
};

// Check if the user is logged in
const isLoggedIn = () => !!getTokenFromLocalStorage();

// Restore session from localStorage (to be called on page load)
const restoreSession = (): boolean => {
  const token = getTokenFromLocalStorage();
  const userInfo = getUserInfoFromLocalStorage();

  if (token && userInfo) {
    // Restore WFAuth session from localStorage
    userAuth.setUser(userInfo);
    userAuth.setConfig({ token });
    userAuth.setRole(userInfo.role);
    return true;
  }
  return false;
};

// Helper to validate and assign subscription type
const getValidSubscriptionType = (
  type: string
): "monthly" | "annual" | undefined => {
  if (type === "monthly" || type === "annual") {
    return type;
  }
  return undefined; // Invalid types become undefined
};

// Login function with additional fields handling
const login = async (email: string, password: string): Promise<boolean> => {
  try {
    const response = await apiClient
      .post<{
        auth_token: string;
        user_details: {
          id: string;
          name: string;
          email: string;
          plan: "free" | "basic" | "growth" | "pro";
          subscription_type: string;
          tokens_remaining: number;
          brokerage: string; // New field
          licensed_in: string; // New field
          years_experience: number; // New field
        };
      }>(LOGIN_ENDPOINT, {
        data: { email, password },
      })
      .fetch();

    const { auth_token, user_details } = response;

    if (!auth_token || !user_details) {
      console.error("Invalid response: Missing token or user details");
      return false;
    }

    // Store the token and user details in localStorage
    setTokenInLocalStorage(auth_token);
    setUserInfoInLocalStorage({
      name: user_details.name,
      email: user_details.email,
      plan: user_details.plan,
      tokens_remaining: user_details.tokens_remaining,
      role: "user", // Assuming "user" as default role
      subscription_type: getValidSubscriptionType(
        user_details.subscription_type
      ),
      brokerage: user_details.brokerage, // New field
      licensed_in: user_details.licensed_in, // New field
      years_experience: user_details.years_experience, // New field
    });

    // Set WFAuth session with the user details
    userAuth.setUser({
      name: user_details.name,
      email: user_details.email,
      plan: user_details.plan,
      tokens_remaining: user_details.tokens_remaining,
      role: "user",
      subscription_type: getValidSubscriptionType(
        user_details.subscription_type
      ),
      brokerage: user_details.brokerage, // New field
      licensed_in: user_details.licensed_in, // New field
      years_experience: user_details.years_experience, // New field
    });
    userAuth.setConfig({ token: auth_token });
    userAuth.setRole("user");

    return true;
  } catch (error) {
    console.error("Login failed:", error);
    return false;
  }
};

// Signup function with additional fields handling
const signup = async (
  name: string,
  email: string,
  password: string,
  brokerage: string,
  licensed_in: string,
  years_experience: number,
  terms_of_service: boolean
): Promise<{ success: boolean; message?: string }> => {
  if (!terms_of_service) {
    return { success: false, message: "You must accept the terms of service" };
  }

  if (years_experience < 0) {
    return {
      success: false,
      message: "Years of experience cannot be negative",
    };
  }

  try {
    // Make the API call for signup and expect the correct structure
    const signupRequest = apiClient.post<{
      auth_token: string;
      user_details: {
        id: string;
        name: string;
        email: string;
        plan: "free" | "basic" | "growth" | "pro";
        subscription_type: string;
        tokens_remaining: number;
        brokerage: string; // New field
        licensed_in: string; // New field
        years_experience: number; // New field
      };
    }>(SIGNUP_ENDPOINT, {
      data: {
        name,
        email,
        password,
        brokerage,
        licensed_in,
        years_experience,
        terms_of_service,
      },
    });

    const response = await signupRequest.fetch();

    // Destructure the correct properties from the response
    const { auth_token, user_details } = response;

    // Ensure we have the token and user details, otherwise handle error
    if (!auth_token || !user_details) {
      console.error("Invalid response: Missing token or user details");
      return { success: false, message: "Signup failed. Please try again." };
    }

    // Store the token and user details in localStorage
    setTokenInLocalStorage(auth_token);
    setUserInfoInLocalStorage({
      name: user_details.name,
      email: user_details.email,
      plan: user_details.plan,
      tokens_remaining: user_details.tokens_remaining,
      role: "user", // Assuming role is 'user' for signup
      subscription_type: getValidSubscriptionType(
        user_details.subscription_type
      ),
      brokerage: user_details.brokerage, // New field
      licensed_in: user_details.licensed_in, // New field
      years_experience: user_details.years_experience, // New field
    });

    // Set WFAuth session with the user info
    userAuth.setUser({
      name: user_details.name,
      email: user_details.email,
      plan: user_details.plan,
      tokens_remaining: user_details.tokens_remaining,
      role: "user",
      subscription_type: getValidSubscriptionType(
        user_details.subscription_type
      ),
      brokerage: user_details.brokerage, // New field
      licensed_in: user_details.licensed_in, // New field
      years_experience: user_details.years_experience, // New field
    });
    userAuth.setConfig({ token: auth_token });
    userAuth.setRole("user");

    return { success: true };
  } catch (error: any) {
    console.error("Signup failed:", error);

    // Check if error response contains a message
    if (error.response && error.response.data && error.response.data.message) {
      return { success: false, message: error.response.data.message };
    }

    return { success: false, message: "Signup failed. Please try again." };
  }
};

// Logout function with server-side session invalidation
const logout = async (): Promise<boolean> => {
  try {
    await apiClient.post(LOGOUT_ENDPOINT);

    // Clear the token and user info from localStorage
    removeTokenFromLocalStorage();
    removeUserInfoFromLocalStorage();

    // Clear WFAuth session
    userAuth.logout();

    return true;
  } catch (error) {
    console.error("Logout failed:", error);
    return false;
  }
};

// Get User Information from WFAuth instance or LocalStorage
const getUserInfo = (): UserInfo | null => {
  return userAuth.isLoggedIn()
    ? userAuth.getUser()
    : getUserInfoFromLocalStorage();
};

// Get User Role (i.e., admin/user) from WFAuth instance
const getUserRole = (): "admin" | "user" | null => userAuth.getRole();

// Get User Plan (subscription tier)
const getUserPlan = (): "free" | "basic" | "growth" | "pro" | null => {
  const user = userAuth.getUser();
  return user ? user.plan : null;
};

// Retrieve authenticated user data from the /auth/me endpoint
const fetchCurrentUser = async (): Promise<boolean> => {
  try {
    const token = getTokenFromLocalStorage();
    if (!token) {
      console.error("No token found, logging out");
      throw new Error("User not logged in.");
    }

    const meRequest = apiClient.get<AuthResponse>(ME_ENDPOINT);

    meRequest.onData((data: AuthResponse) => {
      const { user_details } = data;

      // Update WFAuth and localStorage with the user information
      userAuth.setUser({
        name: user_details.name,
        email: user_details.email,
        plan: user_details.plan,
        tokens_remaining: user_details.tokens_remaining,
        role: user_details.role,
        subscription_type: getValidSubscriptionType(
          user_details.subscription_type
        ),
        brokerage: user_details.brokerage, // New field
        licensed_in: user_details.licensed_in, // New field
        years_experience: user_details.years_experience, // New field
      });

      setUserInfoInLocalStorage({
        name: user_details.name,
        email: user_details.email,
        plan: user_details.plan,
        tokens_remaining: user_details.tokens_remaining,
        role: user_details.role,
        subscription_type: getValidSubscriptionType(
          user_details.subscription_type
        ),
        brokerage: user_details.brokerage, // New field
        licensed_in: user_details.licensed_in, // New field
        years_experience: user_details.years_experience, // New field
      });

      userAuth.setRole(user_details.role);
    });

    meRequest.onError((error) => {
      console.error("Failed to fetch current user:", error);
      return false;
    });

    await meRequest.fetch();

    return true;
  } catch (error) {
    console.error("Error in fetchCurrentUser:", error);
    return false;
  }
};

export {
  login,
  signup,
  logout,
  isLoggedIn,
  getUserInfo,
  getUserRole,
  getUserPlan,
  fetchCurrentUser,
  restoreSession,
};
