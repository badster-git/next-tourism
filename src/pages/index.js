import { Layout } from "../components/Layout/Layout";
import { IndexTop } from "../components/IndexTop/IndexTop";
import { MostPopular } from "../components/MostPopular/MostPopular";

export default function Home() {
  return (
    <Layout title="Next Tourism - Home">
      <IndexTop />
      <MostPopular />
    </Layout>
  );
}
