
import React, { Component } from 'react';
import axios from 'axios';
import UserCard from "./components/usercard"
import FollowerCard from "./components/followercard"

 import './App.css';


 class App extends Component {
  constructor(){
    super();
    this.state = {
      userInfo: [],
      userFollowers: []
    }
  }

   componentDidMount() {
    this.fetchUser();
    this.fetchFollowers();
  }

   fetchUser = () => {
    axios.get('https://api.github.com/users/maggiebeck')
      .then (response => {
        console.log('response.data:', response.data);
        const userInfo = response.data;
        this.setState({userInfo})
        })
        .catch(err => {
          console.log(err);
        })
  }

   fetchFollowers = () => {
    axios.get(`https://api.github.com/users/maggiebeck/followers`)
      .then (response => {
        console.log('followers:', response);
        const userFollowers = response.data;
        this.setState({userFollowers})
        })
        .catch(err => {
          console.log(err);
        })
  }

   render() {
    console.log('this.state.userFollowers', this.state.userFollowers);
    return (
      <div>
        <UserCard user={this.state.userInfo} />
        {this.state.userFollowers.map(follower => {
          return <FollowerCard
          name={follower.login}
          photo={follower.avatar_url}
          link={follower.html_url}
          key={follower.id}/>
        })}
      </div>
    );
  }

 }

 export default App;

