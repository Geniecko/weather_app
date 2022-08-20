import MainTemplate from './templates/MainTemplate';
import styled from 'styled-components/macro';
import Routes from './router/Routes';

const App = () => {
  return (
    <MainTemplate>
      <div className='app-overlay'>
        <Container>
          <Routes />
        </Container>
      </div>
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
