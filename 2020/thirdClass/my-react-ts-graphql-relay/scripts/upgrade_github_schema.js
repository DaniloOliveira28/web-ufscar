const path = require("path");
const updateGraphqlSchema = require("update-graphql-schema");

(async function() {
  console.log("Begin update graphql schema....");
  console.log('xxx', process.env.REACT_APP_GITHUB_API_TOKEN)
  await updateGraphqlSchema({
    endPoint: "https://api.github.com/graphql",
    output: path.resolve(__dirname, "..", "data", "schema.json"),
    headers: {
      Authorization: `bearer ${process.env.REACT_APP_GITHUB_API_TOKEN}`
    }
  });
  console.log("Update graphql schema success");
})();
