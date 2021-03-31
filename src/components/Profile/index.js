import React  from "react";
import "./index.css";

export default function Profile({profile}) {
    const {avatarImage, bio,email, firstName, lastName, phone} = profile;
  return (
    <div className="profile__wrapper">
      <h3 className="profile__title">
        Profile
      </h3>
      <div className="profile__info">
        <img src={avatarImage} height={200} width={200} alt="avatar"/>
        <table className="profile__table">
            <tbody>
                <tr>
                    <td>First Name</td>
                    <td>{firstName}</td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td>{lastName}</td>
                </tr>
                <tr>
                    <td>Phone</td>
                    <td>{phone}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{email}</td>
                </tr>            
                <tr className="profile__table--bio">
                    <td>Bio</td>
                    <td>{bio}</td>
                </tr>            
            </tbody>
        </table>
      </div>
    </div>
  );
}