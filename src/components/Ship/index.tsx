import Button from 'components/Button';
import React, {FC} from 'react';
import './Ship.scss';

interface ShipProps {
  image: string;
  name: string;
  yearBuilt: string;
  id: string;
}
const Ship: FC<ShipProps> = ({image, name, yearBuilt, id}) => {
  const addShipFavorite = (id: string) => {
    console.log('addshipFavourie', id);
  };
  return (
    <div className="Ship">
      <div className="Ship__image-wrapper">
        <img src={image} alt="Ship" />
      </div>
      <div className="Ship__details">
        <div className="Ship__details-year-built">{yearBuilt}</div>
        <div className="Ship__name">{name}</div>
        <div className="Ship__details">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, cum eum? Aut accusantium quisquam cum.
          Assumenda ex iusto dicta praesentium. Alias aliquid nobis voluptatibus assumenda repellendus necessitatibus
          itaque eligendi perspiciatis?
        </div>
        <div className="Ship__add-favouite-wrapper">
          <Button children="Add Favorite" onClick={() => addShipFavorite(id)} />
        </div>
      </div>
    </div>
  );
};
export default Ship;
