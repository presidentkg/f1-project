import fetchLatestF1News from "../../lib/data/news";
import NewsCard from "./news-card";

export default async function NewsFeed({newsLimit} : {newsLimit: number}) {
    const articles = await fetchLatestF1News({ newsLimit });
    return (
        <section className="flex flex-col gap-6 mb-12 md:max-w-1/2 lg:max-w-1/4 mx-auto items-center">
            <h1 className="text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-wide"> Latest F1 news from f1.com</h1>
            {articles.map((article) => (
                <div className="w-full" key={article.guid ?? article.link}>
                    <NewsCard article={article} />
                </div>
            ))}
        </section>
    )
}