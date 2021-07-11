import { Layout } from "../components/Layout/Layout";
import { ListContainer } from "../components/ListContainer/ListContainer";
import { USA_TOURS } from "../../data/TOURS_DATA";
const USATours = () => {
  return (
    <Layout title="USA Tours - Next Tours">
      <ListContainer list={USA_TOURS} maxSize={2} />
    </Layout>
  );
};

export default USATours;

