// src/App.tsx

import React from "react";
import DefaultLayout from "./layout/DefaultLayout";

const App: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-4 text-slate-700">Welcome!</h2>
        <p className="text-slate-500">
          This is your beautifully structured layout template. Now let's
          implement the Dark Mode feature!
        </p>
      </div>
    </DefaultLayout>
  );
};

export default App;
