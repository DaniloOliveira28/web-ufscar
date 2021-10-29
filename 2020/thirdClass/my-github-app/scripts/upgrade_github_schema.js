const path = require("path");
const updateGraphqlSchema = require("update-graphql-schema");

(async function() {
  console.log("Updating graphql schema....");

  await updateGraphqlSchema({
    endPoint: "https://api.github.com/graphql",
    output: path.resolve(__dirname, "..", "data", "schema.graphql"),
    type: "graphql",
    headers: {
      Authorization: `bearer ${process.env.REACT_APP_GITHUB_API_TOKEN}`
    }
  });
  console.log("Update graphql schema success");
})();
