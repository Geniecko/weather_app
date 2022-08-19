import MainTemplate from './templates/MainTemplate';
import MainView from './views/MainView';

const App = () => {
  return (
    <MainTemplate>
      <div className='app-overlay'>
        <MainView />
      </div>
    </MainTemplate>
  );
};

export default App;
