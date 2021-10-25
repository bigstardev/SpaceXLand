import TopNavBar from 'container/TopNavbar';
import React, {FC, ReactNode} from 'react';
import './Layout.scss';

export interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <div className="Layout">
      <div className="Layout__top-navbar-wrapper">
        <TopNavBar />
      </div>
      <div className="Layout__content">{children}</div>
    </div>
  );
};
export default Layout;
