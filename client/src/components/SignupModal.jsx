import PropTypes from "prop-types";

export default function SignupModal({ onClose }) {
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
          <label htmlFor="email" className="block m-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="p-2 m-2 border-2 border-primary w-full"
            name="email"
          />
        </div>
        <div>
          <label htmlFor="password" className="block m-2 ">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="p-2 m-2 border-2 border-primary w-full mb"
            name="password"
          />
        </div>
        <div className="flex justify-center py-5">
          <button
            className="text-center w-[160px] text-white h-12 bg-primary rounded-3xl px-4 py-2"
            type="submit"
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
}

SignupModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
