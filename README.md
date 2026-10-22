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


## Provenance & Takedown

This repository is a collection of utilities and notes accumulated over time.
Some code or ideas may share ancestry with projects we have read, used, or been
inspired by — inevitably so, and we cannot always reconstruct the exact
provenance of every line. Where a source is known, it is credited
(see Acknowledgements).

If you believe material here reproduces your work without attribution or
permission, please open an issue or contact the maintainer. We will verify the
claim and then either add proper attribution, obtain a license, or remove the
affected material promptly. We would rather take it down than misattribute it.

- Issues: <https://github.com/xiyaosuimeng/dsh-deep-sea/issues>

## License

MIT
