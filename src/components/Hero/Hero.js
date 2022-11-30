import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        My Personal Portfolio.
      </SectionTitle>
      <SectionText>
        Hey👋🏻, My Name is Mohit an India Based Frontend Developer. 
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;