import React, {Component} from "react";
class Result extends Component {
    color = () => {
        return {
            color: this.props.color,
            fontSize: this.props.fontSize
        }
    }
    render() {
        return (
            <div>
                <p> color : {this.props.color} -fontsize : {this.props.fontSize}</p>
                <div className="card col-md-12 col-lg-12 col-xl-12 mt-50">

                    <div style={this.color()} id="content">
                        nội dung setting
                    </div>
                </div>
            </div>

        )
    }
}
export default Result;
