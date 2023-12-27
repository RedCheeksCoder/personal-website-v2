import styled from "styled-components";
import Button from "../ui/Button";

const Container = styled.div`
  margin-top: 1rem;
  button {
    color: white;
    font-weight: 600;
    background-color: #27a645;
  }
`;

function Download() {
  return (
    <Container>
      <Button variation="primary" size="medium">
        Download CV
      </Button>
    </Container>
  );
}

export default Download;
