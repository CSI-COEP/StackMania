import React, { Component } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default class CreateProfile extends Component {
  state = {
    role: "",
    name: "",
    mail: "",
    password: "",
  };

  profile = (e) => {
    e.preventDefault();
    if (
      !["LAWYER", "ADVOCATE", "SUBADMIN", "POLICE", "USER", "JUDGE"].includes(
        this.state.role
      )
    ) {
      alert(
        "You can Only create profile of Judge,Lawyer,Advocate,User and Subadmins"
      );
      return;
    }

    this.setState({ role: "", name: "", mail: "", password: "" });
  };

  render() {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="biggest-createprofile"
        >
          <div className="big-createprofile" data-aos="fade-up">
            <h2>Create Profiles</h2>
            <p>
              Create Profiles for Judges,Lawyers,Users,Subadmins and respective
              departments
            </p>
            <form className="createprofile-form" onSubmit={this.profile}>
              <input
                type="text"
                value={this.state.role}
                onChange={(e) =>
                  this.setState({ role: e.target.value.toUpperCase() })
                }
                placeholder="Enter Role"
                required
              ></input>
              <input
                type="text"
                value={this.state.name}
                onChange={(e) =>
                  this.setState({ name: e.target.value.toUpperCase() })
                }
                placeholder="Enter Name"
                required
              ></input>
              <input
                type="mail"
                value={this.state.mail}
                onChange={(e) => this.setState({ mail: e.target.value })}
                placeholder="Enter Email"
                required
              ></input>
              <input
                type="password"
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })}
                placeholder="Create Password"
                required
              ></input>
              <button type="submit" className="signup-btn">
                CREATE
              </button>
            </form>
          </div>

          <div className="case-list-div" data-aos="fade-up">
            <h2>Cases Received from Police</h2>
            <li>Case 1</li>
            <li>Case 2</li>
            <li>Case 3</li>
            <li>Case 4</li>
            <li>Case 5</li>
          </div>
        </div>
      </>
    );
  }
}
