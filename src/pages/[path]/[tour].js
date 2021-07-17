import { useRouter } from "next/router";
import { Layout } from "../../components/Layout/Layout";
import { TOUR_PACKAGES } from "../../../data/TOUR_PACKAGES";

const TourInformation = ({ tour }) => {
  const router = useRouter();
  //console.log(tour);
  return <Layout title={`Next Tourism - ${tour.title}`}></Layout>;
};

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = TOUR_PACKAGES.map((tour) => {
    let path = tour.path;

    let href = tour.data
      .map((item) =>
        item.tours.map((link) => ({
          params: {
            path: path,
            tour: link.href,
          },
        }))
      )
      .flat(Infinity);
    return href;
  }).flat(Infinity);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the tour post using params object

  const tours = TOUR_PACKAGES.filter((item) => item.path === params.path);

  const filteredTours = tours
    .map((tour) =>
      tour.data.map((item) =>
        item.tours.filter((link) => link.href === params.tour)
      )
    )
    .flat(Infinity);

  return {
    props: {
      tour: filteredTours[0],
    },
  };
}

export default TourInformation;
