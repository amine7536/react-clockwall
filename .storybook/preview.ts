import type { Preview } from '@storybook/react-vite'
import { createElement } from 'react'
import '../src/styles/reset.css'
import '../src/styles/main.css'
import '../src/styles/theme.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#000000',
        },
        {
          name: 'light',
          value: '#ffffff',
        },
      ],
    },
    // Apply dark theme to docs page
    docs: {
      story: {
        inline: false,
        iframeHeight: 400,
      },
    },
  },
  decorators: [
    (Story) =>
      createElement(
        'div',
        {
          style: {
            background: '#000',
            minHeight: '400px',
            padding: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
        },
        createElement(Story)
      ),
  ],
};

export default preview;