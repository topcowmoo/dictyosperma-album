import PropTypes from "prop-types";

export default function Modal({ title, description, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose} // Close modal when clicking on the overlay
    >
      <div
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()} // Prevent modal content click from closing the modal
      >
        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-primary text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
