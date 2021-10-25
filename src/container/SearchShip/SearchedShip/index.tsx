import React, {FC} from 'react';
import './SearchedShip.scss';

interface Props {
  shipData: any;
}
const SearchedShip: FC<Props> = ({shipData}) => {
  return (
    <div className="SearchedShip">
      <img className="SearchedShip__image" src={shipData.image} alt={shipData.name} />
      <div className="SearchedShip__name">{shipData.name}</div>
    </div>
  );
};
export default SearchedShip;
