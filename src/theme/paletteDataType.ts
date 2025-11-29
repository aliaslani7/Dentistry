export interface headerPaletteType {
  headerIcon: string;
  headerText: string;
  headerBackground: string;
}

export interface accordionPaletteType {
  descriptionBG: string;
  background: string;
}

export interface themeModePaletteType {
  header: headerPaletteType;
  accordion: accordionPaletteType;
}

export interface customPaletteType {
  dark: themeModePaletteType;
  light: themeModePaletteType;
}
