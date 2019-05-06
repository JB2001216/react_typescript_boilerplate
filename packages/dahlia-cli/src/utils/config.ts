export const deps = [
  '@types/node',
  '@types/jest',
  '@types/react',
  '@types/react-dom',
  'dahlia',
  'dahlia-cli',
  'react',
  'react-dom',
  'typescript',
]

export const pkg = {
  version: '0.1.0',
  private: true,
  scripts: {
    start: 'dh start ',
    build: 'dh build',
  },
  eslintConfig: {
    extends: 'react-app',
  },
  browserslist: {
    production: ['>0.2%', 'not dead', 'not op_mini all'],
    development: [
      'last 1 chrome version',
      'last 1 firefox version',
      'last 1 safari version',
    ],
  },
}

// TODO: check files
export const filesToCheck = [
  'package.json',
  'public',
  'src',
  'tsconfig.json',
  'yarn.lock',
  '.gitignore',
  'README.md',
]
