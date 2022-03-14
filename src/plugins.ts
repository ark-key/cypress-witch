module.exports = {
  plugins: {
    log_precondition(message: string) {
      console.log('\x1b[36m%s\x1b[0m', message)
      return null
    },
    log_step(message: string) {
      console.log('\x1b[34m%s\x1b[0m', message)
      return null
    },
    log_expected_result(message: string) {
      console.log('\x1b[35m%s\x1b[0m', message)
      return null
    },
  },
}
