import React from "react";
import ChatBox from "./ChatBox";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md p-4 bg-white shadow-lg rounded-lg">
        <ChatBox />
      </div>
    </div>
  );
};

export default App;
