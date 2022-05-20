# Comparative Analysis of Nextjs

## Research conducted by: Chattray Chea, Tanner Percival, & Jeffrey Jenkins

## General Findings

The Next JS library provides all the tools needed for server-side-rendering and static/pre-rendering of React web content. It's also very well-suited to serving templated webpages generated procedurally using data from an API

### Pros

* *Almost* plug-and-play server-side-rendering & pre-rendering
* Provides easy to use page templating

### Cons

* State management is more involved as developers have to accommodate for pages hooking into state or inheriting props from components which are not rendered.
* There is a significant amount of documentation to read.

## Feasibility

### System Requirements

Next is significantly "heavier" than React alone, having 16 dependencies per its npm page, as compared to React & React-dom's 2 dependencies.

Converting a React project to Next requires restructuring the application to fit Next's scheme, where component-like pages (or templates) form the basis of a site or app. Next pages correlate to routes that clients can navigate to.

### Ramp-up Projections

The ramp-up time would be highly dependent on the size of the project and how well it fits into Next's page-based framework. A small scale project would take a few days, a mid-sized project may take one to two weeks.

### Community Support

Next has widespread usage. Two million plus weekly downloads per npm and changes are published frequently

## Links and Resources

* [Nextjs.org](https://nextjs.org/)

