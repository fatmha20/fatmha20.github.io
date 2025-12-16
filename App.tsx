import React from 'react';
import MovingBackground from './components/MovingBackground';
import AccessGate from './components/AccessGate';

const App: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-nfl-darkBlue text-white font-sans selection:bg-nfl-red selection:text-white">
      <MovingBackground />
      <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
        <AccessGate />
      </div>
    </div>
  );
};

export default App;