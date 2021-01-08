import React from 'react';
const ApprovalCard = props =>{
    return (
        <div className="ui cards">
            <div className="ui card">
                {props.children}
                <div className="extra content">
                    <div className="ui two buttons">
                        <button className="ui green basic button">Approve</button>
                        <button className="ui red basic button">Decline</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApprovalCard;