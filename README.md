# Introduction

This was a fun task to get on with, I hope you can see I laid the ground works for something that could be extendable in the future. This is the first tech test I have done in a number of years, and I really enjoyed getting on with it.

## How to run

Commands:

Build: `docker build -t weather-activity .`
Run: `docker run -p 3000:3000 weather-activity`

### Development

Commands:

NVM: `nvm install && nvm use`
NPM: `npm install`
Start: `npm run dev`
Lint: `npm run lint`
Build: `npm run build`
Start: `npm start`
Test: `npm test`

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

## Improvements

I could add mock service worker handlers to the storybook tests to test the response of the graphql endpoint

I could add tests for the API

I could use date-fns or Intl API to format the date better

## AI (Chat GPT)

I used Chat GPT to explore ideas and different ways of tackling the problem.

I asked for recommendations of libraries but ultimately did some research on Google and looked through documentation (Ant Design) before making a decision.

I used libraries that I know well (react-query) rather than suggestions from Chat GPT (axios).

I was able to write in depth prompts detailing what I wanted for unit tests, but updated them to reflect my style.

I knew what I needed to do to tackle some issues (window.matchMedia mocking, query wrapper for unit tests), but was able to speed up delivery of that using Chat GPT.

I was able to build out the boilerplate config (of which I could have used another repo from my machine), and then adjust as I saw fit.

I had issues with next js struggling with the test files I wrote despite me ignoring them, and found Chat GPT very unhelpful in this, so using my own deductive skills and experience helped me to tackle down a weird error (node module importing get in a set js file "could not find get").

I used Chat GPT for investigating bugs and suggesting possible solutions - it has its drawbacks especially around version of software and hallucinating ideas.

## Thank you

Thank you for your time and considering me for this position.

_The Readme was *not* written by an AI :)_
