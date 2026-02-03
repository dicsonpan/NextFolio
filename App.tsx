import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components/ui/Layouts';
import PublicView from './pages/PublicView';
import AdminView from './pages/AdminView';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-zinc-950 text-zinc-50 font-sans selection:bg-primary/30">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<PublicView />} />
            <Route path="/admin" element={<AdminView />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;