import Navbar from "./navbar";
import Home from "./Home";

function App() {
    const title = "Welcome to the blog"
    const likes = 50;
    // const person = { name: 'you', age: 25}; //object, won't work
    const link = "https://www.google.com";

    return (
        <div className="App">
            <Navbar/>
            <div className="content">
            <Home />
            </div>
        </div>
    );
}

export default App;
