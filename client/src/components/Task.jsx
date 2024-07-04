import PropTypes from "prop-types";

export default function Task({ title, description }) {
  return (
    <div className="bg-white dark:text-slate-400 dark:bg-darkBackground p-4 rounded-lg shadow mb-2">
      <h3 className="text-sm font-semibold mb-1">{title}</h3>
      <p className="text-xs text-gray-600">{description}</p>
    </div>
  );
}

Task.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
