import fetchLatestF1News from "../../lib/data/news";
import NewsCard from "./news-card";

export default async function NewsFeed() {
    const articles = await fetchLatestF1News();
    return (
        <section className="flex flex-col gap-6 mb-12 md:max-w-1/2 lg:max-w-1/4 mx-auto items-center">
            <h1 className="text-2xl lg:text-4xl font-extrabold text-slate-900 underline tracking-wide"> Latest F1 News</h1>
            {articles.map((article) => (
                <div className="w-full" key={article.guid ?? article.link}>
                    <NewsCard article={article} />
                </div>
            ))}
        </section>
    )
}