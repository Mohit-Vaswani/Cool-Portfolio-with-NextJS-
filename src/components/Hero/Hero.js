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
        Hey👋🏻, My Name is Mohit a freelance developer specialized in both front-end and back-end web development.
      </SectionText>
      <Button onClick={()=>window.location = 'https://mohitvaswani.netlify.app/'} >Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;