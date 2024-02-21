/** @type { import('@storybook/react').Preview } */

const newViewport = {
  iPhone14Pro: {
    name: "iPhone 14 Pro",
    defaultViewport: "iphone14pro",
  },
  iPhone14ProMax: {
    name: "iPhone 14 Pro Max",
    defaultViewport: "iphone14promax",
  },
};

const preview = {
  parameters: {
    // viewport: newViewport,
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
