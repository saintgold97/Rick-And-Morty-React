// cypress/integration/myCard.spec.js
import React from 'react';
import { MyCard } from './MyCard';
import { BackgroundContext, FontContext } from '../Characters/Characters';

describe('<MyCard />', () => {
  it('renders with correct data and styling', () => {
    const character = {
      name: 'Rick',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      image: "../../../public/logo192.png",
      origin: { name: 'Earth' },
    };

    const font = 16;
    const theme = 'green';

    cy.mount(
      <FontContext.Provider value={font}>
        <BackgroundContext.Provider value={theme}>
          <MyCard {...character} />
        </BackgroundContext.Provider>
      </FontContext.Provider>
    );

    cy.get('.card-img-top').should('have.attr', 'src', character.image)
    cy.get('.card-title').should('have.text', character.name);
    cy.get('.card-text').eq(0).should('have.text', `Status: ${character.status}`);
    cy.get('.card-text').eq(1).should('have.text', `Species: ${character.species}`);
    cy.get('.card-text').eq(2).should('have.text', `Gender: ${character.gender}`);
    cy.get('.card-text').eq(3).should('have.text', `Origin: ${character.origin.name}`);
    
    cy.get('.card').should('have.class', `theme-${theme}`);
    cy.get('.card').should('have.css', 'font-size', `${font}px`);
  });
});
