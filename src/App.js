import React from "react";
import TopBanner from "./components/TopBanner/TopBanner";
import Services from "./components/Services/Services";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import Analysis from "./components/Analisys/Analisys";

function App() {
  return (
    <div>
      <TopNavigation />
      <TopBanner />  
      <Services />
      <Analysis />
    </div>
  );
}

export default App;
