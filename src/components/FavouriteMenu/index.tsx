import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import {RiDeleteBinLine} from 'react-icons/ri';
import {AiOutlineHeart, AiOutlineClose} from 'react-icons/ai';

const COLORS = {
  primary: '#34FFC8',
  primaryDark: '#115b4c',
  primaryLight: '#B6EDC8',
  white: '#FFFFFF',
};

const MenuLabel = styled.label`
  background-color: ${(props: {clicked: any}) => (props.clicked ? `${COLORS.white}` : `${COLORS.primary}`)};
  position: fixed;
  top: 6rem;
  right: 6rem;
  border-radius: 50%;
  height: 36px;
  width: 36px;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
  text-align: center;
  @media (max-width: 992px) {
    right: 2rem;
    top: 66rem;
  }
`;

const NavBackground = styled.div`
  position: fixed;
  top: 4rem;
  right: 4rem;
  background-image: radial-gradient(${COLORS.primary}, ${COLORS.primary});
  height: 6rem;
  width: 7rem;
  border-radius: 15%;
  z-index: 600;
  transform: ${(props: {clicked: any}) => (props.clicked ? 'scale(3, 30) translate(3%, 5%)' : 'scale(0)')};
  transition: transform 0.2s;
`;

const Navigation = styled.nav`
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 600;
  width: ${(props: {clicked: any}) => (props.clicked ? '280px' : '0')};
  opacity: ${(props: {clicked: any}) => (props.clicked ? '1' : '0')};
`;

const List = styled.ul`
  position: absolute;
  list-style: none;
  top: 20%;
  right: 0;
  text-align: center;
  width: 100%;
`;
const ItemLink = styled(NavLink)`
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  text-decoration: none;
  padding: 1rem 1rem;
  height: 67px;

  background-size: 240%;
  transition: all 0.2s;
  border-radius: 20px 0 0 20px;

  &:hover,
  &:active {
    background-color: #eeeeee;
    // color: ${COLORS.primaryDark};
  }
  &:hover > img {
    transition: 0.2s;
    border: solid red 2px;
  }
  &:hover > .iconBtn {
    transition: 0.2s;
    background-color: white;
  }
`;

const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  margin-left: -30px;
  border: solid white 2px;
`;

const IconBtn = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-left: auto;
  &:hover {
    color: red;
  }
`;

const MenuIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin-left: auto;

  &:hover {
    transition: transform 0.3s;
    transform: rotate(360deg);
    background-color: #eeeeee;
  }
`;

interface MenuItemProps {
  imageUrl: string;
  content: string;
  redirect: string;
  onClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({imageUrl, content, redirect, onClick}) => {
  return (
    <li>
      <ItemLink onClick={onClick} to={redirect}>
        <ItemImage src={imageUrl} alt="placeholder" />
        <div style={{margin: '5px'}}>{content}</div>
        <IconBtn className="iconBtn">
          <RiDeleteBinLine style={{margin: '9px', width: '18px', height: '18px'}} />
        </IconBtn>
      </ItemLink>
    </li>
  );
};

const Menu: React.FC = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const menuItems = [
    {
      imageUrl: 'https://i.imgur.com/MtEgYbY.jpg',
      content: 'GO Ms Tree',
      redirect: '',
      onClick: handleClick,
    },
    {
      imageUrl: 'https://i.imgur.com/MtEgYbY.jpg',
      content: 'GO Quest',
      redirect: '',
      onClick: handleClick,
    },
    {
      imageUrl: 'https://i.imgur.com/MtEgYbY.jpg',
      content: 'GO Quest1',
      redirect: '',
      onClick: handleClick,
    },
    {
      imageUrl: 'https://i.imgur.com/MtEgYbY.jpg',
      content: 'GO Quest2',
      redirect: '',
      onClick: handleClick,
    },
  ];

  return (
    <>
      <MenuLabel htmlFor="navi-toggle" onClick={handleClick} clicked={click}>
        <MenuIcon>
          {click ? (
            <AiOutlineClose style={{margin: '10px'}} />
          ) : (
            <AiOutlineHeart className="heart" style={{margin: '10px'}} />
          )}
        </MenuIcon>
      </MenuLabel>
      <NavBackground clicked={click}>&nbsp;</NavBackground>

      <Navigation clicked={click}>
        <div style={{fontSize: '28px', position: 'absolute', top: '16%', left: '20%'}}>ULUBIONE</div>
        <List>
          {menuItems.map((m) => (
            <MenuItem
              imageUrl={m.imageUrl}
              content={m.content}
              redirect={m.redirect}
              onClick={handleClick}
              key={m.content}
            />
          ))}
        </List>
      </Navigation>
    </>
  );
};

export default Menu;
