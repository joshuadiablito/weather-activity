# Introduction

This was a fun task to get on with, I hope you can see I laid the ground works for something that could be extendable in the future. This is the first tech test I have done in a number of years, and I really enjoyed getting on with it.

## Architecture

I believe architecture shouldn't have too much upfront design at the start of a project (within reason of course!) - I have worked in teams where we committed to a specific architecture up front and it cost us time later down the line and we couldn't get away from it. By having everything in one repo and following guidelines from Next.js we keep it simple in the short term and allow for further changes down the line.

I tried to use techniques that I have known, adopted and used over the last few years.
Notably:
- how I composed the storybook files
- using BDD in the unit tests
- allowing some play tests within storybook to compliment the unit tests

I have used Next.js over the years and I was happy to use that again, I enjoy it as a framework, and graphql

I chose to rank the activities on the frontend rather than the backend, so that the backend could be in control of getting the data, and the frontend could decide on what that data means for the UI.

I chose to use Ant Design as a component library to make things look a little nicer, without too much effort.

I didn't use react-hook-form or similar for the state management of the form as we are only dealing with one input.

I chose to save the value in the query string as when I was testing I wanted an easier way to refresh the form with the city value I placed in it.

I debounced the input value so we make fewer requests to the backend.

I used hooks to make the UI more seamless, and to allow for better unit testing.

## 🛡️ Architecture Overview

This project is a scalable and maintainable **Next.js** application that ranks the suitability of various activities (e.g. skiing, surfing, sightseeing) in a selected city over the next 7 days, based on weather data from Open-Meteo.

### 🔧 Tech Stack

| Area                 | Stack/Tool                       | Rationale                                                                |
| -------------------- | -------------------------------- | ------------------------------------------------------------------------ |
| **Framework**        | Next.js (App Router)             | File-system routing, SSR/ISR capabilities, scalable structure            |
| **UI Components**    | Ant Design + custom components   | Clean baseline design, easily extendable with minimal boilerplate        |
| **Data Fetching**    | React Query + GraphQL API        | Normalized caching and declarative fetching logic                        |
| **API Layer**        | Custom GraphQL server (Next API) | Abstracts Open-Meteo’s REST API and centralizes business logic           |
| **State Derivation** | Custom ranking logic (pure TS)   | Evaluates and scores weather conditions dynamically for activity ranking |
| **Testing**          | Jest + Testing Library           | Unit-tested hooks and logic using BDD-style specs                        |
| **Storybook**        | Storybook v9 with CSF3 & play    | Isolated UI development with automated accessibility & interaction tests |
| **Tooling**          | ESLint, Prettier, TypeScript     | Strong type safety, code consistency, and maintainability                |

---

## 🧠 AI-Assisted Workflow

AI (via ChatGPT) was used throughout the development process as a **productivity accelerator**, not a code generator.

### How AI helped:

- ✅ **Boilerplate & setup**: Helped configure Storybook with Next.js, React Query, Jest, and TS paths quickly and accurately.
- ✅ **Iteration & Debugging**: Provided explanations for specific errors (e.g. Storybook ERESOLVE, missing QueryClientProvider) with direct, relevant fixes.
- ✅ **Test writing**: Assisted with writing **BDD-style unit tests** for React Query hooks and custom debouncing logic.
- ✅ **Code Review**: Helped refactor and clarify the logic of the ranking algorithm, ensuring it remained flexible and easily testable.
- ✅ **Design choices**: Gave alternatives for component libraries, architecture trade-offs (e.g. REST vs GraphQL), and performance considerations.

All AI suggestions were critically reviewed and integrated with careful consideration of context, quality, and maintainability.
