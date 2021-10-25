import React, {FC, useState, useEffect, useContext} from 'react';
import ShipContext from 'context/Shipcontext';
import ActionButton from './ActionButton';
import SearchedShip from './SearchedShip';
// import useDebounce from 'hooks/useDebounce';
import './SearchShip.scss';

const SearchShip: FC = () => {
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const {shipData} = useContext(ShipContext);

  const openSearchBox = () => {
    setIsSearch(!isSearch);
  };
  const getInputValue = (inputValue: string) => {
    setInputValue(inputValue);
    setIsSearch(true);
  };

  useEffect(() => {
    if (inputValue === '') {
      setSearchResults([]);
      return;
    }
    const filtered_ships = shipData.filter((ship: any) => ship.name.toLowerCase().includes(inputValue));
    setSearchResults(filtered_ships);
  }, [inputValue, shipData]);

  return (
    <>
      <div className="SearchShip" onClick={openSearchBox}>
        <div className="SearchShip__input-field">
          <label htmlFor="search">SEARCH BY SHIP</label>
          <input
            type="text"
            id="search"
            placeholder="Enter Ship Name"
            value={inputValue}
            onChange={(e) => getInputValue(e.target.value)}
          />
        </div>
        <ActionButton isSearch={isSearch} />
      </div>
      {searchResults.length > 0 && isSearch && (
        <div className="SearchShip__search-results">
          {searchResults.map((searchedShip: any) => (
            <SearchedShip key={shipData.id} shipData={searchedShip} />
          ))}
        </div>
      )}
    </>
  );
};
export default SearchShip;
