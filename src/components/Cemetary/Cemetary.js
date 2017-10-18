// Cemetary View - Displays MyCharacters Component and MyCharacters Component

import React, { Component } from 'react';

export default class Cemetary extends Component {
    render() {
        return (
            <div>
                Cemetary
            <div>
                    <div>
                        My Dead Characters:
            </div>
                    <div>
                        <div>Class</div>
                        <div>Coin: 200</div>
                    </div>
                    <div>
                        <div>Strength</div>
                        <div>Dexterity</div>
                        <div>Charisma</div>
                    </div>
                    <div>
                        <div>str#</div>
                        <div>dex#</div>
                        <div>cha#</div>
                    </div>
                    <div>
                        The story that killed (Charname)
                </div>
                    <div>
                        <div>Return to the tomb (storyname)</div>
                        <button>expand</button>
                    </div>
                    <div>
                        Complete Stories (completed stories)
                </div>
                    <div>
                        <div>Tomb of Jeff (storyname)</div>
                        <button>expand</button>
                    </div>
                    <div>
                        <div>The hermit's curse(storyname)</div>
                        <button>expand</button>
                    </div>
                        <button>Close Character</button>

                </div>
            </div>
        );
    }
}