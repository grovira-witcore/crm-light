export function getDefaultI18n() {
  const navigatorLanguage = navigator.language || navigator.userLanguage;
  switch (navigatorLanguage.substring(0, 2)) {
    case 'en': {
      return {
        code: 'En',
        dateFormat: 'mm/dd/yyyy',
        moneySymbol: '$'
      }
    }
    case 'sp': {
      return {
        code: 'Sp',
        dateFormat: 'dd/mm/yyyy',
        moneySymbol: '$'
      }
    }
    default: {
      return {
        code: 'En',
        dateFormat: 'mm/dd/yyyy',
        moneySymbol: '$'
      }
    }
  }
}
