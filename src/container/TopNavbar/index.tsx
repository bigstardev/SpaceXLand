import React, {FC} from 'react';
import TopNavLogo from './TopNavLogo';

import SearchShip from 'container/SearchShip';
import './TopNavbar.scss';

const TopNavBar: FC = () => {
  return (
    <div className="TopNavBar">
      <TopNavLogo />
      <div className="TopSearchPanel">
        <SearchShip />
      </div>
    </div>
  );
};
export default TopNavBar;
