export const environment = {
    production: false,
    githubApiUrl: 'https://api.github.com', // Development API URL
    // githubToken:'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'
    githubToken: process.env.GITHUB_TOKEN
  };
