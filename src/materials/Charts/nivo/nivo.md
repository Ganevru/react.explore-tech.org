---
path: '/materials/nivo'
type: 'GitHub'
img: './screenshot.png'
material:
  title: 'nivo'
  url: 'https://nivo.rocks'
  github_url: 'https://github.com/plouc/nivo'
  subscribers_count: '67'
  stargazers_count: '4908'
  tags: ['canvas','charts','components','d3js','dataviz','isomorphic','react','svg']
  subtitle: 'nivo provides a rich set of dataviz components, built on top of the awesome d3 and Reactjs libraries'
  clone_url: 'https://github.com/plouc/nivo.git'
  ssh_url: 'git@github.com:plouc/nivo.git'
  pushed_at: '2019-02-08T15:41:11Z'
  updated_at: '2019-02-14T07:30:55Z'
  author:
    name: 'plouc'
    avatar: 'https://avatars1.githubusercontent.com/u/501642?v=4'
    github_url: 'https://github.com/plouc'
  latestRelease:
    tag_name: 'v0.31.0'
    name: ''
    url: 'https://github.com/plouc/nivo/releases/tag/v0.31.0'
    created_at: '2017-12-04T21:34:37Z'
---
<img alt='nivo' src='https://raw.githubusercontent.com/plouc/nivo/master/nivo.png' width='216' height='68'/>

[![Backers on Open Collective](https://opencollective.com/nivo/backers/badge.svg?style=flat-square)](#backers)
[![Sponsors on Open Collective](https://opencollective.com/nivo/sponsors/badge.svg?style=flat-square)](#sponsors)
[![License][license-image]][license-url]
[![Travis CI][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]
[![nivo channel on discord](https://img.shields.io/badge/discord-nivo-61dafb.svg?style=flat-square)](https://discord.gg/n7Ft74f)

**nivo** provides supercharged React components to easily build dataviz apps,
it's built on top of d3.

Several libraries already exist for React d3 integration,
but just a few provide server side rendering ability and fully declarative charts.

## Installation

In order to use nivo, you just have to pick the scoped `@nivo` packages according to the charts you wish to use.

```
yarn add @nivo/bar @nivo/sankey ...
```

## Features

-   Highly customizable
-   Motion/transitions, powered by [react-motion](https://github.com/chenglou/react-motion)
-   [Component playground](http://nivo.rocks)
-   [Exhaustive documentation](http://nivo.rocks)
-   Isomorphic rendering
-   [SVG charts](http://nivo.rocks/components?filter=svg)
-   [HTML charts](http://nivo.rocks/components?filter=html)
-   [Canvas charts](http://nivo.rocks/components?filter=canvas)
-   [server side rendering API](https://github.com/plouc/nivo-api)
-   [SVG patterns](http://nivo.rocks/guides/patterns)
-   [Gradients](http://nivo.rocks/guides/gradients)
-   [responsive charts](http://nivo.rocks/components?q=responsive)

## Discussion

Join the [nivo discord community](https://discord.gg/n7Ft74f).

## Packages & components

**nivo** is comprised of several packages/components, for a full list,
please use the [components explorer](http://nivo.rocks/components).

| package                                                                                                   | components                                                                                                                                                                           |
| :-------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [**@nivo/bar**](https://github.com/plouc/nivo/tree/master/packages/bar)                                   | [![@nivo/bar NPM version](https://img.shields.io/npm/v/@nivo/bar.svg?style=flat-square)](https://www.npmjs.com/package/@nivo/bar)                                                    |
|                                                                                                           | [Bar](http://nivo.rocks/bar)                                                                                                                                                         |
|                                                                                                           | [ResponsiveBar](http://nivo.rocks/bar)                                                                                                                                               |
|                                                                                                           | [BarCanvas](http://nivo.rocks/bar/canvas)                                                                                                                                            |
|                                                                                                           | [ResponsiveBarCanvas](http://nivo.rocks/bar/canvas)                                                                                                                                  |
| [**@nivo/bullet**](https://github.com/plouc/nivo/tree/master/packages/bullet)                             | [![@nivo/bullet NPM version](https://img.shields.io/npm/v/@nivo/bullet.svg?style=flat-square)](https://www.npmjs.com/package/@nivo/bullet)                                           |
|                                                                                                           | [Bullet](http://nivo.rocks/bullet)                                                                                                                                                   |
|                                                                                                           | [ResponsiveBullet](http://nivo.rocks/bullet)                                                                                                                                         |
| [**@nivo/circle-packing**](https://github.com/plouc/nivo/tree/master/packages/circle-packing)             | [![@nivo/circle-packing NPM version](https://img.shields.io/npm/v/@nivo/circle-packing.svg?style=flat-square)](https://www.npmjs.com/package/@nivo/circle-packing)                   |
|                                                                                                           | [Bubble](http://nivo.rocks/bubble)                                                                                                                                                   |
|                                                                                                           | [ResponsiveBubble](http://nivo.rocks/bubble)                                                                                                                                         |
|                                                                                                           | [BubbleHtml](http://nivo.rocks/bubble/html)                                                                                                                                          |
|                                                                                                           | [ResponsiveBubbleHtml](http://nivo.rocks/bubble/html)                                                                                                                                |
|                                                                                                           | [BubbleCanvas](http://nivo.rocks/bubble/canvas)                                                                                                                                      |
|                                                                                                           | [ResponsiveBubbleCanvas](http://nivo.rocks/bubble/canvas)                                                                                                                            |
| [**@nivo/calendar**](https://github.com/plouc/nivo/tree/master/packages/calendar)                         | [![@nivo/calendar NPM version](https://img.shields.io/npm/v/@nivo/calendar.svg?style=flat-square)](https://www.npmjs.com/package/@nivo/calendar)                                     |
|                                                                                                           | [Calendar](http://nivo.rocks/calendar)                                                                                                                                               |
|                                                                                                           | [ResponsiveCalendar](http://nivo.rocks/calendar)                                                                                                                                     |
| [**@nivo/chord**](https://github.com/plouc/nivo/tree/master/packages/chord)                               | [![@nivo/chord NPM version](https://img.shields.io/npm/v/@nivo/chord.svg?style=flat-square)](https://www.npmjs.com/package/@nivo/chord)                                              |
|                                                                                                           | [Chord](http://nivo.rocks/chord)                                                                                                                                                     |
|                                                                                                           | [ResponsiveChord](http://nivo.rocks/chord)                                                                                                                                           |
|                                                                                                           | [ChordCanvas](http://nivo.rocks/chord/canvas)                                                                                                                                        |
|                                                                                                           | [ResponsiveChordCanvas](http://nivo.rocks/chord/canvas)                                                                                                                              |
| [**@nivo/heatmap**](https://github.com/plouc/nivo/tree/master/packages/heatmap)                           | [![@nivo/heatmap NPM version](https://img.shields.io/npm/v/@nivo/heatmap.svg?style=flat-square)](https://www.npmjs.com/package/@nivo/heatmap)                                        |
|                                                                                                           | [HeatMap](http://nivo.rocks/heatmap)                                                                                                                                                 |
|                                                                                                           | [ResponsiveHeatMap](http://nivo.rocks/heatmap)                                                                                                                                       |
|                                                                                                           | [HeatMapCanvas](http://nivo.rocks/heatmap/canvas)                                                                                                                                    |
|                                                                                                           | [ResponsiveHeatMapCanvas](http://nivo.rocks/heatmap/canvas)                                                                                                                          |
| [**@nivo/line**](https://github.com/plouc/nivo/tree/master/packages/line)                                 | [![@nivo/line NPM version](https://img.shields.io/npm/v/@nivo/line.svg?style=flat-square)](https://www.npmjs.com/package/@nivo/line)                                                 |
|                                                                                                           | [Line](http://nivo.rocks/line)                                                                                                                                                       |
|                                                                                                           | [ResponsiveLine](http://nivo.rocks/line)                                                                                                                                             |
| [**@nivo/pie**](https://github.com/plouc/nivo/tree/master/packages/pie)                                   | [![@nivo/pie NPM version](https://img.shields.io/npm/v/@nivo/pie.svg?style=flat-square)](https://www.npmjs.com/package/@nivo/pie)                                                    |
|                                                                                                           | [Pie](http://nivo.rocks/pie)                                                                                                                                                         |
|                                                                                                           | [ResponsivePie](http://nivo.rocks/pie)                                                                                                                                               |
|                                                                                                           | [PieCanvas](http://nivo.rocks/pie/canvas)                                                                                                                                            |
|                                                                                                           | [ResponsivePieCanvas](http://nivo.rocks/pie/canvas)                                                                                                                                  |
| [**@nivo/parallel-coordinates**](https://github.com/plouc/nivo/tree/master/packages/parallel-coordinates) | [![@nivo/parallel-coordinates NPM version](https://img.shields.io/npm/v/@nivo/parallel-coordinates.svg?style=flat-square)](https://www.npmjs.com/package/@nivo/parallel-coordinates) |
|                                                                                                           | [ParallelCoordinates](http://nivo.rocks/parallel-coordinates)                                                                                                                        |
|                                                                                                           | [ResponsiveParallelCoordinates](http://nivo.rocks/parallel-coordinates)                                                                                                              |
|                                                                                                           | [ParallelCoordinatesCanvas](http://nivo.rocks/parallel-coordinates/canvas)                                                                                                           |
|                                                                                                           | [ResponsiveParallelCoordinatesCanvas](http://nivo.rocks/parallel-coordinates/canvas)                                                                                                 |
| [**@nivo/radar**](https://github.com/plouc/nivo/tree/master/packages/radar)                               | [![@nivo/radar NPM version](https://img.shields.io/npm/v/@nivo/radar.svg?style=flat-square)](https://www.npmjs.com/package/@nivo/radar)                                              |
|                                                                                                           | [Radar](http://nivo.rocks/radar)                                                                                                                                                     |
|                                                                                                           | [ResponsiveRadar](http://nivo.rocks/radar)                                                                                                                                           |
| [**@nivo/sankey**](https://github.com/plouc/nivo/tree/master/packages/sankey)                             | [![@nivo/sankey NPM version](https://img.shields.io/npm/v/@nivo/sankey.svg?style=flat-square)](https://www.npmjs.com/package/@nivo/sankey)                                           |
|                                                                                                           | [Sankey](http://nivo.rocks/sankey)                                                                                                                                                   |
|                                                                                                           | [ResponsiveSankey](http://nivo.rocks/sankey)                                                                                                                                         |
| [**@nivo/scatterplot**](https://github.com/plouc/nivo/tree/master/packages/scatterplot)                   | [![@nivo/scatterplot NPM version](https://img.shields.io/npm/v/@nivo/scatterplot.svg?style=flat-square)](https://www.npmjs.com/package/@nivo/scatterplot)                            |
|                                                                                                           | [ScatterPlot](http://nivo.rocks/scatterplot)                                                                                                                                         |
|                                                                                                           | [ResponsiveScatterPlot](http://nivo.rocks/scatterplot)                                                                                                                               |
|                                                                                                           | [ScatterPlotCanvas](http://nivo.rocks/scatterplot/canvas)                                                                                                                            |
|                                                                                                           | [ResponsiveScatterPlotCanvas](http://nivo.rocks/scatterplot/canvas)                                                                                                                  |
| [**@nivo/stream**](https://github.com/plouc/nivo/tree/master/packages/stream)                             | [![@nivo/stream NPM version](https://img.shields.io/npm/v/@nivo/stream.svg?style=flat-square)](https://www.npmjs.com/package/@nivo/stream)                                           |
|                                                                                                           | [Stream](http://nivo.rocks/stream)                                                                                                                                                   |
|                                                                                                           | [ResponsiveStream](http://nivo.rocks/stream)                                                                                                                                         |
| [**@nivo/sunburst**](https://github.com/plouc/nivo/tree/master/packages/sunburst)                         | [![@nivo/sunburst NPM version](https://img.shields.io/npm/v/@nivo/sunburst.svg?style=flat-square)](https://www.npmjs.com/package/@nivo/sunburst)                                     |
|                                                                                                           | [Sunburst](http://nivo.rocks/sunburst)                                                                                                                                               |
|                                                                                                           | [ResponsiveSunburst](http://nivo.rocks/sunburst)                                                                                                                                     |
| [**@nivo/treemap**](https://github.com/plouc/nivo/tree/master/packages/treemap)                           | [![@nivo/treemap NPM version](https://img.shields.io/npm/v/@nivo/treemap.svg?style=flat-square)](https://www.npmjs.com/package/@nivo/treemap)                                        |
|                                                                                                           | [TreeMap](http://nivo.rocks/treemap)                                                                                                                                                 |
|                                                                                                           | [ResponsiveTreeMap](http://nivo.rocks/treemap)                                                                                                                                       |
|                                                                                                           | [TreeMapHtml](http://nivo.rocks/treemap/html)                                                                                                                                        |
|                                                                                                           | [ResponsiveTreeMapHtml](http://nivo.rocks/treemap/html)                                                                                                                              |
|                                                                                                           | [TreeMapCanvas](http://nivo.rocks/treemap/canvas)                                                                                                                                    |
|                                                                                                           | [ResponsiveTreeMapCanvas](http://nivo.rocks/treemap/canvas)                                                                                                                          |
| [**@nivo/voronoi**](https://github.com/plouc/nivo/tree/master/packages/voronoi)                           | [![@nivo/voronoi NPM version](https://img.shields.io/npm/v/@nivo/voronoi.svg?style=flat-square)](https://www.npmjs.com/package/@nivo/voronoi)                                        |
|                                                                                                           | [Voronoi](http://nivo.rocks/voronoi)                                                                                                                                                 |
|                                                                                                           | [ResponsiveVoronoi](http://nivo.rocks/voronoi)                                                                                                                                       |
| [**@nivo/waffle**](https://github.com/plouc/nivo/tree/master/packages/waffle)                             | [![@nivo/waffle NPM version](https://img.shields.io/npm/v/@nivo/waffle.svg?style=flat-square)](https://www.npmjs.com/package/@nivo/waffle)                                           |
|                                                                                                           | [Waffle](http://nivo.rocks/waffle)                                                                                                                                                   |
|                                                                                                           | [ResponsiveWaffle](http://nivo.rocks/waffle)                                                                                                                                         |
|                                                                                                           | [WaffleHtml](http://nivo.rocks/waffle/html)                                                                                                                                          |
|                                                                                                           | [ResponsiveWaffleHtml](http://nivo.rocks/waffle/html)                                                                                                                                |
|                                                                                                           | [WaffleCanvas](http://nivo.rocks/waffle/canvas)                                                                                                                                      |
|                                                                                                           | [ResponsiveWaffleCanvas](http://nivo.rocks/waffle/canvas)                                                                                                                            |

## [HTTP API](https://github.com/plouc/nivo-api)

Components available through the HTTP rendering API.

-   [Bar](https://nivo-api.herokuapp.com/samples/bar.svg)
-   [Bubble](https://nivo-api.herokuapp.com/samples/bubble.svg)
-   [Chord](https://nivo-api.herokuapp.com/samples/chord.svg)
-   [HeatMap](https://nivo-api.herokuapp.com/samples/heatmap.svg)
-   [Line](https://nivo-api.herokuapp.com/samples/line.svg)
-   [Pie](https://nivo-api.herokuapp.com/samples/pie.svg)
-   [Radar](https://nivo-api.herokuapp.com/samples/radar.svg)
-   [Sankey](https://nivo-api.herokuapp.com/samples/sankey.svg)
-   [Sunburst](https://nivo-api.herokuapp.com/samples/sunburst.svg)
-   [TreeMap](https://nivo-api.herokuapp.com/samples/treemap.svg)

## Guides

-   [colors](http://nivo.rocks/guides/colors)
-   [legends](http://nivo.rocks/guides/legends)
-   [gradients](http://nivo.rocks/guides/gradients)
-   [patterns](http://nivo.rocks/guides/patterns)

## Backers

Donations are welcome to help improving **nivo** [[Become a backer](https://opencollective.com/nivo#backer)]

<a href='https://opencollective.com/nivo#backers' target='_blank'><img src='https://opencollective.com/nivo/backers.svg?width=890'></a>

## Open Collective Sponsors

Support this project by becoming a sponsor,
your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/nivo#sponsor)]

## Repositories

-   [nivo](https://github.com/plouc/nivo) - nivo packages, website, storybook and examples
-   [nivo-api](https://github.com/plouc/nivo-api) - the nivo http api
-   [nivo-api-docker](https://github.com/plouc/nivo-api-docker) - a Docker image for the nivo http api

## Credits

-   [d3](https://d3js.org/)
-   [react](https://facebook.github.io/react/)
-   [react-motion](https://github.com/chenglou/react-motion)
-   …

[license-image]: https://img.shields.io/github/license/plouc/nivo.svg?style=flat-square
[license-url]: https://github.com/plouc/nivo/blob/master/LICENSE.md
[npm-image]: https://img.shields.io/npm/v/@nivo/core.svg?style=flat-square
[npm-url]: https://www.npmjs.com/~nivo
[travis-image]: https://img.shields.io/travis/plouc/nivo.svg?style=flat-square
[travis-url]: https://travis-ci.org/plouc/nivo
[prettier-image]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square
[prettier-url]: https://github.com/prettier/prettier
