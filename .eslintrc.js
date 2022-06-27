module.exports = {
  globals: {
    google: 'readonly'
  },
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/essential',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: [
    'vue'
  ],
  rules: {
  }
}
