import React from 'react';
import './CardProfile.css';

const CardProfile = ({ image, name, position, comment }) => {
    return (
        <div className="profile-card">
            <div className="profile-card-header">
                <img src={image} alt={name} />
            </div>
            <div className="profile-card-body">
                <h3>{name}</h3>
                <h4>{position}</h4>
                <p>{comment}</p>
            </div>
        </div>
    );
}

export default CardProfile;