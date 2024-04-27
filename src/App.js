import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Test from "./components/test/Test";

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Routes>
                        <Route path="/" element={<div>Home</div>} />
                        <Route path="/test" element={<Test />} />
                    </Routes>
                </header>
            </div>
        </Router>
    );
}

export default App;
