
import React from 'react';
import { ReactComponent as HomeIcon } from './icons/home.svg';
import { ReactComponent as SearchIcon } from './icons/search.svg';
import { ReactComponent as DsaIcon } from './icons/binary.svg';
import { ReactComponent as WebIcon } from './icons/html5.svg';
import { ReactComponent as UserIcon } from './icons/user.svg';
import { ReactComponent as compilerIcon } from './icons/compiler.svg';
import { ReactComponent as theoryIcon } from './icons/theory.svg';
import { ReactComponent as contestIcon } from './icons/contest.svg';
import { ReactComponent as javaIcon } from './icons/java.svg';

const icons = {
  home: HomeIcon,
  search: SearchIcon,
  dsa: DsaIcon,
  web: WebIcon,
  user: UserIcon,
  compiler:compilerIcon,
  theory:theoryIcon,
  contest:contestIcon,
  java:javaIcon

};

const Icon = ({ name, width = 24, height = 24, className }) => {
  const IconComponent = icons[name];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent width={width} height={height} className={className} />;
};

export default Icon;
