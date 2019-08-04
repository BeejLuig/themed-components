import { configure } from '@storybook/html';

function loadStories() {
  const req = require.context('../stories', true, /\.stories\.js$/);
  req.keys()
    .filter(file =>   file.match(new RegExp(`\/${process.env.STORYBOOK_THEME}\/`)))
    .forEach(filename => req(filename));
}

configure(loadStories, module);