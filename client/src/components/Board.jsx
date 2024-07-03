import PropTypes from "prop-types";
import Column from "./Column";

export default function Board({ boardEmpty, setBoardEmpty }) {
  return (
    <div className="flex-1 flex">
      {boardEmpty ? (
        // Display for empty boards
        <main className="flex-1 bg-linesDark dark:bg-darkDropdown flex items-center justify-center">
          <div className="flex flex-col text-center items-center">
            <div className="text-slate-400 bg-opacity-50 mb-4">
              This board is empty. Create a new column to get started.
            </div>
            <button
              onClick={() => setBoardEmpty(false)}
              className="w-[160px] text-white h-12 bg-primary rounded-3xl px-4 py-2"
            >
              + Add Column
            </button>
          </div>
        </main>
      ) : (
        //display of empty example columnns

        <main className="flex-1 bg-linesDark dark:bg-darkDropdown flex">
          <div className="flex flex-1 space-x-4 p-1">
            <Column title="Todo" />
            <Column title="Doing" />
            <Column title="Done" />
            <div className="flex flex-col w-1/6 p-1">
              <h2 className="text-md mb-2 min-h-[16px]"></h2>
              <div
                onClick={() => setBoardEmpty(true)}
                className="flex flex-1 text-slate-400 bg-linesLight dark:bg-darkCards rounded-lg items-center justify-center hover:text-primary hover:cursor-grab"
              >
                <h2 className=" bg-opacity-50 text-lg font-semibold">
                  + New Column
                </h2>
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}

Board.propTypes = {
  boardEmpty: PropTypes.bool.isRequired, // Boolean indicating if the board is empty
  setBoardEmpty: PropTypes.func.isRequired, // Function to toggle board empty state
};
