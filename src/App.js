import './App.scss';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Main/Profile";

function App() {
    return (
        <div className="AppWrapper">
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}

export default App;
