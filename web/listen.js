require("dotenv").config();
const fs = require("fs");
const { sanityClient } = require("./lib/sanityClient.js");

const query = `*[_type == "post"] {
  "slug": slug.current,
  title,
  mainImage {asset->},
  body,
  ...
}`;

const writePosts = function () {
  sanityClient.fetch(query).then((posts) => {
    fs.writeFileSync(
      "./views/_data/posts.json",
      JSON.stringify(posts, null, 2)
    );
  });
};

writePosts();
const subscription = sanityClient
  .listen(query, {}, { visibility: "query" })
  .subscribe(() => {
    writePosts();
  });

process.stdin.resume();
process.on("SIGINT", function () {
  subscription.unsubscribe();
  process.exit();
});
