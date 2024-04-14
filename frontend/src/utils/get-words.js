import translationsEn from '../translations/en.json';
import translationsSp from '../translations/sp.json';

export const getWords = function (code) {
  switch (code) {
    case 'En': {
      return translationsEn;
    }
    case 'Sp': {
      return translationsSp;
    }
    default: {
      return {};
    }
  }
}

