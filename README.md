<h1 align="center" style="border-bottom: none;">cypress-witch</h1>
<p align="center"><i>A different way to write tests with Cypress</i></p>

<p align="center">
  <a href="https://www.npmjs.com/package/cypress-witch">
    <img src="https://img.shields.io/npm/dm/cypress-witch.svg" alt="npm"/>
  </a>
</p>

**cypress-witch** makes your Cypress tests concise, structured and readable.

## Installation

```shell
npm i cypress-witch
```

In your *cypress/plugins/index.js* :

```javascript
import { plugins } from 'cypress-witch/lib/plugins';

module.exports = (on, config) => {
  on('task', {
    ...plugins,
  })
}
```

## Showcase 

**_todo.spec.js_**

```javascript
import { testCase, precondition, step, expectedResult } from 'cypress-witch';

testCase('User adds and edits new todo', {
  body: () => {
    const testData = {
      newTodo: 'Feed the cat',
      editedTodo: 'Feed the dog',
    };

    precondition('1: User is at cypress todo example', () => {
      cy.visit('https://example.cypress.io/todo');
    });

    step('1: User adds new todo', () => {
      cy.get('[data-test=new-todo]')
        .type(`${testData.newTodo}{enter}`);
    });

    expectedResult('New todo is added', () => {
      cy.get('.todo-list li')
        .last()
        .should('have.text', testData.newTodo);
    });

    step('2: User edits created todo', () => {
      cy.get('.todo-list li')
        .last()
        .dblclick()
        .clear()
        .type(`${testData.editedTodo}{enter}`);
    });

    expectedResult('Todo item is edited', () => {
      cy.get('.todo-list li')
        .last()
        .should('have.text', testData.editedTodo);
    });
  },
});
```

**cypress run**

![cypress run](https://user-images.githubusercontent.com/76620843/158082711-602b0653-0859-4c5e-a348-5af9ceaeddee.png)

**cypress open**

![cypress open](https://user-images.githubusercontent.com/76620843/158083217-bf947247-764d-47f2-b31c-d535356762de.png)
