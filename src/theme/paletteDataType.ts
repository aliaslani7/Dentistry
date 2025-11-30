export interface headerPaletteType {
  headerIcon: string;
  headerText: string;
  headerBackground: string;
}

export interface accordionPaletteType {
  descriptionBG: string;
  background: string;
}

export interface blogPaletteType {
  textBlog: string;
  listBG: string;
}

export interface themeModePaletteType {
  header: headerPaletteType;
  accordion: accordionPaletteType;
  blog: blogPaletteType;
}

export interface customPaletteType {
  dark: themeModePaletteType;
  light: themeModePaletteType;
}
export interface blogPaletteType {
  textBlog: string;
  listBG: string;
}
