const Home = () => {

    const handleClick = (e) => {
        console.log('Thanks for clicking', e)
    }

    const handleAnotherClick = (name, e) => {console.log('hello  ' + name, e.target)}


    return (
        <div className="home">
        <h2>Homepage</h2>
            <button onClick={handleClick}>Click here</button>
            <button onClick={(e) => handleAnotherClick('Jake', e)}>Click me again</button>
        </div>
    );
}

export default Home;