import React, {Component} from 'react';
import ColorPicker from "./components/ColorPicker";
import Reset from "./components/Reset";
import Result from "./components/Result";
import SizeSetting from "./components/SizeSetting";
import './App.css';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'red',
            fontSize: 12
        }
    }
    onSetColor = (params) => {
       this.setState({
           color: params
       })
    }
    onChangeSize = (params) => {
        console.log(params,'=>>>>>>>>>>>>')
        if(this.state.fontSize + params >= 8 && this.state.fontSize + params <= 36) {
            this.setState({
                fontSize: this.state.fontSize + params
            })
        }
    }
    setStyleDefault = (value) => {
        if(value) {
            this.setState({
                color: 'red',
                fontSize: 12
            })
        }
    }
  render() {
    return (
        <div className="row m-50-50-0-50">
            <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor}></ColorPicker>
            <SizeSetting fontSize={this.state.fontSize} onChangeSize={this.onChangeSize}></SizeSetting>
            <Result color={this.state.color} fontSize={this.state.fontSize}></Result>
            <Reset setStyleDefault={this.setStyleDefault}></Reset>
        </div>
      )
  }
}
export default App;
