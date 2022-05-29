import { Component } from "react";
import TeamMember from "./TeamMember";
import Info from "./Info";

class Team extends Component {
    constructor() {
        super();
        this.state = {
            memberInfo: Info,
            members: [],
            counter: 0,
        }
        this.clickBtn = this.clickBtn.bind(this);
    };
    clickBtn() {
        if (this.state.counter < this.state.memberInfo.length) {
            this.state.members.push(this.state.memberInfo[this.state.counter]);
            this.setState((prevstate) => {
                return {
                    counter: prevstate.counter + 1
                }
            });
            this.newMembers = this.state.members.map((element) => {
                return <TeamMember key={element.id} img={element.img} name={element.name} position={element.position} phone={element.phone} email={element.email} website={element.website} ort={element.ort}
                />
            });
        }
    };
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <button onClick={this.clickBtn} className="btn  btn-dark btn-lg btn-block">Click Here Please!</button>
                </div>
                {this.newMembers}
            </div>
        );
    };
};

export default Team;
