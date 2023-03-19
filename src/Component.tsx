import React from 'react';

// this file only exists during the build process
// @ts-ignore
import IconList from '../lib/iconList.json';

const IonIcon = (
  props: React.HTMLAttributes<HTMLDivElement> & { name: keyof typeof IconList; size?: 'small' | 'large' },
): JSX.Element => (
  <span
    {...props}
    style={{
      display: 'inline-block',
      height: props.size ? (props.size == 'small' ? '.5em' : '2em') : '1em',
      width: props.size ? (props.size == 'small' ? '.5em' : '2em') : '1em',
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
