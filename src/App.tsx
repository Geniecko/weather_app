import MainTemplate from './templates/MainTemplate';
import styled from 'styled-components/macro';
import Routes from './router/Routes';

const App = () => {
  return (
    <MainTemplate>
      <Container>
        <Routes />
      </Container>
    </MainTemplate>
  );
};

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 24px 16px ;
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media (min-width: 576px) {
    padding: 24px 20px;
  }

  @media (min-width: 996px) {
    padding: 24px;
  }
`;

export default App;
