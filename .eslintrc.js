module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'ember'
  ],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended'
  ],
  env: {
    browser: true
  },
  rules: {
  },
  overrides: [
    // node files
    {
      files: [
        '.ember-cli.js',
        '.eslintrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/*/index.js',
        'server/**/*.js',
        // packages
        'packages/**/blueprints/*/index.js',
        'packages/**/lib/*.js',
        'packages/**/src/*.js',
        'packages/**/plugin/*.js',
        'packages/**/vendor/*.js',
        'packages/**/index.js',
        // specific
        'packages/electron/blueprints/**/*.js',
        'packages/fastboot/blueprints/**/*.js',
        'packages/server/src/**/*.js',
      ],
      excludedFiles: [
        'packages/worker/vendor/sw.mod.js',
        'packages/**/app/**',
        'app/**',
      ],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2015
      },
      env: {
        browser: false,
        node: true,
        es6: true,
      },
      plugins: ['node'],
      rules: {},
      extends: [
        'plugin:node/recommended'
      ],
    },
    //sw.js files
    {
      files: [
        'packages/worker/vendor/sw.mod.js',
      ],
      excludedFiles: [
      	'packages/**/app/**',
        'app/**',
      ],
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 6
      },
      env: {
        browser: false,
        node: false,
        es6: true,
      },
      plugins: [],
      rules: {},
      extends: [
        'eslint:recommended'
      ],
    }
  ]
};
