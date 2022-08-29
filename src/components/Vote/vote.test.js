import { render, screen } from '@testing-library/react';
import Vote from './index';

describe('Vote test cases', () => {
  describe('Vote question', () => {
    test('vote question is equal to poll question', () => {});
    test('vote question updated on poll question update', () => {});
  });

  describe('Vote options', () => {
    test('vote options is equal to poll options', () => {});
    test('vote options order is equal to poll options order', () => {});
    test('vote options updated on poll options update', () => {});
    test('vote options is clickable', () => {});
    test('select only one option at a time', () => {});
  });

  describe('Vote submit', () => {
    test('submit button name', () => {});
    test('submit button is disabled when no option is selected', () => {});
    test('submit button is clickable when an option is selected', () => {});
    test('submit button updates the answers and the total votes counter', () => {});
    test('submit button resets the selected option', () => {});
  });
});
