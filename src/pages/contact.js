import React from 'react';
import styled from 'styled-components';
import { parse } from 'query-string';
import { MarkdownHeading, H } from '../components/mdxComponents/Headings';
import { Text } from '../components/mdxComponents/Text';
import { Code } from '../components/mdxComponents/Code';
import { Button } from '../components/Button';
import { ContactMetaTags } from '../components/MetaTags';
import FocusMeOnPageLoad from '../components/FocusMeOnPageLoad';

const ContactPageStyle = styled.div`
  h1 {
    margin-top: 0;
  }
`;

const ContactFormSection = styled.section`
  form {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 3rem;
    fieldset {
      display: contents;
      margin: 0;
      padding: 0;
      border: none;
    }
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

export default function ContactPage({ pageContext, path, location }) {
  const { success: formSuccess } = parse(location.search);
  return (
    <ContactPageStyle>
      <ContactMetaTags />
      {formSuccess && (
        <FocusMeOnPageLoad>
          <SuccessMessage>
            Got It! <span aria-hidden="true">📬</span> Thank you for reaching
            out! I will be sure to get back to you ASAP.
          </SuccessMessage>
        </FocusMeOnPageLoad>
      )}
      <MarkdownHeading>Contact</MarkdownHeading>
      <ContactFormSection>
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
          action="/contact/?success=🎉"
        >
          <fieldset>
            <legend className="visually-hidden">Contact Form</legend>
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
          </fieldset>
        </form>
      </ContactFormSection>
    </ContactPageStyle>
  );
}

// export const pageQuery = graphql``;
