import {useState} from 'react';
import {DropdownDisplay} from './DropdownButton.js';
import {DropdownButton, DropdownElement} from './DropdownButton.css';

function Dropdown(props) {

    const [display, setDisplay] = useState('none');

    function handleClick() {

        if (display=='none') {
            setDisplay('block');
        } else {
            setDisplay('none');
        }
    }

    return (
        <div>
            Choose a Time
            <div style={{display:display}}>
                {props.children}
            </div>
        </div>
    )
}

function Element(props) {

    var content = props.name;

    return (
        <div>
            <div>
                {content}
            </div>
            {/* Time */}
        </div>
    )
}

export {Dropdown, Element}