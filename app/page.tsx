import NewsFeed from "@/components/news/news-feed";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6 md:p-12 mx-auto">
      <section className="mt-8 text-center">
        <h1 className="text-2xl lg:text-8xl font-extrabold text-slate-900 underline tracking-wide">F1 Info Hub</h1>
        <p className="mt-8 text-lg text-slate-700">Welcome to the F1 Info Hub, your go-to source for all things Formula 1.</p>
        <p className="mt-4 mb-8 text-base text-slate-600">Here you can find race schedules and results, read driver and team profiles, and view up-to-date driver and constructor standings.</p>
      </section>
      <hr className="my-8 border-slate-200" />
      <NewsFeed newsLimit={3}/>
      <Link
        href="/news"
        className={"px-4 py-2 rounded bg-[#EE0000] text-white hover:bg-[#d10202] block w-max mx-auto"}
      >
        See more news
      </Link>
    </main>
  );
}
