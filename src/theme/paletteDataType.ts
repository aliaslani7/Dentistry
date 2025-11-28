
export interface headerPaletteType {
  headerIcon: string;
  headerText: string;
  headerBackground: string;
}

export interface modalPaletteType {
  main: string;
  background: string;
}

export interface themeModePaletteType {
  header: headerPaletteType;
  modal: modalPaletteType;
}

export interface customPaletteType {
  dark: themeModePaletteType;
  light: themeModePaletteType;
}
