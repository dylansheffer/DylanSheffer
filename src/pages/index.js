import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import { ContentContainer } from '../components/styles/LayoutStyles';
import { Dot } from '../components/Dot';
import { Button } from '../components/Button';
import { H, MarkdownHeading } from '../components/mdxComponents/Headings';
import { MiniPostCard } from '../components/PostCard';
import { Text } from '../components/mdxComponents/Text';
import { CircleImg } from '../components/CircleImg';

const StatusStyle = styled.p`
  font-weight: bold;
  .dot {
    margin-right: 1rem;
  }
`;

const Status = ({ available }) => (
  <>
    <StatusStyle>
      <Dot className="dot" color={available ? 'green' : 'red'} />
      {available ? `Is Available for Clients 🎉` : `Currently Booked 😅`}
    </StatusStyle>
    <Button as={Link} to="/hire-me">
      {available ? `Hire Me` : `Schedule a Time`}
    </Button>
  </>
);

const Hero = styled.main`
  background-color: var(--surface-light);
  width: 100%;
  .content-container {
    display: grid;
    justify-items: center;
    align-items: center;
    margin: 0 auto;
    .hero-content {
      display: grid;
      grid-gap: 2rem;
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
      grid-template-columns: 32rem 1fr;
      grid-gap: 3rem;
      .hero-content {
        grid-gap: 3rem;
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

const ProjectsSection = styled.section`
  background-color: var(--surface-medium);
  .projects-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;
    @media (min-width: 600px) {
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: 30rem;
    }
  }
  .view-all {
    margin: 2rem 0;
    display: block;
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
    h1 {
      margin: 0;
    }
    p {
      line-height: 2;
    }
  }
`;

const Site = ({ data: { me, projects }, ...props }) => (
  <>
    <Hero>
      <ContentContainer>
        <CircleImg image={me} />
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
          <Link to="/projects/">My Work</Link>
        </MarkdownHeading>
        <div className="projects-container">
          {projects.nodes.map(
            ({ excerpt, frontmatter, id, fields: { slug } }) => (
              <MiniPostCard
                key={id}
                title={frontmatter.title}
                link={slug}
                tags={frontmatter.tags}
              >
                {excerpt}
              </MiniPostCard>
            )
          )}
        </div>
        <Link className="view-all" to="/projects">
          View All Projects
        </Link>
      </ContentContainer>
    </ProjectsSection>
    <CTASection>
      <ContentContainer>
        <H>Let's Work Together</H>
        <Text>
          Whether you need someone to help you launch an idea, make your
          application more accessible, or just provide some assistance on
          finishing a project, I am here to help! 😄
        </Text>
        <Button as={Link} to="/hire-me">
          Let's Talk
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
      limit: 4
    ) {
      nodes {
        excerpt(pruneLength: 100)
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
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
