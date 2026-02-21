# User Explorer App

## Features
- Browse large list of users from public API
- Search users by name
- Infinite scrolling pagination
- Redux Toolkit for global state
- Persistent data using AsyncStorage
- Handles app background & restart state
- Clean, scalable architecture

## Tech Stack
- React Native CLI
- TypeScript
- Redux Toolkit
- AsyncStorage
- React Navigation


## How to Run
1. git clone repo
2. npm install
3. npx pod-install ios
4. npx react-native run-android / run-ios


## Key Decisions
- Redux Toolkit for predictable state
- FlatList for performance
- Persisted Redux store for offline restore
- Separation of concerns (api, redux, screens)


## Improvements with More Time
- Unit tests
- Better error recovery
- Offline-first sync
- Better pagination UX
