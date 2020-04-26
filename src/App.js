import React ,{Component}from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'


class  App extends Component{
  state={
    userInput:"test"
  }

  userInputChangeHandler=(event)=>{
  
   // this.state.userInput.setState(event.target.value)
    this.setState({userInput:event.target.value})

  }
  render(){
    return(
      <div className="App">
      <UserInput 
      userInput={this.state.userInput}
      change={this.userInputChangeHandler}/>
      <UserOutput userInput={this.userInput}/>
    </div>

    )
   

  }
}

// function App() {
//   const userInput="test";
//   return (
//     <div className="App">
//       <UserInput userInput={userInput}/>
//       <UserOutput userInput={userInput}/>

//       {/* <header className="App-header">
//         React
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>
//   );
// }

export default App;
