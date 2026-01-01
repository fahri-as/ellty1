import React, { useState, useEffect } from "react";
import Checkbox from "./Checkbox";
import Button from "./Button";

const PageSelector = ({ onDone }) => {
  const [pages, setPages] = useState([
    { id: 1, name: "Page 1", checked: false },
    { id: 2, name: "Page 2", checked: false },
    { id: 3, name: "Page 3", checked: false },
    { id: 4, name: "Page 4", checked: false },
  ]);

  const [allPagesChecked, setAllPagesChecked] = useState(false);
  const [isIndeterminate, setIsIndeterminate] = useState(false);

  useEffect(() => {
    const checkedCount = pages.filter((page) => page.checked).length;
    if (checkedCount === 0) {
      setAllPagesChecked(false);
      setIsIndeterminate(false);
    } else if (checkedCount === pages.length) {
      setAllPagesChecked(true);
      setIsIndeterminate(false);
    } else {
      setAllPagesChecked(false);
      setIsIndeterminate(true);
    }
  }, [pages]);

  const handleAllPagesChange = (checked) => {
    setPages(pages.map((page) => ({ ...page, checked })));
  };

  const handlePageChange = (id, checked) => {
    setPages(pages.map((page) => (page.id === id ? { ...page, checked } : page)));
  };

  const handleDone = () => {
    const selectedPages = pages.filter((page) => page.checked);
    console.log("Selected pages:", selectedPages);
    if (onDone) {
      onDone(selectedPages);
    }
  };

  return (
    <div
      className="w-[370px] bg-white rounded-[6px] border border-gray-200 pt-[10px] pb-[10px]"
      style={{ boxShadow: "0px 8px 15px 0px rgba(20, 20, 20, 0.12), 0px 0px 4px 0px rgba(20, 20, 20, 0.10)" }}>
      {/* All pages option */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <span className="font-['Montserrat'] text-[14px] font-normal leading-[130%] text-gray-700">All pages</span>
        <Checkbox checked={allPagesChecked} onChange={handleAllPagesChange} indeterminate={isIndeterminate} />
      </div>

      {/* Individual pages */}
      <div>
        {pages.map((page) => (
          <div key={page.id} className="flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors">
            <span className="font-['Montserrat'] text-[14px] font-normal leading-[130%] text-gray-700">{page.name}</span>
            <Checkbox checked={page.checked} onChange={(checked) => handlePageChange(page.id, checked)} />
          </div>
        ))}
      </div>

      {/* Separator line */}
      <div className="border-t border-gray-200"></div>

      {/* Done button */}
      <div className="px-4 py-3">
        <Button onClick={handleDone}>Done</Button>
      </div>
    </div>
  );
};

export default PageSelector;
