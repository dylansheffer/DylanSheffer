import React from 'react';
import styled from 'styled-components';

import { H } from './mdxComponents/Headings';

const ServiceCardStyle = styled.div`
  margin: 3rem auto;
  width: 100%;
  justify-items: center;
  align-items: center;
  text-align: center;

  h2 {
    margin: 0;
  }

  p {
    line-height: 2;
  }

  svg {
    width: 20rem;
    height: 20rem;
  }

  @media (min-width: 650px) {
    display: grid;
    grid-template-columns: 20rem auto;
    grid-template-areas: 'icon content';
    grid-gap: 5rem;
    text-align: left;

    .icon {
      grid-area: icon;
    }

    .content {
      grid-area: content;
    }
  }
`;

export const ServiceCard = ({ icon: Icon, title, children, ...props }) => (
  <ServiceCardStyle {...props}>
    <Icon className="icon" aria-hidden />
    <div className="content">
      <H as="h2">{title}</H>
      <div>{children}</div>
    </div>
  </ServiceCardStyle>
);
