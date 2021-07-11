import ourStory from "../public/about/About_-_Our_Philosophy.jpg";
import ourPhilosophy from "../public/about/About_-_Our_Story.jpg";
import ourTours from "../public/about/About_-_Our_Tours.jpg";
import ourGuides from "../public/about/About_-_Our_Guides.jpg";

export const ABOUT_DATA = [
  {
    id: 1,
    payload: [
      {
        id: "p-1",
        title: "Our Story",
        description: [
          "Walks began life as the passion project of two guys with one simple mission: To share their love for, and knowledge of, the city of Rome. Since then, Walks has grown into a team of over 100 ground staff and at any time up to 600 guides, operating across 13 of the world’s most exciting cities (and counting!)",
          "Today we provide some of the most exclusive and beautifully designed small group tours in the industry through Italy-based Walks of Italy and around the world at Walks, where we offer special access to some of the world’s most iconic landmarks and attractions as well as unique cultural experiences.",
        ],
        picture: ourStory,
        pictureDesc: "People walking",
      },
      {
        id: "p-2",
        title: "The Walks Philosophy",
        description: [
          "Our philosophy is simple: We believe the best way to travel is to take walks.",
          "Every city has a story to tell - but you won't hear it on a tour bus! The only way to truly understand a place is to explore it at street level; meet people, take shortcuts, hear stories... And that's exactly what we do at Walks.",
          "Our intimate tours are highly regarded for their exclusive feel - and that’s no accident! Skip-the-line and out of hours access, together with our small group sizes, carefully planned itinerary and the most experienced guides in the business have led us to become an industry leader.",
        ],
        picture: ourPhilosophy,
        pictureDesc: "People walking",
        direction: "reverse",
      },
    ],
  },
  {
    id: 2,
    payload: [
      {
        id: "p-3",
        title: "On Tours & Experiences",
        description: [
          "At Walks we don’t just copy and paste standard tours, we strive to always find new and better ways to explore even the most familiar attractions.",
          "Whether it’s after-hours drinks at the Met Museum, time alone in St. Mark’s Basilica, a true crime tour of the streets of New York, or a luxury wine tasting in the Loire Valley, Walks tours provide the most memorable experiences with high quality expeditions that are just a little bit different.",
        ],
        picture: ourTours,
        pictureDesc: "People walking on a tour",
      },
      {
        id: "p-4",
        title: "Our Guides",
        description: [
          "In the beginning, Walks was based on the principle that exceptional guides can make a tour the highlight of someone's vacation, and those values are still at our core today.",
          "Walks guides are educators and story-tellers, not lecturers or script-readers. They live to share their passion with well-informed, curious travelers who want to learn and be entertained.",
          "With our tours you don’t need to worry about being regaled with a Wikipedia entry - instead you’ll enjoy a fully-rounded experience and gain new insights you’ll no doubt want to share with others.",
        ],
        picture: ourGuides,
        pictureDesc: "Tour guide showing route",
        direction: "reverse",
      },
    ],
  },
];
