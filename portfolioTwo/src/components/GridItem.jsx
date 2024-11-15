import React from 'react';

const GridItem = ({backgroundColor,children }) => (
    <div
      className="item"
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      {children}
    </div>
  );

export default GridItem;
