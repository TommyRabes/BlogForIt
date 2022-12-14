// ***********************************************
// This namespace declaration will help
// with Intellisense and code completion in your
// IDE or Text Editor.
// ***********************************************
declare namespace Cypress {
  interface Chainable<Subject = any> {
    isWithinViewport(subject?: any): void;
    isOutsideViewport(subject?: any): void;
  }
}

Cypress.Commands.add('isWithinViewport', { prevSubject: true }, subject => {
  const windowInnerWidth = Cypress.config(`viewportWidth`);
  const windowInnerHeight = Cypress.config(`viewportHeight`);

  const bounding = subject[0].getBoundingClientRect();

  expect(bounding.top).to.be.within(0, windowInnerHeight);
  expect(bounding.right).to.be.within(0, windowInnerWidth);
  expect(bounding.bottom).to.be.within(0, windowInnerHeight);
  expect(bounding.left).to.be.within(0, windowInnerWidth);


  return subject;
});

Cypress.Commands.add('isOutsideViewport', { prevSubject: true }, subject => {
  const windowInnerWidth = Cypress.config(`viewportWidth`);
  const windowInnerHeight = Cypress.config(`viewportHeight`);

  const rect = subject[0].getBoundingClientRect();

  expect(rect).to.satisfy((bounding: { top: number; bottom: number; left: number; right: number; }) => {
    return bounding.top < 0 || bounding.top > windowInnerHeight || bounding.bottom < 0 || bounding.bottom > windowInnerHeight
      || bounding.left < 0 || bounding.left > windowInnerWidth || bounding.right < 0 || bounding.right > windowInnerWidth
  });

  return subject;
});
