import styled from "styled-components";

const StyledImage = styled.img`
  border-radius: 50%;

  @media (max-width: 1024px) {
    max-width: 768px;
    height: 400px;
    width: auto;
  }
  /* md */
  @media (max-width: 768px) {
    max-width: 640px;
    height: 400px;
    margin-top: 5rem;
    width: auto;
  }

  /* sm */
  @media (max-width: 640px) {
    max-width: 475px;
    height: 300px;
    width: auto;
    margin-top: 3rem;
  }
  /* xs */
  @media (max-width: 475px) {
    width: 100%;
    height: 300px;
    width: auto;
    margin-top: 1rem;
  }
`;
function Image() {
  return (
    <div>
      <StyledImage
        src="https://avatars.githubusercontent.com/u/149803435?s=400&u=4657ebe7011b87a96e0a06a04fc204aefba12e5c&v=4"
        alt=""
      />
    </div>
  );
}

export default Image;
