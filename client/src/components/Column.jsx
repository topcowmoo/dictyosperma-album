import PropTypes from "prop-types";

export default function Column({ title }) {
  return (
    <div className="flex flex-col w-1/6 p-1">
      <h2 className="text-slate-400 bg-opacity-50 text-xs ml-3 font-semibold mb-2">
        {title} (0)
      </h2>
      <div className="flex-1 bg-linesLight dark:bg-darkCards rounded-lg">
        {/* Column content */}
      </div>
    </div>
  );
}

Column.propTypes = {
  title: PropTypes.string.isRequired,
};
