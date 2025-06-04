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
