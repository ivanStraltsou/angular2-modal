# Angular 2 (rc.5): AIO Modal / Dialog window

A fully generic, customizable and fluent modal window implementation for Angular.
`angular2-modal` is UI platform/framework agnostic, **plugins**** are used to describe a UI implementation (e.g: Bootstrap)  
This means virtually any modal implementation out there can be ported into `angular2-modal`.
`angular2-modal` will come with some built in UI platforms, external UI platform can be added in the future or externally used using NPM modules.

See the DEMO: [shlomiassaf.github.io/angular2-modal](http://shlomiassaf.github.io/angular2-modal/)

## Quick walk through
Take 5 minutes to read a [quick walk through](https://github.com/shlomiassaf/angular2-modal/tree/master/QUICKTHROUGH.md) with samples of how to use **Angular 2 Modal**

## Built in plugins:
  * [Bootstrap]()
  * [Vex](http://github.hubspot.com/vex/docs/welcome/)
  * POC implementation of JS Native modal (window.alert/prompt/confirm) to demonstrate a hostile takeover :)


## Built with angular 2 rc.5

## Features  

  - Easy to use API via Fluent API Presets (alert, propmt, confirm)
  - Extendable via plugins.  

#### Bootstrap / VEX
  - Customizable with components, Presets and more...  
  - Select cancel/quit key.
  - Cascading modals.  
  - Element blocking.  
  - Blocking / Non blocking modal.  
  - Modal as a component, replace the content by supplying a custom component.   


That's how easy it is:  
```
modal.alert()
    .title('Hello World')
    .body('In Angular 2')
    .open();
```

Click [HERE](https://github.com/shlomiassaf/angular2-modal/tree/master/QUICKTHROUGH.md) for a quick walkthrough  
Click for the [Demo](http://shlomiassaf.github.io/angular2-modal/) Make sure to check the [code generator!](http://shlomiassaf.github.io/angular2-modal#/bootstrap-demo/customizeModals)  

## Plunker
Use [this plunker](http://plnkr.co/edit/iiQett?p=preview) for quick showcasing and issue reports.


## Sample code: Custom Modal dialog
http://embed.plnkr.co/7c0pGE/

http://embed.plnkr.co/hwbmF9/   (version 1.1.1)


![Code Generator!](/preview.png)

See [src/demo](https://github.com/shlomiassaf/angular2-modal/tree/master/src/demo) for demo app with examples.

## Installation
```
    npm install angular2-modal --save
```

## SystemJS
Demo application is built with `Webpack` and `SystemJS`.   
The only difference is the `index.html` file.  
The deployed demo site is in `SystemJS`, development is done with `Webpack`

In src/system.config.ts, add the property
```
  'angular2-modal': 'vendor/angular2-modal',
```
to one of the System.config() arguments.

Optionally, you may call System.config() with an object of the form:
```
  {
    'packages': {
      angular2-modal': { ... main: 'index.js', ... },
      ...
    },
    ...
  };
```
.


## Angular-cli   
 
In ./angular-cli.build.js, and an entry for 'angular2-modal', as in:
```
module.exports = function(defaults) {
  return new Angular2App(defaults, {
    vendorNpmFiles: [
      [ ... other file globs ...],
      'angular2-modal/**/*.+(ts|js|js.map)',
    ]
  });
```

In src/system.config.ts,
you will satisfy the first requirement in the [SystemJS](#systemjs) section
by adding the property *angular2-modal* to the *map* array near the beginning of the file, as in:
```
/** Map relative paths to URLs. */
  const map: any = {
    'angular2-modal': 'vendor/angular2-modal',
    ...
  };
```

You may configure the *packages* property from [SystemJS](#systemjs)
by adding the 'angular2-modal' property the *packages* array
near the beginning of system.config.ts as in:
```
  const packages: any = {
    'angular2-modal': {
      main: 'index.js',
      ...
    }
  }
```

## Plugins
Plugins serve as a concrete UI implementation for a modal. It can be an implementation for a known library (e.g: bootstrap) or something unique.  
While `angular2-modal` has some built in plugins it is also possible to use external plugins from NPM, if someone decide to build one.



## Running locally
    git clone https://github.com/shlomiassaf/angular2-modal.git  
    npm install  
    typings install  
    npm run start
    browse to localhost:3000  

You can apply custom modals based on components.


## Publishing
Publishing is done using the TypeScript compiler directly (no webpack)
The process involves compiling into a directory called `dist`
Webpack is using the `build` directory.
Since I didn't find a way to instruct `tsc` what config file to use (i.e: a different tsconfig.json)
I created a `publish` directory instead and set the `--project` argument accordingly.

# Issues and TODO's
## Animation
Not so complicated but not in angular 2 at the moment.
## Overlay
Switch to material2 overlay implementation when done.
## Bundle
Build a umd bundle.
## Base support
Provide base classes for generic components
## Unit & E2E test
Add tests...
## Support Universal
Test against `universal-starter` to enable universal support.
## Support Change detection
Support `OnPush` with an observable api model (fluent observables)

# Known bugs
### The dialog closes when removing the target DOM element in a click event
ref [issue#111](https://github.com/shlomiassaf/angular2-modal/issues/111)

To avoid this problem use `event.stopPropagation();` or put the element removal inside a `setTimeout` call
