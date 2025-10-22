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

  let translated: string;

  try {
    translated = languages[lang][section][key];
    if (translated === undefined) translated = languages['en'][section][key];
  } catch {
    translated = languages['en'][section][key];
  }

  if (search !== '' && replace !== '') {
    translated = translated.replace(search, replace);
  }
  return translated;
}
