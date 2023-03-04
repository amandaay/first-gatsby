import * as React from "react";
import Layout from "../components/layout";
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage alt="fun" src="https://thumbs.dreamstime.com/b/watercolor-green-cyan-collection-contemporary-dance-peoples-silhouettes-white-80598147.jpg"/> 
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
