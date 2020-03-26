# Baseline Icons

[![CI Workflow](https://github.com/ableco/baseline-icons/workflows/CI/badge.svg)](https://github.com/ableco/baseline-icons/actions?workflow=CI)
[![Publish Workflow](https://github.com/ableco/baseline-icons/workflows/Publish/badge.svg)](https://github.com/ableco/baseline-icons/actions?workflow=Publish)
[![Maintainability](https://api.codeclimate.com/v1/badges/dc8ca837f0443633fda0/maintainability)](https://codeclimate.com/repos/5d965fea478d1f6328000720/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/dc8ca837f0443633fda0/test_coverage)](https://codeclimate.com/repos/5d965fea478d1f6328000720/test_coverage)
![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=ableco/baseline-icons&identifier=211389596)

## How to Use

Configure yarn to use Able's registry.

```bash
yarn config set registry https://registry.able.co
```

> For npm or pnpm check more at https://registry.able.co.

Once you have done that install it as a normal npm package.

```bash
yarn add @baseline/icons
# npm i @baseline/icons
```

Once it's installed in your project import the icon you want to use.

```tsx
import { Lock } from "@baseline/icons";
```

And render it as a normal React component.

```tsx
<Lock className="w-4 h-4" />
```

All icons receive a single `className` prop which could be:

- A string of classes separated by spaces
- An object with the classes as keys and a boolean as value, falsy keys will not be added.

## Development Setup

1. Clone the repository.
2. Install the dependencies using `yarn install` command, or just `yarn`.
3. Add the new icon in `src/index.tsx`, remember to test everything.
4. When you are done, run the tests using the `yarn test` command.
