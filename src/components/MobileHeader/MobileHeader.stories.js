import  MobileHeader  from "./MobileHeader";

export default {
  title: "Brand/Mobile Header",
  component: MobileHeader,
};

const Template = (args) => (
  <MobileHeader {...args}>Default Header</MobileHeader>
);
export const Primary = Template.bind({});
