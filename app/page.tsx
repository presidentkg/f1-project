import NewsFeed from "@/components/news/news-feed";

export default function Home() {
  return (
    <main className="p-6 md:p-12 mx-auto">
      <section className="mt-8 text-center">
        <h1 className="text-2xl lg:text-8xl font-extrabold text-slate-900 underline tracking-wide">F1 Info Hub</h1>
        <p className="mt-8 text-lg text-slate-700">Welcome to the F1 Info Hub, your go-to source for all things Formula 1.</p>
        <p className="mt-4 mb-8 text-base text-slate-600">Here you can find race schedules and results, read driver and team profiles, and view up-to-date driver and constructor standings.</p>
      </section>
      <NewsFeed />
    </main>
  );
}
