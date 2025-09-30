import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HRSearch from './components/HRSearch';
import {
    HashRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

function App() {
  return (
     <Router>
          <div className="App bg-gray-200">
              <Header />
              <div className ="flex">
              <Sidebar/>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={ <>
                            {/* <Header /> */}
                            {/* <Sidebar /> */}
                        </>}
                    />
                     <Route
                        exact
                        path="/hrstaff"
                        element={
                        <>
                             <HRSearch />
                        </>
                      }
                    />
                    <Route
                        exact
                        path="/copyoldlessons"
                        element={
                        <>
                              <HRSearch />
                        </>
                      }
                    />
           </Routes>
           </div>
           </div>
        </Router>
   
  );
}

export default App;
