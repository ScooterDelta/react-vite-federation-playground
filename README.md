# React Vite Federation (Micro Frontends) Playground

This repo is for experimenting and creating a basic Proof of Concept (PoC) of utilizing Module Federation in a Vite project, with React as the rendering framework.

The project is currently configured as a [Monorepo](https://monorepo.tools/) to accelerate initial development and experimentation, however this will likely be split into a Polyrepo when a full production implementation is created.

## How does it Work?

## How to consume this playground?

## Getting Started

## Tools Overview

## Findings and Concerns

### Dev Mode and Development Experience

### Styling

### Routing and Lazy Evaluation

### Server-Side Rendering (SSR) and Edge-Side Rendering (ESR)

## Roadmap

- [x] Configure and integrate sample host application and multiple micro-applications.
- [x] Configure best practices development tooling (VSCode, ESLint, Prettier, Markdownlint, Editor Config).
- [x] Set up Client Side Routing using [react-router](https://reactrouter.com/en/main).
  - [x] Allow routes to be configured by client Micro Frontend Applications (MFE).
  - [x] Add deeply nested routes from Micro Applications that can be navigated by host (see `mfe-one`).
- [x] Set up CSS Framework to experiment with styling interactions and side effects (using [tailwindcss](https://tailwindcss.com/) and [DaisyUI](https://daisyui.com)).
- [x] Enable Debug configuration for UI Applications with VSCode (one-click development experience).
  - [x] Enable source maps while working locally to enable client side debugging across all apps.
  - [x] Enable file watching across all Micro Applications for easier development experience.
- [x] Set up inter-application communication via a simple event bus (using [browser document API](https://developer.mozilla.org/en-US/docs/Web/API/Document) and [event listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget)).
- [ ] Docker Container for micro frontend applications and `docker-compose` configuration to allow easy development of Micro Applications in isolated repositories

### Stretch Goals

- [ ] Set up SSR or Edge SSR for initial page load and router initialization support
- [ ] Set up MonoRepo supporting / restrictive tools (e.g. `eslint-plugin-import` and `eslint-plugin-boundaries`)
- [ ] Set up dynamic routing support - loading Micro Applications from API Endpoint registry.
- [ ] Create plugin based interface for registering applications ([A Plugin-Based Frontend using Module Federation](https://malcolmkee.com/blog/a-plugin-based-frontend-with-module-federation/))
