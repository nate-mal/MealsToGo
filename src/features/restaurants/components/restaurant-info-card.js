import * as React from "react";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const cardTheme = {
  roundness: 10,
  isV3: false,
};
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const RestaurantCard = (props) => {
    const StyledCard = styled(Card)``;
    return (
      <StyledCard elevation={5} theme={cardTheme} {...props}>
        {props.children}
      </StyledCard>
    );
  };
  const RestaurantCover = (props) => {
    const StyledCover = styled(Card.Cover)``;
    return (
      <StyledCover elevation={5} theme={cardTheme} {...props}>
        {props.children}
      </StyledCover>
    );
  };
  const Title = styled.Text`
    color: ${(props) => props.theme.colors.ui.primary};
    font-family: ${(props) => props.theme.fonts.body};
  `;
  const RestaurantContent = styled(Card.Content)`
    padding: ${(props) => props.theme.space[3]};
  `;

  const {
    name = "Best Restaurant",
    icon,
    photos = [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    ],
    address = "Some address, str., nr.",
    isOpenNow = true,
    rating = 3,
    isCloseTemporarily,
  } = restaurant;
  return (
    <RestaurantCard>
      <RestaurantCover key={name} source={{ uri: photos[0] }} />
      <RestaurantContent>
        <Title variant="titleLarge">{name}</Title>
      </RestaurantContent>
    </RestaurantCard>
  );
};
