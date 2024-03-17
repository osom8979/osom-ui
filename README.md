# osom-ui

[![NPM Version](https://img.shields.io/npm/v/osom-ui?style=flat-square)](https://www.npmjs.com/package/osom-ui)
[![GitHub](https://img.shields.io/github/license/osom8979/osom-ui?style=flat-square)](https://raw.githubusercontent.com/osom8979/osom-ui/master/LICENSE)

## Overview

I'm using [daisyUI](https://daisyui.com/), but I'm having some issues.
daisyUI completes components with a combination of CSS classes. (e.g. `btn btn-outline btn-primary`)
However, if you use the `@apply` directive in a [css module](https://github.com/css-modules/css-modules), the class name will disappear.
This causes the class name to be exposed to HTML.

```tsx
<button className={styles.classA + ' btn-outline ..'} />
```

This acts as a factor that hinders readability.

I advocate splitting HTML/JS/CSS as much as possible from a software architecture perspective.
Therefore, we want to create a [tailwind](https://tailwindcss.com/) component that can be used in CSS modules.

## Project rule

* Do not use class selectors like `.classA > .classB`.
* This causes problems when using the `@apply` directive in CSS modules.
* It is assumed that the `@apply` directive is actively used in CSS modules.
* If possible, use selectors that use basic HTML **tags** or **attributes**.
* If there is no appropriate HTML attribute, use the `data-*` attribute.

## Usage

Install package

```shell
npm install osom-ui
```

Apply the plugin to the `tailwind.config.js` file

```javascript
module.exports = {
  plugins: [require('osom-ui')],
};
```

Please refer to the [documentation](https://osom8979.github.io/osom-ui/) for additional information.

## Scripts

```shell
## Setup Yarn v2 (Berry)
./yarn set version berry

## Compiles and minifies for production
./yarn build:tailwind

## Style check
./yarn style

## Lints and fixes files
./yarn lint

## Run your unit tests
yarn test
```

## License

See the [LICENSE](./LICENSE) file for details. In summary,
**osom-ui** is licensed under the **MIT license**.
