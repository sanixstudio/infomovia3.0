"use client";
import React from "react";

const Tabs = () => {
  const [tabValue, setTabValue] = React.useState(0);

  return (
    <div className="tabs tabs-boxed py-2">
      <a className="tab">Tab 1</a>
      <a className="tab tab-active">Tab 2</a>
      <a className="tab">Tab 3</a>
    </div>
  );
};

export default Tabs;
