import React, { useState } from 'react';

const InnerChildPage = () => {
  const [isInnerChildAlive, setInnerChildAlive] = useState(true);

  const handleKillInnerChild = () => {
    setInnerChildAlive(false);
  };

  const handleResurrectInnerChild = () => {
    setInnerChildAlive(true);
  };

  return (
    <div>
      <h1>Inner Child Manipulator</h1>
      {isInnerChildAlive ? (
        <div>
          <p>Your inner child is alive and well!</p>
          <button onClick={handleKillInnerChild}>Kill Inner Child</button>
        </div>
      ) : (
        <div>
          <p>Your inner child is dead. Would you like to resurrect it?</p>
          <button onClick={handleResurrectInnerChild}>Resurrect Inner Child</button>
        </div>
      )}
    </div>
  );
};

export default InnerChildPage;
