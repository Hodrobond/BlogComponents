export interface ThemeInterface {
  primaryColor?: string
  primaryContentBackground?: string
  primaryText?: string
  primaryLinkColor?: string
  primaryLinkVisitedColor?: string
}

const aqua: ThemeInterface = {
  primaryColor: '#7ED6DF',
  primaryContentBackground: '#3AAFA9',
  primaryText: '#FEFFFF',
  primaryLinkColor: '#A4DBEB',
  primaryLinkVisitedColor: '#551A8B',
};

const midnight: ThemeInterface = {
  primaryColor: '#181818',
  primaryContentBackground: '#3f3f3f',
  primaryText: '#00FF41',
  primaryLinkColor: '#008F11',
  primaryLinkVisitedColor: '#551A8B',
};

export interface ThemeCollection {
  [key: string]: ThemeInterface
}

const themes: ThemeCollection = {
  aqua,
  midnight,
};

export default themes;
