import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Sidebar,{Advertise, Charts, Domain, ExtraChart, FileManager, NavigationBar, Reports, Settings, Teams} from './components/indexComponets';

function App() {
  return (
    <div>
      <Router>
        <div className="app">
          <Sidebar />
          <div className="content">
            <NavigationBar/>
            <Routes>
              <Route path="/" element={<Charts />} />
              <Route path="/charts" element={<ExtraChart/>}/>
              <Route path="/file-manager" element={<FileManager/>} />
              <Route path="/team-chat" element={<Teams/>} />
              <Route path="/advertise" element={<Advertise/>} />
              <Route path="/reports" element={<Reports/>} />
              <Route path="/settings" element={<Settings/>} />
              <Route path="/domain" element={<Domain/>} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  )
}

export default App
