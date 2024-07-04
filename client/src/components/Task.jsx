import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "./Modal";

export default function Task({ title, subTasks, description }) {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-2 relative cursor-pointer"
    >
      <h3 className="text-md font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{subTasks}</p>
      {showModal && (
        <Modal title={title} description={description} onClose={handleClose} />
      )}
    </div>
  );
}

Task.propTypes = {
  title: PropTypes.string.isRequired,
  subTasks: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
