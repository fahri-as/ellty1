import React, { useState, useEffect } from "react";
import Checkbox from "./Checkbox";
import Button from "./Button";

const PageSelector = ({ onDone }) => {
  const [pages, setPages] = useState([
    { id: 1, name: "Page 1", checked: false },
    { id: 2, name: "Page 2", checked: false },
    { id: 3, name: "Page 3", checked: false },
    { id: 4, name: "Page 4", checked: false },
    { id: 5, name: "Page 5", checked: false },
    { id: 6, name: "Page 6", checked: false },
  ]);

  const [allPagesChecked, setAllPagesChecked] = useState(false);

  useEffect(() => {
    const checkedCount = pages.filter((page) => page.checked).length;
    if (checkedCount === pages.length) {
      setAllPagesChecked(true);
    } else {
      setAllPagesChecked(false);
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
      className="w-[370px] bg-white rounded-[6px] border border-[#EEEEEE] pt-[10px] pb-[10px]"
      style={{
        boxShadow: "0px 8px 15px 0px rgba(20, 20, 20, 0.12), 0px 0px 4px 0px rgba(20, 20, 20, 0.10)",
      }}>
      {/* All pages option */}
      <div
        className="group flex items-center justify-between h-[42px] cursor-pointer hover:bg-[#F4F4F4] transition-colors"
        style={{ padding: "8px 15px 8px 30px" }}
        onClick={() => handleAllPagesChange(!allPagesChecked)}>
        <span className="font-['Montserrat'] text-[14px] font-normal leading-[130%] text-[#1F2128]">All pages</span>
        <Checkbox checked={allPagesChecked} onChange={handleAllPagesChange} />
      </div>

      {/* Separator line after All pages */}
      <div style={{ padding: "0 15px" }}>
        <div className="border-t border-[#EEEEEE]"></div>
      </div>

      {/* Individual pages - scrollable container with hidden scrollbar */}
      <div
        className="overflow-y-auto scrollbar-hide"
        style={{
          maxHeight: "168px",
          scrollbarWidth: "none" /* Firefox */,
          msOverflowStyle: "none" /* IE and Edge */,
        }}>
        {pages.map((page) => (
          <div
            key={page.id}
            className="group flex items-center justify-between h-[42px] hover:bg-[#F4F4F4] transition-colors cursor-pointer"
            style={{ padding: "8px 15px 8px 30px" }}
            onClick={() => handlePageChange(page.id, !page.checked)}>
            <span className="font-['Montserrat'] text-[14px] font-normal leading-[130%] text-[#1F2128]">{page.name}</span>
            <Checkbox checked={page.checked} onChange={(checked) => handlePageChange(page.id, checked)} />
          </div>
        ))}
      </div>

      {/* Separator line */}
      <div style={{ padding: "10px 15px" }}>
        <div className="w-full border-t border-[#EEEEEE]"></div>
      </div>

      {/* Done button */}
      <div style={{ padding: "0 15px 0 15px" }}>
        <Button onClick={handleDone}>Done</Button>
      </div>
    </div>
  );
};

export default PageSelector;
