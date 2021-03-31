import React  from "react";

export default function Earthquake(props) {
    const id = props.match.params.slugifiedId;
    const earthquake = props.features.find(feature => feature.id === id) || {};
    const {title, mag, time, status, tsunami, type} = earthquake.properties;
  return (
    <div className="earthquake-wrapper">
        <h3>{title}</h3>
        <table>
            <tbody>
                <tr>
                    <td>Title</td>
                    <td>{title}</td>
                </tr>
                <tr>
                    <td>Magnitude</td>
                    <td>{mag}</td>
                </tr>
                <tr>
                    <td>Time</td>
                    <td>{time}</td>
                </tr>
                <tr>
                    <td>Status</td>
                    <td>{status}</td>
                </tr>            
                <tr>
                    <td>Tsunami</td>
                    <td>{tsunami}</td>
                </tr>            
                <tr>
                    <td>Type</td>
                    <td>{type}</td>
                </tr>
            </tbody>
        </table>
    </div>
  );
}