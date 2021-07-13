import { useRouter } from 'next/router';
import { TOUR_PACKAGES } from '../../data/TOUR_PACKAGES';
import { Layout } from "../components/Layout/Layout";
import { TourTop } from '../components/TourTop/TourTop';

const Tour = ({ tour }) => {
  const router = useRouter()
  console.log(tour);
  return(
    <Layout title="Next Touris">
      <TourTop title={tour.title} menu={tour.menu} />
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
  console.log(params);
  const tours = TOUR_PACKAGES.filter(
    (p) => p.path.toString() === params.path
  );

  return {
    props: {
      tour: tours[0],
    },
  };
}

export default Tour;