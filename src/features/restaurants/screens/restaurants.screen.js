import * as React from "react";
import {
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  View,
  Text,
} from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card";

export const RestaurantScreens = () => {
  const ScreenContainer = styled(SafeAreaView)`
    flex: 1;
    ${StatusBar.currentHeight && `padding-top: ${StatusBar.currentHeight}px`}
  `;

  const SearchbarWrapper = styled(View)`
    padding: ${(props) => props.theme.space[3]};
  `;
  const ListWrapper = styled(View)`
    flex: 1;
    background-color: ${(props) => props.theme.colors.brand.primary};
    padding: ${(props) => props.theme.space[3]};
  `;
  return (
    <ScreenContainer>
      <SearchbarWrapper>
        <Searchbar />
      </SearchbarWrapper>
      <ListWrapper>
        <RestaurantInfoCard />
      </ListWrapper>
    </ScreenContainer>
  );
};
