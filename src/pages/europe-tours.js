import { Layout } from "../components/Layout/Layout";
import { ListContainer } from "../components/ListContainer/ListContainer";
import { EUROPE_TOURS } from "../../data/TOURS_DATA";
const EuropeTours = () => {
  return (
    <Layout title="Europe Tours - Next Tours">
      <ListContainer list={EUROPE_TOURS} />
    </Layout>
  );
};

export default EuropeTours;
