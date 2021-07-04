import  {Footer} from "./Footer";

export default {
  title: "Brand/Footer",
  component: Footer,
};

const Template = (args) => (
  <Footer {...args}>Default Footer</Footer>
);
export const Primary = Template.bind({});
