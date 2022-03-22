export const testCase = (
  title: string,
  { body, hooks }: { body: () => void; hooks?: () => void }
) => {
  describe(title, () => {
    hooks && hooks()
    specify('Test Body', body)
  })
}

export const precondition = (msg: string, precondition: () => void) => {
  cy.task('log_precondition', `  Precondition ${msg}`, { log: false })
  precondition()
}

export const step = (msg: string, step: () => void) => {
  cy.task('log_step', `  Step ${msg}`, { log: false })
  step()
}

export const expectedResult = (msg: string, expectedResult: () => void) => {
  cy.task('log_expected_result', `  Expected Result: ${msg}`, { log: false })
  expectedResult()
}
