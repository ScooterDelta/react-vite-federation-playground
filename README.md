# react-vite-federation-playground

A playground for experiments with React 18+ Native Federation using Vite.

This project is configured as a mono repo, but configuration should be kept specific to different modules - this 

## Goals

- Set up a micro frontend host supporting React with Vite
    - The host should supply a rendered header menu
    - The host should provide top level routing
- Set up two micro frontend clients supoprting React with Vite
- Set up best practices for general purpose tools
    - ESLint, Vite, React Router, React Query, Prettier, Editor Config
- Set up a Docker Container for the root application than can be easily "run" by the clients for debugging.
    - Focus on a clean developer experience for independent UI apps outside of the container.