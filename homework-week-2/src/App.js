import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MainTop from './components/MainTop';
import MeetUp from './components/MeetUp';
import About from './components/About';
import Members from './components/Members';
import PastMeetUp from './components/PastMeetUp';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar />
          <MainTop />
          <MeetUp />
          <About />
          <Members />
          <PastMeetUp />
      </div>
    );
  }
}

export default App;
