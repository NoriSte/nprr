module.exports = {
  plugins: [
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
    "@semantic-release/npm",
    [
      "semantic-release/commit-analyzer",
      {
        preset: "angular",
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"]
        }
      }
    ],
    [
      "semantic-release/release-notes-generator",
      {
        preset: "angular",
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"]
        },
        writerOpts: {
          commitsSort: ["subject", "scope"]
        }
      }
    ]
  ]
};
