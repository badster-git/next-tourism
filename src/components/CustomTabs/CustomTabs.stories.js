import { CustomTabs } from "./CustomTabs";

export default {
  title: "Brand/Custom Tabs",
  component: CustomTabs,
};

const Template = (args) => (
  <CustomTabs {...args}>Default Header</CustomTabs>
);
export const Primary = Template.bind({});

