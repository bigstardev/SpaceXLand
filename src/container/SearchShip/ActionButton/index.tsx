import React, {FC} from 'react';
import clsx from 'clsx';
import {BsSearch} from 'react-icons/bs';
import {GrClose} from 'react-icons/gr';

import './ActionButton.scss';

interface SearchProps {
  isSearch: Boolean;
}
const ActionButton: FC<SearchProps> = ({isSearch}) => {
  return (
    <div className={'Action-button ' + clsx({Close: isSearch, Search: !isSearch})}>
      {isSearch ? <GrClose /> : <BsSearch />}
    </div>
  );
};
export default ActionButton;
