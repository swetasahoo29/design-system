# Design System

This is a boilerplate of a design system generated by `@genesisx/design-system`. Learn more about it on [npm](https://www.npmjs.com/package/@genesisx/design-system) or the [Genesis docs app](https://genesisx.netlify.app/docs/design-system).

## UI Library

Checkout the UI library in `libs/ui`. It follows [Atomic design](https://bradfrost.com/blog/post/atomic-web-design/) (atoms > molecules > organisms > templates > pages) out of the box.
Start creating your components now using the below command:

```sh
pnpm generate
```

## Resources

### Nx

- [Nx Releases](https://nx.dev/features/manage-releases)
- [Automatic Versioning](https://nx.dev/recipes/nx-release/automatically-version-with-conventional-commits)

### Chromatic

- [Deploying Storybook to Chromatic](https://www.youtube.com/watch?v=2tqRpBcV8ug&t=18s)
- [Testing and Reviewing UI using Chromatic](https://www.youtube.com/watch?v=zhrboql8UuU)


## Roadmap
 
- [x] universal-devkit
- [x] private shared packages for tsup and tsconfig
- [x] chromatic workflow
- [x] update documentation

- [ ] ci/cd (including publish workflow) - 1d
- [ ] replace jest with vitest for unit testing - 1/2d
- [ ] playwright for e2e testing - 1d
- [ ] improving default components - 1/4d
- [ ] add slot component and refactor existing components to use slot - 1/4d
- [ ] improve design tokens solution - 1/2d
- [ ] theme switching, theme provider (radix) - 1d
- [ ] fix storybook's dark mode - 1/2d
- [ ] style-dictionary - 1d

- [ ] include storybook to nx tasks by making it a workspace (not feasible) - 1/4d
- [ ] change all components' build tool from tsup to vite - 1/4d

- [ ] playroom (not feasible as of now)
