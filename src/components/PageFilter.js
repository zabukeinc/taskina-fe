import React from "react";

/**
 * Renders a filter header All Pages a checkbox and its name.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.isCheckedAll - The state of current checkbox value.
 * @param {Function} props.toggleCheckedAll - The function to be called when the checkbox and the row is clicked.
 */
const PageFilter = ({ toggleCheckedAll, isCheckedAll }) => {
  return (
    <div className="page-wrapper" onClick={() => toggleCheckedAll()}>
      <span className="text">All Pages</span>
      <input
        type="checkbox"
        checked={isCheckedAll}
        onChange={() => toggleCheckedAll()}
        className="checkbox"
      />
    </div>
  );
};

export default PageFilter;
