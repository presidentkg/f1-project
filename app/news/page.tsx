import NewsFeed from "@/components/news/news-feed";


export default function News(){
    return (
        <main className="mt-8">
            <NewsFeed newsLimit={10} />
        </main>
    )
}