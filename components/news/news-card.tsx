import Link from "next/link";
import { ArticleItem } from "@/lib/types/news";

export default function NewsCard({ article }: { article: ArticleItem }) {
    return (
        <article className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow flex flex-col gap-2">
            <h1 className="text-2xl text-slate-700">{article.title}</h1>
            <p className="text-base text-slate-600">{article.content}</p>
            <Link href={article.link} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded bg-[#EE0000] text-white w-max shadow-sm hover:bg-[#d10202]">
                Link to full article
            </Link>
        </article>
    );
}