export const testCase = (
  title: string,
  { body, hooks }: { body: () => void; hooks?: () => void }
) => {
  describe(title, () => {
    hooks && hooks()
    specify('Test Body', body)
  })
}

export const precondition = (msg: string, precondition: () => void, consoleLog = true) => {
  consoleLog && cy.task('log_precondition', `  Precondition ${msg}`, { log: false })
  precondition()
}

export const step = (msg: string, step: () => void, consoleLog = true) => {
  consoleLog && cy.task('log_step', `  Step ${msg}`, { log: false })
  step()
}

export const expectedResult = (msg: string, expectedResult: () => void, consoleLog = true) => {
  consoleLog && cy.task('log_expected_result', `  Expected Result: ${msg}`, { log: false })
  expectedResult()
}

export const plugins = {
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
}
