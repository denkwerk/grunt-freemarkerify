# grunt-freemarkerify

> A static site generator for grunt using freemarker templates

This is another static site generator for grunt. This one is using
[Freemarker templates](http://freemarker.org). It aims at projects in need for
a frontend prototype that has to be integrated into a Java application using
Freemarker templates later. A project using the Spring framework is a good example.

## Prequites

You have to have Java installed on your machine and the `JAVA_HOME` has to be set,
as this plugin uses [freemarker.js](https://www.npmjs.com/package/freemarker.js)
which is built on [fmpp](http://fmpp.sourceforge.net/manual.html), which is a Java
tool.

## Configuration

This plugin is configured with the typical grunt configuration. There are only
two options so far, `viewRoot` and `data`. The `viewRoot` option configures the
freemarker.js plugin, the `data` option sets the view data.

`data` can either be an object or a function returning an object. Examples can
be found in the `Gruntfile.js`.
