import { FC, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../themes/GlobalStyle';
import { defaultTheme } from '../themes/mainTheme';

interface MainTemplateProps {
  children: ReactNode;
}

const MainTemplate: FC<MainTemplateProps> = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default MainTemplate;
