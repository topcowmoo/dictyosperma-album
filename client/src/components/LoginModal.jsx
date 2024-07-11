import PropTypes from "prop-types";

export default function LoginModal({ onClose, openSignupModal }) {
  return (
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose} // Close modal when clicking on the overlay
    >
      <form
        className="flex flex-col bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-80"
        onClick={(event) => event.stopPropagation()} // Prevent click event from propagating to the overlay
      >
        <div className="my-3">
          <label htmlFor="username" className="block m-2">
            Email
          </label>
          <input
            className="p-2 m-2 border-2 border-primary w-full"
            type="text"
            id="username"
            name="username"
          />
        </div>
        <div className="my-3">
          <label htmlFor="password" className="block m-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="p-2 m-2 border-2 border-primary w-full"
            name="password"
          />
        </div>
        <div className="flex justify-center">
          <button
            className="text-center w-[160px] text-white h-12 bg-primary rounded-3xl px-4 py-2"
            type="submit"
          >
            Login
          </button>
        </div>
        <p className="text-center text-xs py-3">
          Not a user?{" "}
          <button
            type="button"
            onClick={openSignupModal}
            className="text-blue-500 underline"
          >
            Sign up
          </button>
        </p>
      </form>
    </div>
  );
}

LoginModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  openSignupModal: PropTypes.func.isRequired,
};
