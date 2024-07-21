import { useState } from "react";
import PropTypes from "prop-types";
import { useMutation } from "@apollo/client";
import { ADD_BOARD } from "../utils/mutations";

export default function AddBoardModal({ onClose, userId, onAddBoard }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [addBoard] = useMutation(ADD_BOARD);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addBoard({
        variables: { title, description, userId },
      });
      onAddBoard(data.addBoard);
      onClose();
    } catch (error) {
      console.error("Error adding board:", error);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose} // Close modal when clicking on the overlay
    >
      <form
        className="flex flex-col bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-80"
        onClick={(event) => event.stopPropagation()} // Prevent click event from propagating to the overlay
        onSubmit={handleSubmit}
      >
        <div className="my-3">
          <label htmlFor="title" className="block m-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="p-2 m-2 border-2 border-primary w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="my-3">
          <label htmlFor="description" className="block m-2">
            Description
          </label>
          <input
            type="text"
            id="description"
            className="p-2 m-2 border-2 border-primary w-full"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-center py-5">
          <button
            className="text-center w-[160px] text-white h-12 bg-primary rounded-3xl px-4 py-2"
            type="submit"
          >
            Add Board
          </button>
        </div>
      </form>
    </div>
  );
}

AddBoardModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
  onAddBoard: PropTypes.func.isRequired,
};
