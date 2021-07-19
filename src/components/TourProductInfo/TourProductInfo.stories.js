import { TourProductInfo } from "./TourProductInfo";

export default {
  title: "Brand/Tour Product Info",
  component: TourProductInfo,
};

const Template = (args) => <TourProductInfo {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  tour: {
    id: "tour-2",
    title: "Skip-the-Line Eiffel Tower: Guided Tour to 2nd Floor via Elevator",
    description:
      "On this brilliantly led walking tour, join a passionate local guide as they introduce the iconic structure and lead you, past anxious visitors awaiting entrance into Paris’ most famed Lady - “La Dame de Fer”.",
    duration: "2 hours",
    max: "10",
    price: "$63",
    picture: "/tours/paris/paris-tour-2.jpg",
    href: "paris-day-tour",
    root: "paris-tours",
  },
};
