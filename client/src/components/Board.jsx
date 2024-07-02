export default function Board() {
  return (
    <div className={`flex-1 flex`}>
      <main className="flex-1 bg-linesLight dark:bg-darkDropdown flex items-center justify-center">
        <div className="flex flex-col text-center items-center">
          <div className="text-slate-400 bg-opacity-50 mb-4">
            This board is empty. Create a new column to get started.
          </div>
          <button className="w-[160px] text-white h-12 bg-primary rounded-3xl px-4 py-2">
            + Add Column
          </button>
        </div>
      </main>
    </div>
  );
}
