module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: [
        "@typescript-eslint",
        "simple-import-sort",
        "import",
    ],
    parserOptions: {
        project: "./tsconfig.json"
    },
    ignorePatterns: ['.eslintrc.js'],
    extends: [
        "plugin:import/recommended",
        "plugin:@typescript-eslint/recommended",
        "airbnb-typescript",
        'airbnb-typescript/base'
    ],
    rules: {
        semi: "error",
        "simple-import-sort/imports": "warn",
        "simple-import-sort/exports": "warn",
        quotes: [ "error","single", { allowTemplateLiterals: true }],
        "import/no-extraneous-dependencies": ["error", {devDependencies: true, }],
        "react/jsx-filename-extension": 0,
    }
}