import { useParams } from "react-router";

const Product = () => {
  const params = useParams();
  return <p>product no. {params.id}</p>;
};

export default Product;
