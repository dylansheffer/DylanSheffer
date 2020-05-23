import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { ContentContainer } from '../components/styles/LayoutStyles';
import { Dot } from '../components/Dot';
import { Button } from '../components/Button';
import { H, MarkdownHeading } from '../components/mdxComponents/Headings';
import { PostCard } from '../components/PostCard';
import { Text } from '../components/mdxComponents/Text';

const StatusStyle = styled.p`
  font-weight: bold;
  .dot {
    margin-right: 8px;
  }
`;

const Status = ({ available }) => (
  <>
    <StatusStyle>
      <Dot className="dot" color={available ? 'green' : 'red'} />
      {available ? `Is Available for Clients 🎉` : `Currently Booked 😅`}
    </StatusStyle>
    <Button as={Link} to="/contact">
      {available ? `Get a Quote` : `Schedule a Time`}
    </Button>
  </>
);

const Post = styled.article``;

const Hero = styled.main`
  background-color: var(--surface-light);
  .content-container {
    display: grid;
    justify-items: center;
    align-items: center;
    margin: 0 auto;
    .hero-content {
      display: grid;
      grid-gap: 16px;
      justify-items: center;
      align-items: center;
      h1 {
        text-align: center;
        margin: 0;
      }
      p {
        text-align: center;
        line-height: 1.75;
        margin: 0;
      }
    }
    @media (min-width: 700px) {
      justify-items: left;
      grid-template-columns: auto 1fr;
      grid-gap: 24px;
      .hero-content {
        grid-gap: 24px;
        justify-items: left;
        align-items: unset;
        h1 {
          text-align: left;
        }
        p {
          text-align: left;
        }
      }
    }
  }
`;

const CircleImg = styled(Img)`
  width: 320px;
  height: 320px;
  border-radius: 50%;
`;

const ProjectsSection = styled.section`
  background-color: var(--surface-medium);
  .projects-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 24px;
    @media (min-width: 600px) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;

const CTASection = styled.section`
  background-color: var(--surface-dark);
  .content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    p {
      line-height: 2;
    }
  }
`;

const Site = ({ data: { me, projects }, ...props }) => (
  <>
    <Hero>
      <ContentContainer>
        <CircleImg fixed={me.childImageSharp.fixed} />
        <div className="hero-content">
          <H>Dylan Sheffer</H>
          <p>
            Full Stack Web Developer committed to building performant and
            inclusive web applications.
          </p>
          <Status available />
        </div>
      </ContentContainer>
    </Hero>
    <ProjectsSection>
      <ContentContainer>
        <MarkdownHeading>
          <Link to="/projects/">Projects</Link>
        </MarkdownHeading>
        <div className="projects-container">
          {projects.nodes.map(
            ({ excerpt, frontmatter, id, fields: { slug } }) => (
              <PostCard
                key={id}
                title={frontmatter.title}
                link={slug}
                tags={frontmatter.tags}
              >
                {excerpt}
              </PostCard>
            )
          )}
        </div>
      </ContentContainer>
    </ProjectsSection>
    <CTASection>
      <ContentContainer>
        <H>Let's Build Something Together</H>
        <Text>
          Nunc vel vehicula ante. Curabitur cursus felis in mi sodales, eget
          porta magna viverra. Cras molestie sit amet ante quis tempus.{' '}
        </Text>
        <Button as={Link} to="/contact">
          Get a Quote
        </Button>
      </ContentContainer>
    </CTASection>
  </>
);

export default Site;

export const query = graphql`
  query SITE_INDEX_QUERY {
    projects: allMdx(
      filter: { fields: { collection: { eq: "projects" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        excerpt(pruneLength: 250)
        id
        frontmatter {
          title
          tags
        }
        fields {
          slug
        }
      }
    }
    me: file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fixed(width: 320, height: 320) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
