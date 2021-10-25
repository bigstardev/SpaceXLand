import React, {FC, useState, useEffect, useContext} from 'react';
import ShipContext from 'context/Shipcontext';
import {getShips} from 'api/Ships';
import Ship from 'components/Ship';
import Menu from '../FavouriteMenu';
import './Home.scss';

const Loading = () => {
  return <div>Loading</div>;
};
const Error = () => {
  return <div>Error</div>;
};
const Home: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const {shipData, setShipData} = useContext(ShipContext);

  useEffect(() => {
    const fetchShip = async (): Promise<void> => {
      try {
        const results: any = await getShips();
        setShipData(results);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchShip();
  }, [setShipData]);

  return (
    <div className="Home">
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        shipData.map((ship: any) => (
          <Ship key={ship.id} id={ship.id} image={ship.image} name={ship.name} yearBuilt={ship.year_built} />
        ))
      )}
      <Menu />
    </div>
  );
};
export default Home;
