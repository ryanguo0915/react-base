import React  from "react";
import { Link } from "react-router-dom";

export default function EarthquakeTable({features}) {

  return (
      <table>
          <thead>
              <tr>
                  <th>
                      Title
                  </th>
                  <th>
                      Magnitute
                  </th>
                  <th>
                      Time
                  </th>
              </tr>
          </thead>
          <tbody>
            {features.map(feature => {
                const date = new Date(feature.properties.time).toLocaleString();
                return (
                    <tr key={feature.id}>
                        <td><Link to={`/earthquake/${feature.id}`}>{feature.properties.place}</Link></td>
                        <td>{feature.properties.mag}</td>
                        <td>{date}</td>
                    </tr>
                );
            })}
          </tbody>
      </table>
  );
}