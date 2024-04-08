export default function Page({ params }: { params: { course: string } }) {
  return (
    <div className="min-h-screen w-full flex justify-center items-center md:px-0 px-8 py-10">
      <h1>My Page : {params.course}</h1>
    </div>
  );
}
