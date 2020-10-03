import React from 'react';

const Property = ({ label, value }) => (
  <div className="flex-1 mb-1">
    <span className="font-semibold">{label}: </span>
    <span>{value}</span>
  </div>
);

export default Property;

