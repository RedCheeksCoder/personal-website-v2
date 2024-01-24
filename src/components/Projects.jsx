import styled from "styled-components";
import { Payslip } from "./ui/Payslip";
import { RentCar } from "./ui/RentCar";
import { WorldMapper } from "./ui/WorldMapper";
import { EasyHire } from "./ui/EasyHire";

const StyledProjects = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Project = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-basis: 500px;
  gap: 0 2rem;
  margin: 2rem;
`;

const Details = styled.div`
  height: fit-content;
  width: 100%;
  max-width: 50rem;
  text-align: center;
  padding: 2rem;
  p {
    padding: 1rem;
    color: #949494;
  }
  h1 {
    text-align: center;
  }

  @media (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

const TechStack = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
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

const Url = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 2rem;
`;

function Projects() {
  return (
    <StyledProjects>
      <Project>
        <EasyHire />
        <Details>
          <h1>Easy hire Job Posting</h1>
          <p>
            EasyHire, an innovative online hiring platform, transforms job
            connections with Next JS, Tailwind, and MongoDB. Its user-friendly
            interface ensures a seamless experience, prioritizing privacy.
            Unique features like advanced search, insights into company culture,
            and universal job posting enhance flexibility. EasyHire's responsive
            design and secure MongoDB database empower users to control the
            hiring process efficiently, breaking traditional norms for employers
            and job seekers, promising innovation in hiring.
          </p>
          <TechStack>
            <img
              src="https://skillicons.dev/icons?i=react,tailwind,next,mongodb"
              alt="HTML and CSS icons"
              height={35}
            />
            <Url>
              <a href="https://youtu.be/MO8zP8ppbxU" target="blank">
                <img
                  src="/youtube-svgrepo-com.svg"
                  alt="Project demo in youtube"
                />
              </a>
              <a
                href="https://github.com/RedCheeksCoder/EasyHire"
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
              <a
                href="https://easy-hire.vercel.app/"
                target="_blank"
                rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-world-code"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M20.942 13.02a9 9 0 1 0 -9.47 7.964" />
                  <path d="M3.6 9h16.8" />
                  <path d="M3.6 15h9.9" />
                  <path d="M11.5 3a17 17 0 0 0 0 18" />
                  <path d="M12.5 3c2 3.206 2.837 6.913 2.508 10.537" />
                  <path d="M20 21l2 -2l-2 -2" />
                  <path d="M17 17l-2 2l2 2" />
                </svg>
              </a>
            </Url>
          </TechStack>
        </Details>
      </Project>
      <Project>
        <Payslip />
        <Details>
          <h1>Pay slip generator</h1>
          <p>
            Our SPA, powered by React JS and Styled Components, transforms pay
            slip distribution for TUP-Taguig employees. It integrates an
            Announcement Board for seamless communication, a Pay slip Preview
            for financial transparency, and user-controlled identity management.
            Administrators benefit from streamlined communication tools and
            efficient payroll management. Future updates promise enhanced
            statistical features.
          </p>
          <TechStack>
            <img
              src="https://skillicons.dev/icons?i=react,styledcomponents,supabase"
              alt="HTML and CSS icons"
              height={35}
            />
            <Url>
              <a
                href="https://www.youtube.com/watch?v=664tcu_Rn30&ab_channel=JohnBryanOdina"
                target="blank">
                <img
                  src="/youtube-svgrepo-com.svg"
                  alt="Project demo in youtube"
                />
              </a>
              <a
                href="https://github.com/RedCheeksCoder/TUPT-Payslip-generator"
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
              <a
                href="https://payslip-generator-umber.vercel.app/login"
                target="_blank"
                rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-world-code"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M20.942 13.02a9 9 0 1 0 -9.47 7.964" />
                  <path d="M3.6 9h16.8" />
                  <path d="M3.6 15h9.9" />
                  <path d="M11.5 3a17 17 0 0 0 0 18" />
                  <path d="M12.5 3c2 3.206 2.837 6.913 2.508 10.537" />
                  <path d="M20 21l2 -2l-2 -2" />
                  <path d="M17 17l-2 2l2 2" />
                </svg>
              </a>
            </Url>
          </TechStack>
        </Details>
      </Project>

      <Project>
        <RentCar />
        <Details>
          <h1>Car rental</h1>
          <p>
            "Rent Car," a frontend showcase on Vercel, uses React.js and Styled
            Components for a sleek platform. It prioritizes responsive design
            for a seamless user experience. The demo allows hassle-free
            exploration, excluding user authentication. The booking process is
            streamlined, with potential future features like a review system.
            Experience the frontend magic, share insights, and stay tuned for
            updates.
          </p>
          <TechStack>
            <img
              src="https://skillicons.dev/icons?i=react,styledcomponents"
              alt="HTML and CSS icons"
              height={35}
            />
            <Url>
              <a
                href="https://www.youtube.com/watch?v=4HklTLObGPI&t=16s&ab_channel=JohnBryanOdina"
                target="blank">
                <img
                  src="/youtube-svgrepo-com.svg"
                  alt="Project demo in youtube"
                />
              </a>
              <a
                href="https://github.com/RedCheeksCoder/RentCar"
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
              <a
                href="https://car-rental-iota-blond.vercel.app/"
                target="_blank"
                rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-world-code"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M20.942 13.02a9 9 0 1 0 -9.47 7.964" />
                  <path d="M3.6 9h16.8" />
                  <path d="M3.6 15h9.9" />
                  <path d="M11.5 3a17 17 0 0 0 0 18" />
                  <path d="M12.5 3c2 3.206 2.837 6.913 2.508 10.537" />
                  <path d="M20 21l2 -2l-2 -2" />
                  <path d="M17 17l-2 2l2 2" />
                </svg>
              </a>
            </Url>
          </TechStack>
        </Details>
      </Project>

      <Project>
        <WorldMapper />
        <Details>
          <h1>World Mapper</h1>
          <p>
            World Mapper, a modern travel documentation tool, uses React JS and
            the Leaflet library for a seamless single-page application
            experience. It goes beyond marking locations, allowing users to
            create personalized travel diaries with dates and notes. The sidebar
            lists visited cities, and an integrated Wikipedia feature enhances
            exploration. Json-live-server ensures local data access, and future
            updates may introduce sharing. World Mapper celebrates unique
            journeys, cities, and perspectives, inviting users to begin their
            travel documentation today.
          </p>
          <TechStack>
            <img
              src="https://skillicons.dev/icons?i=react,styledcomponents"
              alt="HTML and CSS icons"
              height={35}
            />
            <Url>
              <a
                href="https://www.youtube.com/watch?v=4bbkBYNJXTE&ab_channel=JohnBryanOdina"
                target="blank">
                <img
                  src="/youtube-svgrepo-com.svg"
                  alt="Project demo in youtube"
                />
              </a>

              <a
                href="https://github.com/RedCheeksCoder/World-Mapper-V2"
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
            </Url>
          </TechStack>
        </Details>
      </Project>
    </StyledProjects>
  );
}

export default Projects;
