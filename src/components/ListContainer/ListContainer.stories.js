import  { ListContainer } from "./ListContainer";
import { EUROPE_TOURS } from "../../../data/TOURS_DATA";

export default {
  title: "Brand/List Container",
  component: ListContainer,
};

const Template = (args) => (
  <ListContainer {...args} />
);
export const Primary = Template.bind({});
Primary.args = {
	list: EUROPE_TOURS,
}

