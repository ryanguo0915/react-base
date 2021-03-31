import React  from "react";
import EarthquakeTable from '../EarthquakeTable/EarthquakeTable'
import "./index.css";

export default function Home({data}) {
    const {metadata, features} = data;
  return (
    <div className="home__wrapper">
        <h3 className="home__title">{metadata.title}</h3>
        <EarthquakeTable features={features}/>
    </div>
  );
}