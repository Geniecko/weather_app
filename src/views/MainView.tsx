import { FC } from 'react';
import styled from 'styled-components/macro';
import SearchBar from '../components/SearchBar/SearchBar';

const MainView: FC = () => {
  return (
    <Container>
      <SearchBar />
    </Container>
  );
};

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 24px;
`;

export default MainView;
