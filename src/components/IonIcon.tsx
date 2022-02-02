import React from 'react';
import IconList from './iconList.json';

const IonIcon = (
  props: React.HTMLAttributes<HTMLDivElement> & { name: keyof typeof IconList; size?: 'small' | 'large' },
): JSX.Element => (
  <div
    {...props}
    style={{
      display: 'inline-block',
      height: props.size ? (props.size == 'small' ? '18px' : '32px') : '1em',
      width: props.size ? (props.size == 'small' ? '18px' : '32px') : '1em',
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
