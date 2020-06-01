import React from 'react';
import styled from 'styled-components';
import { parse } from 'query-string';
import { MarkdownHeading, H } from '../components/mdxComponents/Headings';
import { Text } from '../components/mdxComponents/Text';
import { Code } from '../components/mdxComponents/Code';
import { Button } from '../components/Button';
import { HireMeMetaTags } from '../components/MetaTags';

const HireMePageStyle = styled.div`
  h1 {
    margin-top: 0;
  }
`;

const AboutMeSection = styled.section``;

const ValueSection = styled.section``;

const ContactFormSection = styled.section`
  form {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 3rem;
    textarea {
      min-height: 20rem;
      height: 100%;
    }
    label {
      font-size: 1.1em;
      font-family: var(--monospace);
      display: block;
      margin-bottom: 1rem;
    }
    input:not([type='submit']),
    textarea {
      color: var(--black);
      background-color: var(--white);
      font-family: var(--sans-serif);
      border-radius: 0.3333rem;
      border: 0;
      line-height: 1.77778;
      width: 100%;
      padding: 0.75rem;
    }
    .two-column {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 3rem;
      @media (max-width: 550px) {
        grid-template-columns: 1fr;
        grid-row-gap: 3rem;
      }
    }
  }
`;

const InputContainer = styled.div`
  height: max-content;
`;

const SuccessMessage = styled(Text)`
  background: var(--green);
  color: var(--black);
  padding: 3rem;
`;

export default function HireMePage({ pageContext, path, location }) {
  const { success: formSuccess } = parse(location.search);
  return (
    <HireMePageStyle>
      <HireMeMetaTags />
      {formSuccess && (
        <SuccessMessage>
          Got It! 📬 Thank you for reaching out! I will be sure to get back to
          you ASAP.
        </SuccessMessage>
      )}
      <MarkdownHeading>Hire Me</MarkdownHeading>
      <AboutMeSection>
        <H as="h2" className="visually-hidden">
          About
        </H>
        <Text>
          I am a user-oriented full-stack web developer. This means that I
          specialize in creating things <strong>for people</strong>.
        </Text>
        <Text>
          My greatest strength is my ability to collaborate with product owners,
          designers, and developers and translate each party's requirements and
          constraints into something that ultimately works for the end user.
        </Text>
        <Text>
          I am the happiest when I am working on user-facing features, but I am
          also able to get my hands dirty and write the APIs, and database
          schemas needed to turn an idea into a reality.
        </Text>
      </AboutMeSection>
      <ValueSection>
        <H as="h2">What I Provide</H>
        <Text>
          I hold myself to high standards, and provide high value for the
          investment you make in me.
        </Text>
        <Text large>All of my work is, by default:</Text>
        <ul>
          <Text as="li">
            <strong>Optimized for mobile.</strong> All front-ends are fully
            responsive, and tested across many devices and browsers.
          </Text>
          <Text as="li">
            <strong>Cross-browser compatible.</strong> My applications will work
            regardless of the browser your users use. Though I do not optimize
            for older browsers, the applications I create are usable in those
            browsers.
          </Text>
          <Text as="li">
            <strong>Accessible.</strong> The web is for everybody. There is no
            compromise for creating an inclusive experience. With the{' '}
            <a href="https://www.adatitleiii.com/2019/01/number-of-federal-website-accessibility-lawsuits-nearly-triple-exceeding-2250-in-2018/">
              increasing number of accessibility lawsuits
            </a>{' '}
            each year, you can thank me later 😜.
          </Text>
          <Text as="li">
            <strong>Written with Modern code.</strong> All my front-end code is
            crafted semantic HTML, styled with modern CSS practices, and brought
            to life with the latest Javascript features. (<strong>Note:</strong>{' '}
            All shiny and new pieces of code come with appropriate fall backs,
            so they can still be run on older browsers.)
          </Text>
          <Text as="li">
            <strong>Optimized for performance.</strong> My experiences feel
            lightweight and fast.
          </Text>
        </ul>
      </ValueSection>
      <ContactFormSection>
        <H as="h2">Contact</H>
        <Text>
          My preferred methods of contact are via{' '}
          <a href="mailto:dylan@dylansheffer.com">Email</a> or the form below,
          but I am also reachable on{' '}
          <a href="https://twitter.com/dylansheffer">Twitter</a>,{' '}
          <a href="https://linkedin.com/in/dylansheffer">LinkedIn</a>, and on
          the <a href="http://slack.cville.co/">CVille</a> and{' '}
          <a href="https://www.757dev.org/">757Dev</a> Slack channels (
          <Code as="span">@DylanSheffer</Code>).
        </Text>
        <form
          id="contact-form"
          name="contact"
          method="post"
          data-netlify-honeypot="bot-field"
          // data-netlify-recaptcha="true"
          data-netlify="true"
          action="/hire-me/?success=🎉"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          {/* Replace eslint rule with the updated version https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md */}
          <div className="two-column">
            <InputContainer>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            </InputContainer>
            <InputContainer>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </InputContainer>
          </div>
          <InputContainer>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"></textarea>
          </InputContainer>
          {/* <div
          className="g-recaptcha"
          data-sitekey="6Ldv2fwUAAAAAAUgSJSKy1gHYHw0EH3OZhP8yImA"
        ></div> */}
          <Button as="input" type="submit" value="Send Message" />
        </form>
      </ContactFormSection>
    </HireMePageStyle>
  );
}

// export const pageQuery = graphql``;
