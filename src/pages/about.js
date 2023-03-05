import * as React from "react";
import Layout from "../components/layout";
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <h2>Creating this for fun!</h2>
      <p>My favorite food including:</p>
      <ul>
      <li>egg waffles</li>
      <li>egg tart</li>
      <li>Hong Kong Milk Tea ☕️</li>
      </ul>
    </Layout>
  );
};

export const Head = () => <Seo title="About Me" />

export default AboutPage;
