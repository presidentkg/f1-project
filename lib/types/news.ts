export interface ArticleItem {
    title: string;
    content: string;
    link: string;
    "dc:creator": string;
    guid: string;
}

export interface Channel {
    title: string;
    link: string;
    description: string;
    language: string;
    lastBuildDate: string;
    item: ArticleItem[]; 
}

export interface F1RssFeed {
    rss: {
        channel: Channel;
    }
}