import React from 'react';
import { addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withConsole } from '@storybook/addon-console';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import '../src/stories/Story.style.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  story => <div className="story">{story()}</div>,
  (storyFn, context) => withConsole()(storyFn)(context),
];

addParameters(withA11y);
addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS
  }
})
