import * as React from "react";
import { Image } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { SvgXml } from "react-native-svg";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
const cardTheme = {
  roundness: 10,
  isV3: false,
};

export const RestaurantCard = (props) => {
  const StyledCard = styled(Card)``;
  return (
    <StyledCard elevation={5} theme={cardTheme} {...props}>
      {props.children}
    </StyledCard>
  );
};
export const RestaurantCover = (props) => {
  const StyledCover = styled(Card.Cover)``;
  return (
    <StyledCover elevation={5} theme={cardTheme} {...props}>
      {props.children}
    </StyledCover>
  );
};
export const RestaurantContent = styled(Card.Content)`
  padding: ${(props) => props.theme.space[3]};
`;

export const Address = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;
export const RestaurantRating = ({ rating }) => {
  const ratingArray = Array.from(new Array(Math.ceil(rating)));
  const StyledView = styled.View`
    flex-direction: row;
  `;
  return (
    <StyledView>
      {ratingArray.map((item, index) => (
        <SvgXml key={index} width={20} height={20} xml={star} />
      ))}
    </StyledView>
  );
};

export const ExtraInfoView = styled.View`
  flex-direction: row;
  alignitems: center;
  justify-content: space-between;
`;

export const ExtraInfoViewEnd = (props) => {
  const { isOpenNow, isCloseTemporarily, source } = props;
  const StyledView = styled.View`
    flex-direction: row;
    alignitems: center;
    justifyitems: end;
  `;
  const Icon = ({ source }) => <Image width={25} height={25} source={source} />;

  return (
    <StyledView>
      {isCloseTemporarily && (
        <Spacer position="left" size="medium">
          <Text variant="error">CLOSE TEMPORARILY</Text>
        </Spacer>
      )}

      {isOpenNow && (
        <Spacer position="left" size="medium">
          <SvgXml xml={open} width={25} height={25} />
        </Spacer>
      )}
      {source && (
        <Spacer position="left" size="medium">
          <Icon source={source} />
        </Spacer>
      )}
    </StyledView>
  );
};
