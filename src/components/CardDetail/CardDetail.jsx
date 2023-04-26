import useDetail from "../../customHooks/useDetail";

import {
  StyledDivContainer,
  StyledDivDetail,
  StyledImg,
  StyledPSubTitle,
  StyledPtext,
  StyledNavLink,
} from "./CardDetail-styles";
import Loader from "../Loader/Loader";

const CardDetail = () => {
  const recipeInfo = useDetail();
  return (
    <StyledDivContainer>
      {
        /* Si tenemos el detalle entonces renderizamos si no esperamos a que lleguen todos los datos para evitar renderizar un undefined */
        Object.keys(recipeInfo).length !== 0 && recipeInfo.image ? (
          <>
            <StyledNavLink to="/home">Volver</StyledNavLink>
            <StyledDivDetail tablet>
              <StyledDivContainer>
                <h2>{!recipeInfo.name ? recipeInfo.title : recipeInfo.name}</h2>
                <StyledImg
                  src={recipeInfo.image}
                  alt={`${!recipeInfo.name && recipeInfo.title}`}
                />
                <StyledPSubTitle tablet>Id:</StyledPSubTitle>
                <StyledPtext tablet>{recipeInfo.id}</StyledPtext>
                <StyledPSubTitle tablet>Summary:</StyledPSubTitle>
                <StyledPtext
                  tablet
                  dangerouslySetInnerHTML={{ __html: recipeInfo.summary }}
                />
                <StyledPSubTitle tablet>Steps:</StyledPSubTitle>
                <StyledPtext tablet>
                  {recipeInfo.analyzedInstructions
                    ? recipeInfo.analyzedInstructions
                    : "-"}
                </StyledPtext>
                <StyledPSubTitle tablet>Diets:</StyledPSubTitle>
                <StyledPtext tablet>
                  {recipeInfo.diets ? recipeInfo.diets : "-"}
                </StyledPtext>
                <StyledPSubTitle tablet>Health score:</StyledPSubTitle>
                <StyledPtext tablet>{recipeInfo.healthScore}</StyledPtext>
              </StyledDivContainer>
            </StyledDivDetail>
          </>
        ) : (
          <Loader />
        )
      }
    </StyledDivContainer>
  );
};

export default CardDetail;
