/* Componentes estilizados */
import { NavStyle, StyledNavLink, NavHeader, StyledButton } from "./Nav-styles";
import { useDispatch } from "react-redux";
import { getRecipes } from "../../redux/actions";

const Nav = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(getRecipes());
  };

  return (
    <NavHeader>
      <NavStyle mobile>
        <StyledButton onClick={handleClick}>Main Recipes</StyledButton>
        <StyledNavLink mobile to="/home" activeclassname="active">
          Home
        </StyledNavLink>
        <StyledNavLink mobile to="/recipecreator" activeclassname="active">
          Create you recipe
        </StyledNavLink>
        <StyledNavLink mobile to="/about" activeclassname="active">
          About Us
        </StyledNavLink>
      </NavStyle>
    </NavHeader>
  );
};

export default Nav;
