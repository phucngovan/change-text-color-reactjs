import React, {Component} from 'react';
class SizeSetting extends Component {
    changeSize = (value) => {
        this.props.onChangeSize(value)
    }
    render() {
        return (
            <div className="card col-md-6 col-lg-6 col-xl-6">
                <div className="card-body">
                    <h5 className="card-title">Size {this.props.fontSize}</h5>
                    <button type="button" className="btn btn-success" onClick={()=>this.changeSize(2)}>tăng</button>&nbsp
                    <button type="button" className="btn btn-success" onClick={()=>this.changeSize(-2)}>giảm</button>
                </div>
            </div>
        )
    }
}
export default SizeSetting;
