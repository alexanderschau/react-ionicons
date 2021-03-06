import React from 'react';
import IconList from './iconList.json';

const IonIcon = (props: React.HTMLAttributes<HTMLDivElement> & { name: keyof typeof IconList }): JSX.Element => (
  <div
    {...props}
    style={{
      display: 'inline-block',
      height: '1em',
      width: '1em',
      visibility: 'inherit',
      fill: 'currentcolor',
      boxSizing: 'content-box',
      stroke: 'currentcolor',
      ...props.style,
    }}
    dangerouslySetInnerHTML={{ __html: IconList[props.name] }}
  />
);

export default IonIcon;
