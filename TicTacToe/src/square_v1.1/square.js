/**
 * Stateless square with input value
 */

import "./square.css";

export function Square({value}) {
    
    function handleClick() {
        console.log('clicked!');
    }
    
    return (
        <button className="square" onClick={handleClick}>
            {value}
        </button>
    );
}