import { NewsletterForm } from "./NewsletterForm";

export default {
  title: "Brand/Newsletter Form",
  component: NewsletterForm,
};

const Template = (args) => (
  <NewsletterForm {...args}></NewsletterForm>
);
export const Primary = Template.bind({});