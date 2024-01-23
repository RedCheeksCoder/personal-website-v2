import styled from "styled-components";
import { Payslip } from "./ui/payslip";
import { RentCar } from "./ui/RentCar";
import { WorldMapper } from "./ui/WorldMapper";

const StyledProjects = styled.div`
  display: grid;
  max-width: 100vw;
  height: auto;
`;

const Container = styled.div`
  height: auto;
  max-width: 90rem;
  align-items: center;
  padding: 2rem;
  margin: 3rem;
`;

const Project = styled.div`
  margin-top: 5rem;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 3rem;
  box-shadow: -15px -1px 52px -15px rgba(190, 190, 190, 1);
  -webkit-box-shadow: -15px -1px 52px -15px rgba(190, 190, 190, 1);
  -moz-box-shadow: -15px -1px 52px -15px rgba(190, 190, 190, 1);
  padding: 3rem;
`;

const Details = styled.div`
  padding: 1rem;
  height: 100%;
  p {
    padding: 1rem;
    color: #949494;
  }
  h1 {
    padding-left: 1rem;
  }
`;

const TechStack = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
  a {
    cursor: pointer;
    &:hover {
      color: #00d7fe;
      transition: all 0.23s ease-in-out;
    }
  }
`;

function Projects() {
  return (
    <StyledProjects>
      <Container>
        <Project>
          <Payslip />
          <Details>
            <h1>Easy hire Job Posting</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate eligendi in doloremque sed voluptatem sapiente minima
              eius sit maxime repellat.
            </p>
            <TechStack>
              <img
                src="https://skillicons.dev/icons?i=react,tailwind,next,mongodb"
                alt="HTML and CSS icons"
                height={35}
              />
              <a href="https://youtu.be/MO8zP8ppbxU" target="blank">
                <img
                  src="/youtube-svgrepo-com.svg"
                  alt="Project demo in youtube"
                />
              </a>
              <a
                href="https://github.com/RedCheeksCoder"
                target="_blank"
                rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-github"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
              </a>
            </TechStack>
          </Details>
        </Project>
        <Project>
          <Payslip />
          <Details>
            <h1>Pay slip generator</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate eligendi in doloremque sed voluptatem sapiente minima
              eius sit maxime repellat.
            </p>
            <TechStack>
              <img
                src="https://skillicons.dev/icons?i=react,styledcomponents,supabase"
                alt="HTML and CSS icons"
                height={35}
              />
              <a
                href="https://www.youtube.com/watch?v=664tcu_Rn30&ab_channel=JohnBryanOdina"
                target="blank">
                <img
                  src="/youtube-svgrepo-com.svg"
                  alt="Project demo in youtube"
                />
              </a>
              <a
                href="https://github.com/RedCheeksCoder"
                target="_blank"
                rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-github"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
              </a>
            </TechStack>
          </Details>
        </Project>

        <Project>
          <RentCar />
          <Details>
            <h1>Car rental</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate eligendi in doloremque sed voluptatem sapiente minima
              eius sit maxime repellat.
            </p>
            <TechStack>
              <img
                src="https://skillicons.dev/icons?i=react,styledcomponents"
                alt="HTML and CSS icons"
                height={35}
              />
              <a
                href="https://www.youtube.com/watch?v=4HklTLObGPI&t=16s&ab_channel=JohnBryanOdina"
                target="blank">
                <img
                  src="/youtube-svgrepo-com.svg"
                  alt="Project demo in youtube"
                />
              </a>
              <a
                href="https://github.com/RedCheeksCoder"
                target="_blank"
                rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-github"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
              </a>
            </TechStack>
          </Details>
        </Project>

        <Project>
          <WorldMapper />
          <Details>
            <h1>World Mapper</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate eligendi in doloremque sed voluptatem sapiente minima
              eius sit maxime repellat.
            </p>
            <TechStack>
              <img
                src="https://skillicons.dev/icons?i=react,styledcomponents"
                alt="HTML and CSS icons"
                height={35}
              />
              <a
                href="https://www.youtube.com/watch?v=4bbkBYNJXTE&ab_channel=JohnBryanOdina"
                target="blank">
                <img
                  src="/youtube-svgrepo-com.svg"
                  alt="Project demo in youtube"
                />
              </a>

              <a
                href="https://github.com/RedCheeksCoder"
                target="_blank"
                rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-brand-github"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
              </a>
            </TechStack>
          </Details>
        </Project>
      </Container>
    </StyledProjects>
  );
}

export default Projects;
