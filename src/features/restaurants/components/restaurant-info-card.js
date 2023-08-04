import { Text } from "../../../components/typography/text.component";

import {
  RestaurantCard,
  RestaurantContent,
  RestaurantCover,
  RestaurantRating,
  Address,
  ExtraInfoView,
  ExtraInfoViewEnd,
} from "./restaurant-info-card.styles";
export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Best Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    ],
    address = "Some address, str., nr.",
    isOpenNow = true,
    rating = 3,
    isCloseTemporarily = true,
  } = restaurant;

  return (
    <RestaurantCard>
      <RestaurantCover key={name} source={{ uri: photos[0] }} />
      <RestaurantContent>
        <Text variant="label">{name}</Text>
        <ExtraInfoView>
          <RestaurantRating rating={rating} />
          <ExtraInfoViewEnd
            isOpenNow={isOpenNow}
            isCloseTemporarily={isCloseTemporarily}
            source={{ uri: icon }}
          />
        </ExtraInfoView>
        <Address>{address}</Address>
      </RestaurantContent>
    </RestaurantCard>
  );
};
