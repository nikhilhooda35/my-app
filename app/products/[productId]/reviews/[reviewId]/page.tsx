import { notFound } from "next/navigation";

export default function ReviewDetail({
  params: { reviewId, productId },
}: {
  params: { reviewId: string; productId: string };
}) {
  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        Review {reviewId} for Product {productId}
      </h1>
    </main>
  );
}
