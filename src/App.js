import React from 'react';
import Movies from './components/movies.component';
import Navbar from './components/navbar.component';

class App extends React.Component {
    state = {};

    render() {
        return (
            <>
                <Navbar />
                <Movies />
            </>
        );
    }
}

export default App;
