import styled from "styled-components";

const maxWidths = {
  lg: "1024px",
  md: "768px",
  sm: "640px",
  xs: "475px",
};

const StyledImage = styled.img`
  border-radius: 50%;
  max-width: 100%;
  height: 35rem;

  @media (max-width: ${maxWidths.lg}) {
    max-width: ${maxWidths.md};
    height: 200px;
  }

  @media (max-width: ${maxWidths.xs}) {
    width: 100%;
  }
  animation: photo 2s ease-in-out infinite;
  animation-delay: 1s;
  @keyframes photo {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-22px);
    }

    100% {
      transform: translateY(0);
    }
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Image() {
  return (
    <Container>
      <StyledImage
        src="https://avatars.githubusercontent.com/u/149803435?s=400&u=4657ebe7011b87a96e0a06a04fc204aefba12e5c&v=4"
        alt="User Avatar"
      />
    </Container>
  );
}

export default Image;
