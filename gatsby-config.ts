import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  pathPrefix: "/my-tech-blog",
  siteMetadata: {
    title: `My tech blog`,
    siteUrl: `https://mmatsumoto1026.github.io/my-tech-blog`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-transformer-remark",
    "gatsby-remark-images", 
    "gatsby-remark-prismjs",
    "prismjs",
    "gatsby-remark-highlight-code",
    "gatsby-source-filesystem",
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-manifest",
  ]
};

export default config;
