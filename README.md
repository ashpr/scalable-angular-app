![CI](https://github.com/ashpr/scalable-angular-app/workflows/CI/badge.svg)

### Scalable Angular Application

This repo accompanies the Medium article found here:

https://medium.com/@ashprosser/scalable-angular-project-structure-and-practices-3908b8edf0f2

## Technologies and concepts

| Tech  | Purpose |
| ------------- | ------------- |
| Feature Modules  | Break down the codebase into sections focused on features  |
| Module-per-component | Each component has an explicit list of dependencies and can be easily imported into other components or apps if needs be |
| Pages | Page components are the middleman between the state/API and the UI. Results in a better seperation of concerns and easier testing |
| Spectator Testing  | Easier unit testing |
| Runtime configuration  | Build once deploy everywhere. The application can be configured via token replacement on the JSON file in assets/appconfig.json |
| App Router | All routes are in their own subfolders that match the applications url structure |
| Testing Utilities | Utilities for testing across the entire app or testing per feature. Makes use of [builders](http://www.natpryce.com/articles/000714.html) |
| Configuration using Injection Tokens | Easier unit testing |

### Got questions?

Raise an issue! I'm always happy to help as long as you're polite.

### Got suggestions?

Make a pull request! They will be reviewed and discussed as soon as I have the time.

### Copyright and license

Copyright 2020 Ashley Prosser. Code released under the MIT license.
