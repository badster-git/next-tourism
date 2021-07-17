import { useRouter } from 'next/router';
import { TOUR_PACKAGES } from '../../data/TOUR_PACKAGES';
import { Layout } from "../components/Layout/Layout";
import { TourTop } from '../components/TourTop/TourTop';
import { TourContainer } from '../components/TourContainer/TourContainer';

const TourInformation = ({ tour }) => {
  const router = useRouter()
  return(
    <Layout title={`Next Tourism - ${tour.title}`}>
      <TourTop title={tour.title} menu={tour.menu} />
      <TourContainer data={tour.data}  />
    </Layout>
  )
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = TOUR_PACKAGES.map((tour) => ({
    params: { path: tour.path },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const tours = TOUR_PACKAGES.filter(
    (p) => p.path.toString() === params.path
  );

  return {
    props: {
      tour: tours[0],
    },
  };
}

export default TourInformation;