import Parser from "rss-parser";
import { ArticleItem } from "../types/news";

const parser = new Parser();
const newsLimit = 10;

export default async function fetchLatestF1News() : Promise<ArticleItem[]> {
    try {
        const res = await fetch("https://www.formula1.com/en/latest/all.xml");
        if (!res.ok) throw new Error(`Failed to fetch RSS feed (${res.status} ${res.statusText})`);

        const xml = await res.text();
        const feed = await parser.parseString(xml);
        const items = feed.items as ArticleItem[];
        return items.slice(0, newsLimit);
    } catch (error) {
        console.error("Error fetching F1 news:", error);
        return [];
    }
}