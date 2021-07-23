import { useRouter } from 'next/router';
import { Layout } from "../components/Layout/Layout";
import { TourTop } from '../components/TourTop/TourTop';
import { TourContainer } from '../components/TourContainer/TourContainer';
const tourPackages = require("../../data/TOUR_PACKAGES");

const Tour = ({ tour }) => {
  const router = useRouter()
  return(
    <Layout title={`Next Tourism - ${tour.title}`}>
      <TourTop title={tour.title} menu={tour.menu} />
      <TourContainer data={tour.data} path={tour.path}  />
    </Layout>
  )
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = tourPackages.map((tour) => ({
    params: { path: tour.path },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id

  const tours = tourPackages.filter(
    (p) => p.path.toString() === params.path
  );

  return {
    props: {
      tour: tours[0],
    },
  };
}

export default Tour;