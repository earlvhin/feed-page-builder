import Parser from "rss-parser";
import { useState } from "react";
import BlurbViewer from "@/components/BlurbViewer";
import FeedInfoForm from "@/components/FeedInfoForm";

export default function GenerateFeedIndex() {
  const [parsedFeedData, setParsedFeedData] = useState([]);

  const extractFeedURLData = async (data) => {
    const { feedURL } = data;
    const parser = new Parser();
    const parsedFeed = await parser.parseURL(feedURL);
    const parsedItems = parsedFeed.items.map((i) => {
      const firstSentence = extractFirstSentence(
        i["content:encoded"]
          ? i["content:encoded"]
              .replace(/<[^>]*>/g, "")
              .replace(/\n/g, "")
              .trim()
          : i.description
      );

      return {
        title: i.title,
        pubDate: i.pubDate,
        content: firstSentence,
      };
    });

    setParsedFeedData(parsedItems);
  };

  const extractFirstSentence = (paragraph) => {
    const sentenceRegex = /[A-Z][^.!?]*[.!?]/;
    const match = paragraph.match(sentenceRegex);
    return match ? match[0] : "";
  };

  return (
    <div className="page generate-feed-page">
      <section className="page-content">
        <div className="title mb-5">
          <h2>RSS Feed Extract Version 1.0.0</h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-12">
            <FeedInfoForm onDataSubmit={extractFeedURLData} />
          </div>
        </div>

        <hr className="my-5" />

        <div className="row">
          <div className="col-lg-12">
            <div className="title mb-4">
              <h2>Extracted Parsed XML</h2>
            </div>
            {parsedFeedData.slice(0, 5).map((feed, index) => (
              <BlurbViewer key={index} data={feed} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
