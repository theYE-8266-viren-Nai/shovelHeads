import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  padding: 3rem 1.5rem;
  background-color: #f9fafb; /* bg-background */
  color: #1f2937; /* text-text-primary */

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 50%;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
`;

const TextContainer = styled.div`
  width: 100%;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Heading = styled.h2`
  font-size: 2.25rem;
  font-weight: bold;
  color: #4b5e9a; /* text-shovel-head-main-color */
`;

const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.75rem;
  color: #6b7280; /* text-text-secondary */
`;

const SubHeading = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #4b5e9a; /* text-shovel-head-main-color */
`;

const Ourstory = () => {
  return (
    <Section>
      {/* Left - Image */}
      <ImageContainer>
        <Image
          src="../../images/ourstory.jpg"
          alt="Our Story"
        />
      </ImageContainer>

      {/* Right - Text */}
      <TextContainer>
        <Heading>Our Story</Heading>
        <Paragraph>
          In the gritty, rain-soaked streets of Yangon, where the weather bites with a relentless edge, two teenage rebels fueled by the roaring grunge revolution of the 90s banded together.
        </Paragraph>
        <Paragraph>
          Led by the fierce vocals of Layate Min Htet, they forged Shovelheads—a name that screams defiance. In 2024, with the lineup still a wild card, Layate and bassist Htet Aung unleashed their untamed creativity, hammering out drums, guitar, bass, and vocals with raw intensity.
        </Paragraph>
        <SubHeading>hello</SubHeading>
      </TextContainer>
    </Section>
  );
};

export default Ourstory;