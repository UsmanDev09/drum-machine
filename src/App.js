import logo from './logo.svg';
import './App.css';
import react,{Component} from 'react/'

import DrumMachine from './DrumMachine';
class App extends Component{
  state = {
    label : [ 'Q','R','E','A','S','D,','Z','X','C'] 
  }
  render(){
  return (
    <DrumMachine></DrumMachine>
  );
    }
}

export default App;
