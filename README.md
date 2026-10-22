# dsh-deep-sea

A DSH side-panel mini-game: guide a whale girl through an endless deep sea.

## Gameplay

- You control a whale girl diving forever into the dark.
- Light bullets fire automatically toward the mouse cursor.
- Light is life: collect light motes and hit creatures to refill it.
- Occasional cameos and drops (light motes, rice, whale-fall items).

The game runs in a side panel rendered by the DSH client plugin runtime.

## Features

- Pure canvas rendering, no external assets required.
- Keyboard + mouse control.
- Light-budget loop: dive, fire, refill.
- Persistent high score (local storage).

## Installation

Copy this directory into your DSH plugins folder and enable it in
`cordis.patch.yml`:

```yaml
- id: dsh-deep-sea
  disabled: false
```

## License

MIT
