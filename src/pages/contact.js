import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { MarkdownHeading } from '../components/mdxComponents/Headings';

const ContactPageStyle = styled.section`
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  label {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 8px;
  }

  input:not([type='submit']),
  textarea {
    font-size: 18px;
    line-height: 1.5em;
    width: 300px;

    @media (min-width: 700px) {
      width: 500px;
    }

    @media (min-width: 775px) {
      width: 350px;
    }

    @media (min-width: 850px) {
      width: 600px;
    }
  }

  textarea {
    font-family: 'Open Sans', sans-serif;
  }

  input[type='submit'] {
    border: 0px;
    max-width: 30rem;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    margin: 16px 0;
  }
`;

export default function ContactPage({ pageContext, path }) {
  return (
    <ContactPageStyle>
      <MarkdownHeading>Say Hey 👋</MarkdownHeading>
      <form
        className="contact-form"
        name="contact"
        method="post"
        data-netlify-honeypot="bot-field"
        data-netlify-recaptcha="true"
        data-netlify="true"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <div className="input-container">
          {/* Replace eslint rule with the updated version https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md */}
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="input-container">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message"></textarea>
        </div>
        <div
          className="g-recaptcha"
          data-sitekey="6Ldv2fwUAAAAAAUgSJSKy1gHYHw0EH3OZhP8yImA"
        ></div>
        <div className="input-container">
          <input type="submit" value="Send Message" className="button" />
        </div>
      </form>
    </ContactPageStyle>
  );
}

// export const pageQuery = graphql``;
