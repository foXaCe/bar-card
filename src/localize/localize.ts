import * as en from './languages/en.json';
import * as nb from './languages/nb.json';
import * as fr from './languages/fr.json';
import { HomeAssistant } from 'custom-card-helpers';

const languages = {
  en,
  nb,
  fr,
};

export function localize(hass: HomeAssistant | undefined, string: string, search: string = '', replace: string = '') {
  let lang = 'en';
  if (hass?.locale.language) {
    lang = hass?.locale.language;
  }
  const section = string.split('.')[0];
  const key = string.split('.')[1];

  let tranlated: string;

  try {
    tranlated = languages[lang][section][key];
    if (tranlated === undefined) tranlated = languages['en'][section][key];
  } catch {
    tranlated = languages['en'][section][key];
  }

  if (search !== '' && replace !== '') {
    tranlated = tranlated.replace(search, replace);
  }
  return tranlated;
}
