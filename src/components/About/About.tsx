import * as React from "react"
import { useContext } from "react"
import styled, { ThemeContext } from "styled-components"
import { Paragraph } from "../Paragraph"
// @ts-ignore
import ProfilePic from "../../images/ProfilePic.png"
import { H2 } from "../Headers/Headers"
import { Flex } from "@rebass/grid"

const About = () => {
  const theme = useContext(ThemeContext)

  return (
    <section id="About">
      <H2 className="numbered-header after-single-line">About</H2>
      <MediaFlex>
        <Paragraph fontSize={theme.typography.fontSizes.size14}>
          Hello, my name is Jonathan! I come from a mixed background — I was
          born in the United States but my father is from the Netherlands and my
          mother is from Egypt. Growing up I moved around a lot, living in five
          different countries by the time I finished school.
          <br></br>
          <br></br>
          In July of 2020, I graduated with an integrated masters in mechanical
          engineering from the University of Bath receiving first-class honours
          — my passion, however, lies in software. Programming gives me the
          ability to bring my ideas to life. I find it to be a far more exciting
          field than mechanical engineering, which often moves more slowly.
          <br></br>
          <br></br>I am currently working as a software engineer at Acre
          Software, an all-in-one mortgage platform for brokers and customers.
          Outside of work, I love exercising and staying healthy — I am an avid
          runner and sports player. I also love to read, and work on
          engineering-related side projects.
        </Paragraph>
        <Image src={ProfilePic} />
      </MediaFlex>
    </section>
  )
}

const MediaFlex = styled(Flex)`
  flex-direction: row;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacers.size32};
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const Image = styled.img`
  max-width: 300px;
  width: 100%;
`

export default About
