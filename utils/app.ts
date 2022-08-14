import { ThemeManager } from './theme'
import { LanguageManager } from './lang'

export interface IApp {
  name: string
  author: {
    name: string
    link: string
  }
}

export function AppSetup() {
  // declare app information
  const app: IApp = {
    name: 'nattaliepiano',
    author: {
      name: 'vaniyokk',
      link: 'https://github.com/vaniyokk',
    },
  }
  useState('app', () => app)

  // use theme manager
  const themeManager = ThemeManager()

  // use language manager
  const languageManager = LanguageManager()

  // return
  return {
    app,
    themeManager,
    languageManager,
  }
}
