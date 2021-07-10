import { CustomTextImageContainer } from "./CustomTextImageContainer";

export default {
  title: "Brand/Custom Text Container",
  component: CustomTextImageContainer,
};

const Template = (args) => <CustomTextImageContainer {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  title: "Our Story",
  description: [
    {
      id: 1,
      text:
        "Walks began life as the passion project of two guys with one simple mission: To share their love for, and knowledge of, the city of Rome. Since then, Walks has grown into a team of over 100 ground staff and at any time up to 600 guides, operating across 13 of the world’s most exciting cities (and counting!)",
    },
    {
      id: 2,
      text:
        "Today we provide some of the most exclusive and beautifully designed small group tours in the industry through Italy-based Walks of Italy and around the world at Walks, where we offer special access to some of the world’s most iconic landmarks and attractions as well as unique cultural experiences.",
    },
  ],
  picture: "about/About_-_Our_Philosophy.jpg",
	pictureDesc: "People walking"
};

export const Reverse = Template.bind({});
Reverse.args = {
	...Primary.args,
	direction: "reverse",
}