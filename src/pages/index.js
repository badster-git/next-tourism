import { Layout } from "../components/Layout/Layout";
import { IndexTop } from "../components/IndexTop/IndexTop";
import { MostPopular } from "../components/MostPopular/MostPopular";
import { AboutIndex } from "../components/AboutIndex/AboutIndex";

export default function Home() {
  return (
    <Layout title="Next Tourism - Home">
      <IndexTop />
      <MostPopular />
      <AboutIndex />
    </Layout>
  );
}
