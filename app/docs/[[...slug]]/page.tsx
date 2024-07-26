export default function Docs({ params }: { params: { slug: string[] } }) {
  if (params.slug?.length === 2) {
    return (
      <h1>
        Viewing Docs Page for Feature {params.slug[0]} and concept{" "}
        {params.slug[1]}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1>Viewing Docs Page for Feature {params.slug[0]}</h1>;
  }
  return (
    <main className="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
      <h1 className="text-3xl font-bold">Docs Home Page</h1>
    </main>
  );
}
