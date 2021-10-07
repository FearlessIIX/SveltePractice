## SvelteKit + TailwindCSS Template

This is a project template for [Svelte](https://svelte.dev) apps. The original template lives at [https://github.com/JoshuaPelealu/SvelteKit-Tailwind](https://github.com/JoshuaPelealu/SvelteKit-Tailwind) and is based on the official SvelteKit init skeleton project template. Using Tailwind CSS 2.1 with JIT compiler enabled. **The JIT compiler feature is in preview at the time of this making, and bugs will prone to occur ( I will try to update this repo as much as possible )**

> Note:
>
> This is not a vanilla Svelte app, this is SvelteKit template with Tailwind.

## Get Started

There are 2 ways to use this project, *Note: 'sveltekit-app' is a name for your project, you can change this to your project's name*

First, you can create a new project using this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit JoshuaPelealu/SvelteKit-Tailwind sveltekit-app
```

or clone it yourself

```bash
git clone https://github.com/JoshuaPelealu/SvelteKit-Tailwind sveltekit-app
```

After that's done, we need to install dependencies...

```bash
cd sveltekit-app
npm install
```

...then you can start a development environment

```bash
npm run dev -- --open
```

*The `-- --open` is a flag for the svelte-kit compiler to open a browser when done compiling*

*Sveltekit already has hot-reload*

The script should automatically open up your default browser and you should be able to see a simple app there. If the browser doesn't automatically open, you can navigate to [localhost:3000](localhost:3000).

## Editing

Now's the exiting part, you get to edit the files and see it in action... All the source code are in the `src` directory.

The files inside `routes` are, of course, the routes that your app will have. The `index.svelte` is the main route that you will get on the home page. The `__layout.svelte` is the layout that every svelte route will use (this will be handy to put your nav bar and footer without copy pasting into different files).

You can create a new route by creating a new `.svelte` file with the route name you want it to be or by creating a new directory with the name of the route. If you don't understand what I mean by route name, it is when you use the `/` on the url. Essentially it is multiple pages. So if you create `create-name.svelte` file inside of `routes`, it will let you go into `/create-name`. Or you can create a new folder named `create-name` and have an `index.svelte` in it

The `lib` folder is where you can put your svelte components/files. The folder name `lib` is optional, it is configured so that you can use the `$lib` shortcut when importing files, more about that later.

When you change the files, the compiler will detect it and will hot-reload your browser tab automatically.

*Note: When running the app on development mode, the app is not optimized and you will be able to see this in action by the app not being styled for a couple second then, the style appears.*

## Building and Running in Production Mode

To build the app into the production mode, which is optimised:

```bash
npm run build
```

Then you can run a preview to check out the production version of the app using:

```bash
npm run preview -- --open
```

This will compile the code into an optimised version and open a browser for you automatically. The production mode does not have hot-reloading because you have to compile the code manually.

## Deploy to Vercel

You can directly deploy to Vercel from the github repository or you can use the cli app for vercel. I will teach you deploying staright to Vercel:

#### Deploying straight to Vercel.

- The app has to be deployed into Github
- Then you can sign up to Vercel
- You then want to link your Github account into vercel so it has access to your repositories
- Then you can create a new project and there should be an 'Import Git Repository' panel.
- Select your project and press import
- It'll ask for a scope, you can choose whichever but I would choose the personal account
- Then it'll ask for the source code, don't change anything and press continue
- Then It'll ask for more detail.
  - The project name you can choose yourself
  - The Framework preset, set it to Svelte
  - Then press Deploy
- You're Done! It will automatically deploy every single time you push into the git repository.

### Tips

- If you want a shortcut into a directory when importing, let's say you want to import from`'../lib/components/counter/counter.svelte'`, it can be shortened into`'$components/counter/counter.svelte'`. You can check it out in`jsconfig.json`

*Note: The `jsconfig.json` file will tell you that there is an error, but it would not do anything to your app.*
