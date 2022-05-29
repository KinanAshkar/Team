import React from "react";
import { Component } from "react";

class TeamMember extends Component {
    render(){
        return (
            <div className="col-lg-3 col-md-4 col-sm-6 col-sx-12">
                <div className="card">
                    <div className="card-header">
                        <img src={this.props.img} alt="" style={{ maxWidth: "100%" }} />
                    </div>
                    <div className="card-body" style={{ backgroundColor: this.props.website ? "#ccc" : "#ffc107" }}>
                        <h2>{this.props.name}</h2>
                        <h5>{this.props.position}</h5>
                        <div>{this.props.phone}</div>
                        <div>{this.props.email}</div>
                        <div>{this.props.website}</div>
                        <div>{this.props.ort}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TeamMember;
