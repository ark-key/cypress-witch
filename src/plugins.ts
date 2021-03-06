module.exports = {
  plugins: {
    cypress_witch_log_precondition(message: string) {
      console.log('\x1b[36m%s\x1b[0m', message) // cyan
      return null
    },
    cypress_witch_log_step(message: string) {
      console.log('\x1b[34m%s\x1b[0m', message) // blue
      return null
    },
    cypress_witch_log_expected_result(message: string) {
      console.log('\x1b[35m%s\x1b[0m', message) // magenta
      return null
    },
  },
}
