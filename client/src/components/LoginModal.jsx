import PropTypes from "prop-types";

export default function LoginModal({ onClose, openSignupModal }) {
  return (
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose} // Close modal when clicking on the overlay
    >
      <form
        className="flex flex-col bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        onClick={(event) => event.stopPropagation()} // Prevent click event from propagating to the overlay
      >
        <div className="my-3">
          <label htmlFor="username" className="m-2">
            Username/Email
          </label>
          <input
            className="p-2 m-2 bg-linesLight"
            type="text"
            id="username"
            name="username"
          />
        </div>
        <div>
          <label htmlFor="password" className="m-2 ">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="p-2 m-2 bg-linesLight"
            name="password"
          />
        </div>
        <button className="border text-center p-3" type="submit">
          Login
        </button>
        <p className="text-center text-xs py-3">
          Not a user?{" "}
          <button type="button" onClick={openSignupModal}>
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
