module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  stories :['../src/app/components/**/*.stories.ts'],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
}