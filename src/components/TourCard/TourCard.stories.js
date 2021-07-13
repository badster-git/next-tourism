import { TourCard } from "./TourCard";

export default {
  title: "Brand/Tour Card",
  component: TourCard,
};

const Template = (args) => <TourCard {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  id: "tour-1",
  title: "Early Access Statue of Liberty Tour with Ellis Island",
  description:
    "Merge an impeccably led guided visit to the Statue of Liberty and Ellis Island, arriving early to avoid the swelling afternoon crowds.",
  duration: "4 hours",
  max: "25",
  price: "$59",
  picture: "/tours/new-york/new-york-tour-1.jpg",
	href: "/new-york-tours/statue-of-liberty-tour-ellis-island-tour/"
};
