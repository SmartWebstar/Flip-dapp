import React from "react";


 interface ThemeContext {
    mode: string,
    toggle (): void;
  }

  interface Props {
    children: JSX.Element
  }

const defaultMode = 'light';

export const ManageThemeContext: React.Context<ThemeContext> = React.createContext({
  mode: defaultMode,
  toggle: () => { }
});

export const useTheme = () => React.useContext(ManageThemeContext);

const ThemeManager = ({ children }: Props) => {

  const [themeState, setThemeState] = React.useState({
    mode: defaultMode
  });

  const toggle = (): void => {
    setThemeState({ mode: (themeState.mode === 'light' ? `dark` : `light`) });
  }

  return (
    <ManageThemeContext.Provider value={{
      mode: themeState.mode,
      toggle: toggle
    }}>
      {children}
    </ManageThemeContext.Provider>
  );
}

export default ThemeManager