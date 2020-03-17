import React, {Component} from 'react';
class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: ['red','green','blue','#ccc']
        }
    }
    showColor = (color) => {
        return {
            background: color,
            width: 50,
            height: 50,
            marginRight: 10,
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 10,
            paddingTop: 10
        }
    }
    setActiveColor = (color) => {
        console.log(color);
        this.props.onReceiveColor(color);
    }
    render() {

        let elmColors = this.state.color.map((color ,index) => {
            return (
                <span onClick={()=>this.setActiveColor(color)} key={index} style={this.showColor(color)} className={this.props.color === color? 'border-active': ''}>Color</span>
            )
        })
        return (
            <div className="col-md-6 col-lg-6 col-xl-6">
                <div className="card-body">
                    <h5 className="card-title">Color Picker</h5>
                </div>
                <div className="boxColor">
                    { elmColors }
                </div>
            </div>
        )
    }
}
export default ColorPicker;
