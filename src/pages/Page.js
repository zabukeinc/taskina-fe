import React from "react";
import usePage from "../hooks/usePage";
import PageItem from "../components/PageItem";
import PageFilter from "../components/PageFilter";

/**
 * Main Page for `Page` layer.
 */
const Page = () => {
  const { pages, toggleChecked, toggleCheckedAll, isCheckedAll } = usePage();

  return (
    <div className="card">
      <PageFilter
        isCheckedAll={isCheckedAll}
        toggleCheckedAll={toggleCheckedAll}
      />
      <div className="divider"></div>

      <div className="page-content">
        {pages.map((page, index) => (
          <PageItem page={page} toggleChecked={toggleChecked} key={index} />
        ))}
      </div>

      <div className="divider"></div>

      <div className="footer">
        <button className="button">
          <span className="text">Done</span>
        </button>
      </div>
    </div>
  );
};

export default Page;
