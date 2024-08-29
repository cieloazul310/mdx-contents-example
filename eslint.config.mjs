import * as mdx from "eslint-plugin-mdx";

/** @type {import("eslint").Linter.Config[]} */
export default [
  {
    ...mdx.flat,
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: true,
      // optional, if you want to disable language mapper, set it to `false`
      // if you want to override the default language mapper inside, you can provide your own
      languageMapper: {},
    }),
  },
];
