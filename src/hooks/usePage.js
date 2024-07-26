import { useEffect, useState } from "react";

const defaultPages = Array.from({ length: 6 }, (_, index) => ({
  id: index,
  name: `Page ${index + 1}`,
  checked: false,
}));

/**
 * Hooks for `Page` layer.
 */
const usePage = () => {
  const [pages, setPages] = useState(defaultPages);
  const [isCheckedAll, setIsCheckedAll] = useState(false);

  useEffect(() => {
    const allChecked = pages.every((page) => page.checked);
    setIsCheckedAll(allChecked);
  }, [pages]);

  const toggleChecked = (id) => {
    const updatedPages = pages.map((page) =>
      page.id === id ? { ...page, checked: !page.checked } : page,
    );

    setPages(updatedPages);
  };

  const toggleCheckedAll = () => {
    const newIsCheckedAll = !isCheckedAll;
    const updatedPages = pages.map((page) => ({
      ...page,
      checked: newIsCheckedAll,
    }));

    setPages(updatedPages);
  };

  return { pages, toggleChecked, toggleCheckedAll, isCheckedAll };
};

export default usePage;
