import  Header  from "./Header";

export default {
  title: "Brand/Header",
  component: Header,
};

const Template = (args) => (
  <Header {...args}>Default Header</Header>
);
export const Primary = Template.bind({});