import PropTypes from "prop-types";

export default function promptModal({ onModalClose }) {
  return (
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50"
      onClick={onModalClose} // Close modal when clicking on the overlay
    >
      <div
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()} // Prevent modal content click from closing the modal
      >
        <h3 className="text-lg font-semibold mb-4">Zoinks!</h3>
        <p> Please login or signup to create a board! </p>
        <button
          onClick={onModalClose}
          className="mt-4 px-4 py-2 bg-primary text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}

promptModal.propTypes = {
  onModalClose: PropTypes.func.isRequired,
};
