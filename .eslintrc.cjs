module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    "func-call-spacing": "off",
    "@typescript-eslint/func-call-spacing": "error",
    "no-unused-vars": 0,
    "@typescript-eslint/no-unused-vars": "error",
    "no-undef": 0,
    "vue/valid-v-for": 0
  }
}
