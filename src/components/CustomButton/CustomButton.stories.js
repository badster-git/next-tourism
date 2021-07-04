import { CustomButton } from "./CustomButton";

export default {
  title: "Brand/Custom Button",
  component: CustomButton,
};

const Template = (args) => (
  <CustomButton {...args}>Default Header</CustomButton>
);
export const Primary = Template.bind({});
