import React from 'react';

export default function EncounterDisplay({ encounter,  openNewOption}) {
    let options = [];
    if (encounter.final_encounter == 0) {

        for (let i = 0; i < 3; i++) {
            if (encounter.options[i]) {
                options.push(
                    <div className="creator-options"key={encounter.options[i].encounter_option_id} >
                        {encounter.options[i].option_name}
                    </div>
                );
            } else {
                options.push(
                <button className="btn creator-options"
                onClick={_=>openNewOption(encounter)} 
                key={i}>
                    add option {i+1}
                </button>
            );
            }
        }
    }

    return (
        <div className="creator-encounter-display">
            <h2>Encounter Name: {encounter.encounter_name}</h2>
            {options}
        </div>
    );

}