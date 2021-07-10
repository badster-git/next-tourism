import  { ListCard } from "./ListCard";

export default {
  title: "Brand/List Card",
  component: ListCard,
};

const Template = (args) => (
  <ListCard {...args} />
);
export const Primary = Template.bind({});
Primary.args = {
	title: "Rome",
	subtitle: "View Tours",
	picture: "europe-locations/rome.jpg",
	href: "/rome-tours"

}
