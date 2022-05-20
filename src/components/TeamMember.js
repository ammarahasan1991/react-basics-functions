import React from "react";

function TeamMember(props) {
    return (
        <div className="col-md-4 col-sm-6">
            <div className="card">
                <div className="card-header">
                    <img style={{ maxWidth: '100%' }} src={props.img} alt={`user`} />
                </div>
                <div className="card-body"
                    style={{ backgroundColor: props.website ? 'white' : 'gray' }} >
                    <h4>{props.name}</h4>
                    <h6>{props.job}</h6>
                    <div>{props.phone}</div>
                    <div>{props.email ? props.email : 'no email'}</div>
                    <div>{props.website ? props.website : 'no website'}</div>
                </div>
            </div>
        </div>
    );
}

export default TeamMember;