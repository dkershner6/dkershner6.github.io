const getMergedPRsQuery = `query getPRs { 
  viewer {
    pullRequests(first: 10, states: [MERGED], orderBy: {field:UPDATED_AT, direction: DESC}) {
      nodes {
        url
      }
    }
  }
  rateLimit {
    cost,
    used,
    remaining
  }
}`;

export default getMergedPRsQuery;
