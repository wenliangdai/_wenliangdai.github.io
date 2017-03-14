# react-audioplayer
A customizable HTML5 audio player for React.js

## Features
- A ready-to-use web audio player for React.js
- Highly-customizable. You can change theme color, size, functions of this player as you want.
- Just one single component on the top with beautiful UI.

## Install
- npm: `npm install react-audioplayer --save`
- script tag: `<script src="https://unpkg.com/react-audioplayer/build/react-audio-player.js"></script>`

## Usage
```js
// A simple example

import Audio from 'react-audioplayer';
// In your render():
<Audio
  width={600}
  height={400}
  autoPlay={true}
  playlist={somePlaylist}
/>
```

#### Accepted props
| prop name             | value type | default value           | isRequired ? | explanation                    |
| --------------------- | ---------- | ----------------------- | ------------ | ------------------------------ |
| width                 | number     | 400                     | no           | Width of the <Audio /> component (px) |
| height                | number     | fullPlayer ? 300 : 52   | no           | Height of the <Audio /> component (px) |
| color                 | string     | "#212121"               | no           | Theme color of the player |
| autoPlay              | bool       | false                   | no           | Automatically playing when loaded |
| volumeOrientationDown | bool       | false                   | no           | Make the volume bar head downwards (make it true if the player is positioned at the very top of your webpage) |
| fullPlayer            | bool       | false                   | no           | If true, shows song image given in the playlist. Otherwise just shows the basic player |
| comment               | bool       | false                   | no           | If true, enables comment function. When fullPlayer is false, this is forced to be false. You need to specify `onCommentSubmit` to handle user input |
| onCommentSubmit(text) | Function   | null                    | no           | When a user submits a new comment, this function will be invoked and the input content will be passed as an argument |
| playlist              | array      | null                    | yes          | An array of song information objects, see below for details |
| style                 | object     | null                    | no           | A normal style object. For example, you can add border or boxShadow to the component |
