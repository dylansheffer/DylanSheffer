import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { MarkdownHeading } from '../components/mdxComponents/Headings';
import { Text } from '../components/mdxComponents/Text';
import { Code } from '../components/mdxComponents/Code';
import { Button } from '../components/Button';

const ContactPageStyle = styled.section`
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

export default function ContactPage({ pageContext, path }) {
  return (
    <ContactPageStyle>
      <Helmet>
        <title>Contact - Dylan Sheffer</title>
      </Helmet>
      <MarkdownHeading>Contact</MarkdownHeading>
      <Text>
        My preferred method of contact is via{' '}
        <a href="mailto:dylan@dylansheffer.com">Email</a> or the form below, but
        I am also reachable on{' '}
        <a href="https://twitter.com/dylansheffer">Twitter</a>,{' '}
        <a href="https://linkedin.com/in/dylansheffer">LinkedIn</a>, and on the{' '}
        <a href="http://slack.cville.co/">CVille</a> and{' '}
        <a href="https://www.757dev.org/">757Dev</a> Slack channels (
        <Code as="span">@DylanSheffer</Code>).
      </Text>
      <form
        className="contact-form"
        name="contact"
        method="post"
        data-netlify-honeypot="bot-field"
        // data-netlify-recaptcha="true"
        data-netlify="true"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        {/* Replace eslint rule with the updated version https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md */}
        <div className="two-column">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message"></textarea>
        </div>
        {/* <div
          className="g-recaptcha"
          data-sitekey="6Ldv2fwUAAAAAAUgSJSKy1gHYHw0EH3OZhP8yImA"
        ></div> */}
        <Button as="input" type="submit" value="Send Message" />
      </form>
    </ContactPageStyle>
  );
}
