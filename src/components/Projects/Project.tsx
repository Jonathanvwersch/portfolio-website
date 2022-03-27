import * as React from "react"
import { useContext, useState } from "react"
import styled, { ThemeContext } from "styled-components"
import { Button, H3, IconWrapper } from ".."
import { SIZES } from "../../definitions"
import { CloseIcon } from "../../icons"
import { navigate } from "gatsby"

type Props = {
  title: string
  bulletPoints: string[]
  skills: string[]
  image: any
}

const Project = ({ title, bulletPoints, skills, image }: Props) => {
  const theme = useContext(ThemeContext)
  const [showDescription, setShowDescription] = useState<boolean>(false)

  return (
    <DescriptionWrapper image={image}>
      {!showDescription && (
        <HeaderWrapper>
          <H3 fontColor={theme.colors.fontHighlight} styledAs="h6">
            {title}
          </H3>
        </HeaderWrapper>
      )}

      {!showDescription && (
        <LearnMore>
          <Button handleClick={() => setShowDescription(true)}>
            Learn more
          </Button>
        </LearnMore>
      )}
      {showDescription && (
        <IconWrapper
          styles={{
            position: "absolute",
            top: theme.spacers.size8,
            right: theme.spacers.size8,
            zIndex: 1,
          }}
          handleClick={() => setShowDescription(false)}
        >
          <CloseIcon size={SIZES.LARGE} color={theme.colors.fontColor} />
        </IconWrapper>
      )}
      {showDescription && (
        <Description>
          <H3 styledAs="h5">Dekked</H3>
          <BulletPointsWrapper>
            {bulletPoints.map(b => (
              <li key={b}>{b}</li>
            ))}
          </BulletPointsWrapper>
          <Skills>
            {skills.map(s => (
              <li key={s}>{s}</li>
            ))}
          </Skills>
          {/* <Button handleClick={() => navigate(title.toLowerCase())}>
            Learn even more
          </Button> */}
        </Description>
      )}
    </DescriptionWrapper>
  )
}

const Skills = styled.ul`
  display: flex;
  flex-wrap: wrap;
  font-family: ${({ theme }) => theme.typography.fontFamilyMono};
  position: relative;
  font-size: ${({ theme }) => theme.typography.fontSizes.size14};
  margin-bottom: ${({ theme }) => theme.spacers.size16};

  li:nth-child(odd) {
    color: ${({ theme }) => theme.colors.highlightFont};
  }

  font-family: ${({ theme }) => theme.typography.fontFamilyMono};

  z-index: 2;
  margin: 25px 0px 10px;
  padding: 0px;
  list-style: none;
  li {
    white-space: nowrap;
    margin: 0px ${({ theme }) => theme.spacers.size8}
      ${({ theme }) => theme.spacers.size4} 0px;
  }
`

const BulletPointsWrapper = styled.ul`
  padding-left: 0px;
  margin-top: ${({ theme }) => theme.spacers.size20};

  li {
    margin-bottom: ${({ theme }) => theme.spacers.size8};
    font-size: ${({ theme }) => theme.typography.fontSizes.size16};
    display: flex;
    flex-direction: row;
    list-style: none;

    :before {
      margin-right: ${({ theme }) => theme.spacers.size12};
      content: "▹";
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`

const DescriptionWrapper = styled.div<{ image: any }>`
  background: ${({ theme }) => theme.colors.backgrounds.lightbox};
  min-height: 400px;
  color: ${({ theme }) => theme.colors.fontColor};
  position: relative;
  background-image: ${({ image }) => `url(${image})`};
  border-radius: ${({ theme }) => theme.sizes.borderRadius[SIZES.MEDIUM]};
  background-size: cover;

  @media screen and (max-width: 768px) {
    li {
      font-size: ${({ theme }) => theme.typography.fontSizes.size12}!important;
    }
  }
`

const Description = styled.div`
  background: ${({ theme }) => theme.colors.backgrounds.lightbox};
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  padding: ${({ theme }) => theme.spacers.size32};
`

const HeaderWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-left: none;
  border-top: none;
  padding: ${({ theme }) => theme.spacers.size16};
  background: ${({ theme }) => theme.colors.backgrounds.lightbox};
  border-bottom-right-radius: ${({ theme }) =>
    theme.sizes.borderRadius[SIZES.MEDIUM]};
`

const LearnMore = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  border: none;
  border-top-left-radius: ${({ theme }) =>
    theme.sizes.borderRadius[SIZES.MEDIUM]};
  padding: ${({ theme }) => theme.spacers.size16};
  background: ${({ theme }) => theme.colors.backgrounds.lightbox};
`

const ImageWrapper = styled.div`
  width: 100%;
  vertical-align: middle;
  position: relative;
`

const Image = styled.img`
  width: 100%;
  border-radius: ${({ theme }) => theme.sizes.borderRadius[SIZES.MEDIUM]};
`

export default Project