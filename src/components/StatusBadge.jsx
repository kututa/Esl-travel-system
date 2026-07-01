import React from 'react';

function StatusBadge({ status }) {
  let badgeColor = 'orange'; // Default Pending
  
  if (status === 'Approved') {
    badgeColor = 'green';
  } else if (status === 'Rejected') {
    badgeColor = 'red';
  }

  const badgeStyle = {
    borderRadius: '5px',
    padding: '5px 10px',
    backgroundColor: badgeColor,
    color: 'white',
    fontWeight: 'bold',
    display: 'inline-block',
    fontSize: '12px'
  };

  return (
    <span style={badgeStyle}>
      {status}
    </span>
  );
}

export default StatusBadge;