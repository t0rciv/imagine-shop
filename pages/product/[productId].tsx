import { useRouter } from "next/router";

export default function ProductDetail() {
  const router = useRouter();
  const productId = router.query.productId;

  return <h2>Detalhes do Produto {productId}</h2>;
}
