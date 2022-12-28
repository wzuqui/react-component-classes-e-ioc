import React from 'react';

export function selectChildrenByType(
  children: React.ReactNode,
  type: React.ComponentType
) {
  const childrenArray = React.Children.toArray(children);
  const selectedChild = childrenArray.find(
    (child) => React.isValidElement(child) && child.type === type
  );
  const otherChildren = childrenArray.filter(
    (child) => child !== selectedChild
  );

  return [selectedChild, ...otherChildren];
}
