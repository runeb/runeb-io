require("dotenv").config();
const fs = require("fs");
const { sanityClient } = require("./lib/sanityClient.js");
const { debounce } = require("./debounce");

const query = `*[_type == "post"] | order(_createdAt desc)`;

const writePosts = () => {
  sanityClient.fetch(query).then((allPosts) => {
    const posts = allPosts.filter((p) => p._id.match(/^drafts/));
    allPosts
      .filter((p) => !p._id.match(/^drafts/))
      .forEach((p) => {
        // Only add the posts that don't have drafts
        if (!posts.find((x) => x._id === `drafts.${p._id}`)) {
          posts.push(p);
        }
      });

    fs.writeFileSync(
      "./views/_data/posts.json",
      JSON.stringify(posts, null, 2)
    );
  });
}

writePosts();
const subscription = sanityClient
  .listen(query, {}, { visibility: "query" })
  .subscribe(writePosts);

process.stdin.resume();
process.on("SIGINT", function () {
  subscription.unsubscribe();
  process.exit();
});
