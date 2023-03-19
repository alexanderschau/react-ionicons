import React from 'react';
import IconList from './iconList.json';
declare const IonIcon: (
  props: React.HTMLAttributes<HTMLDivElement> & {
    name: keyof typeof IconList;
    size?: 'small' | 'large';
  },
) => JSX.Element;
export default IonIcon;
