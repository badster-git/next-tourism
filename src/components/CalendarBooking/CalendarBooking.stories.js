import { CalendarBooking } from "./CalendarBooking";

export default {
  title: "Brand/Calendar Booking",
  component: CalendarBooking,
};

const Template = (args) => <CalendarBooking {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  price: "$59",
};
