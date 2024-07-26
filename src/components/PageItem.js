import React from "react";

/**
 * Renders a single page item with a checkbox and its name.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.page - The page object with an id, name, and checked state.
 * @param {Function} props.toggleChecked - The function to be called when the checkbox is clicked.
 */
const PageItem = ({ page, toggleChecked }) => {
  return (
    <div className="page-wrapper" onClick={() => toggleChecked(page.id)}>
      <span className="text">{page.name}</span>

      <input
        key={page.id}
        type="checkbox"
        checked={page.checked}
        onChange={() => toggleChecked(page.id)}
        className="checkbox"
      />
    </div>
  );
};

export default PageItem;
