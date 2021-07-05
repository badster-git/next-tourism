import { CustomImgGrid } from "./CustomImgGrid";

export default {
  title: "Brand/Custom Image Grid",
  component: CustomImgGrid,
};

const Template = (args) => (
  <CustomImgGrid {...args}>Default Header</CustomImgGrid>
);

export const Big = Template.bind({});
Big.args = {
  location: [
    {
      id: 1,
      title: "Rome",
      size: "big",
      href: "/rome-tours",
      picture: "/top-locations/rome.jpg",
    },
    {
      id: 2,
      title: "Venice",
      size: "big",
      href: "/venice-tours",
      picture: "/top-locations/venice.jpg",
    },
		{
      id: 3,
      title: "Paris",
      size: "small",
      href: "/paris-tours",
      picture: "/top-locations/paris.jpg",
		},
		{
      id: 4,
      title: "Florence",
      size: "small",
      href: "/florence-tours",
      picture: "/top-locations/florence.jpg",
		},
		{
      id: 5,
      title: "Venice",
      size: "small",
      href: "/venice-tours",
      picture: "/top-locations/venice.jpg",
		},
	],
};

export const Small = Template.bind({});
Small.args = {};
