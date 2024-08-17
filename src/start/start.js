/**
 * Square with callback
 */

import './start.css';

export function Start({ onStartClick }) {
  return (
    <button className="start" onClick={onStartClick}>
      PLAY
    </button>
  );
}
