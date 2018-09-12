import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';


import Navbar from './components/Navbar';
import MainTop from './components/MainTop';
import MeetUp from './components/MeetUp';
import About from './components/About';
import Members from './components/Members';
import PastMeetUp from './components/PastMeetUp';
import Create from './components/Create';


class App extends Component {
  constructor(props){
    super(props);
    this.handleFormJoin = this.handleFormJoin.bind(this);

    this.state = {
      MeetUp: [
                    {
                      date: '27 November 2019',
                      theme: '#39 JakartaJS MeetUp Kumparan',
                      went: 129
                    },
                    {
                      date: '28 November 2019',
                      theme: '#40 BandungJS MeetUp Kumparan',
                      went: 120
                    },
                    {
                      date: '30 November 2019',
                      theme: '#50 JogjaJS MeetUp Kumparan',
                      went: 150
                    }
               ],
       members: ['sabrina','jojo','hendri']
    }
  }

  handleFormJoin(email){
    if(!email){
      return 'please input email';
    }


    this.setState( () => {
      return {
        members: [...this.state.members, email]
      }
    })

    alert(email)
  }

  render() {
    const title = 'Hacktive MeetUp';
    return (
      
      <div className="App">

          <BrowserRouter>
              <div>
              <Navbar />
                  <Switch>
                      <Route path="/create" component={Create}/>
                  </Switch>
              </div>       
          </BrowserRouter>
      
          <MainTop handleFormJoin={this.handleFormJoin} title={title} />
          <MeetUp />
          <About />
          <Members members={this.state.members} />
          <PastMeetUp prevMeetUp={this.state.MeetUp} />
      </div>
    );
  }
}

export default App;
