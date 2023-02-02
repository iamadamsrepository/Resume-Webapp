import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Content from './components/Content';

function App() {
  return (
    <Router>
      <div class="flex flex-col min-h-screen bg-gray-900 relative">
        <Header />
        <div class="flex flex-row w-full">
          <Navigation />

          <Routes>
            <Route exact path="/"
              element={<Content content_id="Profile" />}
            >
            </Route>
            <Route path="/experience"
              element={<Content content_id="Experience"/>}
            >
            </Route>
            <Route path="/education"
              element={<Content content_id="Education"/>}
            >
            </Route>
            <Route path="/languages"
              element={<Content content_id="Languages"/>}
            >
            </Route>
            <Route path="/projects"
              element={<Content content_id="Projects"/>}
            >
            </Route>
            <Route path="/contact"
              element={<Content content_id="Contact"/>}
            >
            </Route>
          </Routes>
        </div>
        <div class="flex-1"></div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;