export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Details about Product {params.productId}</h1>
    </main>
  );
}
