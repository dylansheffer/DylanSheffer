import React from 'react';
import styled from 'styled-components';

import { H } from './mdxComponents/Headings';

const ServiceCardStyle = styled.div`
  display: grid;
  margin: 3rem auto;
  width: 100%;
  grid-gap: 2rem;
  justify-items: center;
  align-items: center;
  text-align: center;
  svg {
    width: 20rem;
    height: 20rem;
  }

  @media (min-width: 650px) {
    grid-template-columns: 20rem auto;
    text-align: left;
  }
`;

export const ServiceCard = ({ icon: Icon, title, children, ...props }) => (
  <ServiceCardStyle {...props}>
    <Icon aria-hidden />
    <div className="content">
      <H as="h2">{title}</H>
      <div>{children}</div>
    </div>
  </ServiceCardStyle>
);
