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
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={ <>
                            <Header />
                            <Sidebar />
                        </>}
                    />
                     <Route
                        exact
                        path="/hrstaff"
                        element={
                        <>
                            <Header />
                            <div className='flex'> 
                              <Sidebar />
                              <HRSearch />
                            </div>
                        </>
                      }
                    />
           </Routes>
        </Router>
   
  );
}

export default App;
