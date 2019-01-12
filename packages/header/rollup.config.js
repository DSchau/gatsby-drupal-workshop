import babel from 'rollup-plugin-babel'

const base = {
  input: 'src/index.js',
  plugins: [
    babel()
  ]
}

const config = [
  {
    output: {
      file: 'index.js',
      format: 'es'
    }
  },
  {
    output: {
      file: 'index.cjs.js',
      format: 'cjs'
    }
  }
]
  .map(output => Object.assign({}, base, output))

export default config
