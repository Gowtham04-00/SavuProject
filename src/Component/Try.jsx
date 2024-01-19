import React, { useState } from 'react';

const Try = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div style={{ marginTop: '40px' }}>
      <h2
        onClick={() => handleSectionClick('Introduction')}
        style={{ background: selectedSection === 'Introduction' ? 'red' : 'none' }}
      >
        Introduction
      </h2>

      <h2
        onClick={() => handleSectionClick('DataTypes')}
        style={{ background: selectedSection === 'DataTypes' ? 'red' : 'none' }}
      >
        Data Types
      </h2>

      <h2
        onClick={() => handleSectionClick('Oops')}
        style={{ background: selectedSection === 'Oops' ? 'red' : 'none' }}
      >
        Oops
      </h2>
    </div>
  );
};

export default Try;
