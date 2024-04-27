import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Test from "./components/test/Test";
import Home from "./components/home/Home";

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/test" element={<Test />} />
                    </Routes>
                </header>
            </div>
        </Router>
    );
}

export default App;
