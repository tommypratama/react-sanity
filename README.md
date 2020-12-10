# Getting started sanity.io with React

### Install React, Tailwindcss

```bash
npx create-react-app .
```

- Install tailwindcss [see docs](https://tailwindcss.com/docs/guides/create-react-app)
- Install Tailwind Typography [See docs](https://github.com/tailwindlabs/tailwindcss-typography)

```bash
npm install tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9 @craco/craco @tailwindcss/typography -D
```

in `package.json`, replace with this code:

```js
"scripts": {
  "start": "craco start",
  "build": "craco build",
  "test": "craco test",
  "eject": "react-scripts eject"
},
```

Create a file `craco.config.js`

```js
module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
};
```

Create `tailwind.config.js` file:

```js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
```

Error, follow this step:

- https://stackoverflow.com/questions/65179304/tailwind-in-react-project-getting-cannot-find-module-autoprefixer-error-du/65179433

### Install Sanity

```bash
npm install -g @sanity/cli
```

Login to sanity

```bash
sanity login
```

Initialize new project sanity

```bash
sanity init
```

- Create new project
- Name project
- Default dataset: Yes
- Project output path: Enter
- Select project template: Blog

**cd** to folder project

Run sanity

```bash
sanity start
```

### Install Sanity on React

**cd** to folder React project

Install sanity client

```bash
npm install @sanity/client
```

Create a file `src/client.js`, then paste this code:

```js
import sanityClient from '@sanity/client'

export default sanityClient({
	projectId: "",
    dataset: "production"
})
```

- Find `projectId` in folder `sanity/sanity.json`
- Go manage.sanity.io, in `settings` tab, add CORS Origins `http://localhost:3000`