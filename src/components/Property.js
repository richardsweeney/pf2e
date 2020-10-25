import React from 'react';

const Property = ({ label, value }) => (
  <div className="flex-1 rounded shadow bg-gray-100 mb-3 p-3 bg-gray-100">
    <span className="font-semibold">{label}: </span>
    <span dangerouslySetInnerHTML={{ __html: value }}/>
  </div>
);

export default Property;

