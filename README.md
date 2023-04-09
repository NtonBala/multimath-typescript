# multimath-typescript

Simple math game for kids written on TypeScript

The project relates to [TypeScript 4: Getting Started](https://app.pluralsight.com/library/courses/getting-started-typescript/exercise-files) course by [Brice Wilson](https://app.pluralsight.com/profile/author/brice-wilson). Course repo can be found [here](https://github.com/bricewilson/TypeScript-Getting-Started).

Project uses `npm` as a package manager, to start the app run `npm run start`.

To run TS compiler from the terminal use `entry: './js/app.js'` in `webpack.config.js` and comment there everything except `devServer` section.
To compile any ts file run `tsc relativePath/filename.ts` in terminal. You can also output compiled from different files JS to a specific folder: `tsc relativePath/fileName1.ts relativePath/fileName2.ts --outDir 'relativePath/targetDirectoryName`.
