# The smallest possible Gatsby theme

## Quick Start

```shell
mkdir my-site
cd my-site
yarn init
# install gatsby-theme-monomer and it's dependencies
yarn add gatsby react react-dom gatsby-theme-monomer
```

Then add the theme to your `gatsby-config.js`. We'll use the long form
here for education purposes.

```javascript
module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-monomer",
      options: {},
    },
  ],
}
```

That's it, you can now run your gatsby site using

```shell
yarn develop
```
