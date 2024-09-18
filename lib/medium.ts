import Parser from "rss-parser";

interface MediumPost {
  title: string;
  link: string;
  pubDate: string; // or Date if you prefer to convert it
}

const parser = new Parser();

const fetchMediumPosts = async () => {
  const feed = await parser.parseURL('https://medium.com/feed/@larasn_');
  
  // Ensure the feed items are of type MediumPost
  const posts: MediumPost[] = feed.items.map(item => ({
    title: item.title || '',
    link: item.link || '',
    pubDate: item.pubDate || ''
  }));

  return posts;
};

export default fetchMediumPosts;
