import { Switch } from '@mui/material';
import React from 'react'
import "../css/PricingDisplay.scss"
import PricingUnit from "./PricingUnit";

const content = [["Starter", "Ideal for freelancers and contractors just starting out.", "24", "17", "All Templates", "Unlimited Clients & Projects", "Invoicing & Payments", "Proposals & Contracts", "Tasks & Time Tracking", "Client CRM", "Expense Tracking", "Up to 5 Project Collaborators"],
[],
[]
];

function PricingDisplay(props) {
    let unitCount = 3;
    if (props.unitCount) {
        unitCount = props.unitCount;
    }
    const [yearly, setYearly] = React.useState(false);
    const unitList = []

    for (let i = 0; i < unitCount; i++) {
        unitList.push(<div className="pricing-unit"><PricingUnit content={content[0]} yearly={yearly} /></div>)
    }

    return (
        <div className='bonsai-style'>
            <div className="price-display-container">
                <div className="heading-container">
                    <div className="heading">Plans & Pricing</div>
                    <div className="switch-group">
                        monthly
                        <Switch/>
                        yearly
                    </div>

                </div>
                <div className="unit-container">
                    {unitList}
                </div>
            </div>
        </div>
    )
}

export default PricingDisplay