import React from "react";
import Article from "./Article";

function getEmojiString(minutes) {
    let emoji = "";
    if (minutes < 30) {
      const numCoffeeCups = Math.ceil(minutes / 5);
      emoji = "☕️".repeat(numCoffeeCups);
    } else {
      const numBentoBoxes = Math.ceil(minutes / 10);
      emoji = "🍱".repeat(numBentoBoxes);
    }
    return `${emoji} ${minutes} min read`;
  }
  

function ArticleList({ posts }) {
    return (
        <main>
          {posts.map(post => 
            <Article
              key={post.id}
              title={post.title}
              date={post.date}
              preview={post.preview}
              minutes={post.minutes}
              timeIndicator={getEmojiString(post.minutes)}
            />
          )}
        </main>
    );
}

export default ArticleList;


