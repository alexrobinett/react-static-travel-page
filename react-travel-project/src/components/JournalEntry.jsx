import React from "react";
import mapPin from "../assets/pin.png"

export default function JournalEntry(props){
   return (
       <div className="journal-entry-container">
            <img className="hero-image" src={`${props.imageUrl}`} alt="" />
            <div className="info-container">
                <div className="location-info">
                    <div>
                        <img className="map-pin-icon" src={mapPin} alt="" />
                        <h2>{props.location}</h2>
                        <a href={props.googleUrl} ><p className="google-maps-link">View on Google Maps</p></a>
                    </div>
                    <h3>{props.title}</h3>
                </div>
                <div className="entry-details">
                    <div className="travel-dates"><span>{props.startDate}</span> - <span>{props.endDate}</span></div>
                    <p className="location-paragraph">{props.description}</p>
                </div>
            </div>
       </div>
   )
}