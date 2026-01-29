import Feed from "./component/Feed";
import Sidebar from "./component/Sidebar";
import Suggestions from "./component/Suggestions";
import "./index.css";
import React from "react";

function App() {
     return (
      <div className="h-screen flex bg-black">
        <div className="w-16 md:w-64 border-r border-gray-800"><Sidebar/></div>
        
        <div className="flex-1 overflow-y-auto scrollbar-hide"><Feed/></div>
        <div className="w-80 hidden lg:block overflow-y-auto scrollbar-hide border-l border-gray-800"><Suggestions/> </div>
      </div>
     )
    
}

export default App;
