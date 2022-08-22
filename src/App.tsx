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
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

export default App;
