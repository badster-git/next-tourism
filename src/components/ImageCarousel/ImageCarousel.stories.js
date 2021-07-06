import { ImageCarousel } from "./ImageCarousel";
import "../../../styles/styles.css";

export default {
  title: "Brand/Image Carousel",
  component: ImageCarousel,
};

const Template = (args) => (
  <ImageCarousel {...args}>Default Header</ImageCarousel>
);
export const Primary = Template.bind({});
Primary.args = {
  items: [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ],
};
