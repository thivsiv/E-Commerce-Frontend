import { useState } from "react";  // Importing React's useState hook

// Login Component that handles user authentication (Sign up/Login functionality)
const Login = () => {
  // State to manage the current mode, either "Sign up" or "Login"
  const [currentState, setCurrentState] = useState("Sign up");

  // Function to handle form submission
  const onSubmitHandler = async (event) => {
    event.preventDefault();  // Prevent the default form submission behavior
  };

  return (
    <form
      onSubmit={onSubmitHandler}  // Handling form submission
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 mb-18 gap-4 text-gray"
    >
      {/* Header Section */}
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-grey-800" />
      </div>
      
      {/* Conditional rendering based on currentState */}
      {currentState === "Login" ? (
        ""  // If currentState is "Login", display nothing
      ) : (
        <input
          type="text"
          className="w-full pcx-3 py-2 border-gray-800"
          placeholder="Name"
          required
        />
      )}
      
      {/* Email input field */}
      <input
        type="email"
        className="w-full pcx-3 py-2 border-gray-800"
        placeholder="Email"
        required
      />

      {/* Password input field */}
      <input
        type="password"
        className="w-full pcx-3 py-2 border-gray-800"
        placeholder="Password"
        required
      />

      {/* Footer section with "Forgot your password?" and switch between "Login" and "Sign Up" */}
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your password?</p>
        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign up")}  // Switch to "Sign Up"
            className="cursor-pointer"
          >
            Create account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}  // Switch to "Login"
            className="cursor-pointer"
          >
            Login Here
          </p>
        )}
      </div>

      {/* Submit button to either Sign In or Sign Up based on currentState */}
      <button
        className="bg-[#001147] text-white font-light px-8 py-2 m-4 mb-[90px]"
      >
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;  // Exporting the Login component
