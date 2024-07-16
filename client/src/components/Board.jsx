import PropTypes from "prop-types";
import Column from "./Column";

export default function Board({ boardEmpty, setBoardEmpty }) {
  const tasks1 = [
    {
      title: "Get talkin",
      subTasks: "0 of 1 subtasks",
      description:
        "They called out her name time and again, but were met with nothing but silence.",
    },
    {
      title: "Grocery",
      subTasks: "0 of 2 subtasks",
      description: "Cats are good pets, for they are clean and are not noisy.",
    },
  ];

  const tasks2 = [];

  const tasks3 = [
    {
      title: "Extract KPI results",
      subTasks: "3 of 3 subtasks",
      description:
        "His ultimate dream fantasy consisted of being content and sleeping eight hours in a row.",
    },
    {
      title: "Managment Course",
      subTasks: "2 of 2 subtasks",
      description:
        "I would have gotten the promotion, but my attendance wasn’t good enough.",
    },
  ];

  return (
    <div className="flex-1 flex bg-linesDark dark:bg-darkDropdown pl-1">
      {boardEmpty ? (
        // Display for empty boards
        <main className="flex-1 flex items-center justify-center">
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
            <Column title="Todo" tasks={tasks1} color="red" />
            <Column title="Doing" tasks={tasks2} color="yellow" />
            <Column title="Done" tasks={tasks3} color="green" />
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
  isLoggedIn: PropTypes.bool.isRequired,
};
