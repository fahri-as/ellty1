import React from "react";
import PageSelector from "./components/PageSelector";

function App() {
  const handleDone = (selectedPages) => {
    alert(`Selected pages: ${selectedPages.map((p) => p.name).join(", ") || "None"}`);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] flex items-center justify-center p-8">
      <PageSelector onDone={handleDone} />
    </div>
  );
}

export default App;
