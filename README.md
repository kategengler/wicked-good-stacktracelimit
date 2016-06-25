# wicked-good-stacktracelimit

This addon is a demonstration of creating an addon. For the real addon see ember-cli-stack-trace-limit.

This addon sets Error.stackTraceLimit `content-for 'head'` hook.
It will default to 100 in development and test.
It is configurable by the `config.stackTraceLimit` property.
It will default to not being set in production.
If it is configured in production, it will be set.

To run tests run `npm test`.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
