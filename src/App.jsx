import React, { useState } from "react";
import Content from "./components/Content";

const App = () => {
  const [selectedSection, setSelectedSection] = useState("home");

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  return (
    <div>
      <Content
        section={selectedSection}
        onSectionChange={handleSectionChange}
      />
    </div>
  );
};

export default App;
