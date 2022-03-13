import React, { Component } from "react";
import axios from "axios";
import { getAuth } from "firebase/auth";

export default class CreateProfile extends Component {
  state = {
    role: "",
    name: "",
    mail: "",
    password: "",
  };

  profile = async (e) => {
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

    try {
      const token = await getAuth().currentUser.getIdToken();

      const res = await axios.request({
        method: "POST",
        url: "/admin/add-user",
        headers: {
          Authorization: "Bearer " + token,
        },
        data: {
          role: this.state.role,
          name: this.state.name,
          email: this.state.mail,
          password: this.state.password,
        },
      });

      alert("created");
    } catch (error) {
      console.log(error);
      alert("Can't create profile");
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
                minLength={6}
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
