import React from 'react';

export default function EncounterDisplay({ encounter,  openNewOption}) {
    let options = [];
    if (encounter.final_encounter == 0) {

        for (let i = 0; i < 3; i++) {
            if (encounter.options[i]) {
                options.push(
                    <div key={encounter.options[i].encounter_option_id} >
                        {encounter.options[i].option_name}
                    </div>
                );
            } else {
                options.push(
                <button 
                onClick={_=>openNewOption(encounter)} 
                key={i}>
                    add option
                </button>
            );
            }
        }
    }

    return (
        <div>
            {encounter.encounter_name}
            {options}
        </div>
    );

}