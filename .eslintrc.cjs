module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:vue/vue3-essential"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "vue-eslint-parser", // 新增
    "parserOptions": {
        "parser": "@typescript-eslint/parser",
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": ["tsconfig.json"],
        "extraFileExtensions": [".vue"],
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["off"],
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@typescript-eslint/prefer-optional-chain": "off",
      "@typescript-eslint/restrict-template-expressions": "off",
      "@typescript-eslint/triple-slash-reference": "off"
    }
}
