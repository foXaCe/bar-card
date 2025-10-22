# Translations / Traductions

Bar Card supports multiple languages for the UI editor.

## Supported Languages

- 🇬🇧 **English** (en) - Complete
- 🇫🇷 **French** (fr) - Complete
- 🇳🇴 **Norwegian Bokmål** (nb) - Complete

## Translation Files

Translation files are located in `src/localize/languages/`:
- `en.json` - English (default)
- `fr.json` - French
- `nb.json` - Norwegian Bokmål

## Translation Structure

Each translation file contains two main sections:

### `common`
Common messages used across the card:
- `version` - Version label
- `invalid_configuration` - Configuration error message
- `show_warning` - Warning display text
- `entity_not_available` - Entity unavailable message

### `editor`
UI editor labels and descriptions:

**Card Information:**
- `card_name` - Card display name
- `card_description` - Card description

**Sections:**
- `entities`, `entities_description` - Entities management
- `appearance`, `appearance_description` - Global appearance settings
- `bar`, `bar_description` - Bar configuration
- `value`, `value_description` - Value settings
- `card`, `card_description` - Card settings
- `positions`, `positions_description` - Element positioning
- `actions`, `actions_description` - User actions
- `severity`, `severity_description` - Severity thresholds
- `animation`, `animation_description` - Animation settings

**Field Labels:**
- `entity`, `direction`, `name`, `icon`, `height`, `width`, `color`
- `state`, `speed`, `from`, `to`, `header_title`, `columns`
- `decimal`, `min`, `max`, `target`, `unit_of_measurement`, `attribute`
- `limit_value`, `complementary`, `entity_row`, `stack_horizontal`

**Options:**
- Direction: `direction_right`, `direction_up`
- Position: `position_inside`, `position_outside`, `position_off`
- State: `state_auto`, `state_on`, `state_off`
- Animation: `animation_increase`, `animation_decrease`

## Adding a New Language

1. Create a new JSON file in `src/localize/languages/` (e.g., `de.json` for German)
2. Copy the structure from `en.json`
3. Translate all values (keep keys in English)
4. Import the new language in `src/localize/localize.ts`:
   ```typescript
   import * as de from './languages/de.json';

   const languages = {
     en,
     nb,
     fr,
     de, // Add your language
   };
   ```
5. Rebuild the project: `npm run build`

## Using Translations in Code

To use translations in TypeScript files:

```typescript
import { localize } from './localize/localize';

// Usage
const translatedText = localize(this.hass, 'editor.entity');
```

The `localize()` function automatically detects the user's Home Assistant language and falls back to English if the translation is not available.

## Translation Guidelines

- Keep translations concise and clear
- Maintain consistency with Home Assistant terminology
- Test translations in the UI to ensure they fit properly
- Use proper capitalization for your language
- Don't translate technical terms (e.g., "Home Assistant", code-specific values)

## Contributing Translations

To contribute a new language or improve existing translations:

1. Fork the repository
2. Add/modify translation files
3. Test the translations in Home Assistant
4. Submit a pull request with your changes

---

**Note:** The card will automatically use the language configured in Home Assistant. If a translation is missing for a specific key, it will fall back to the English version.
