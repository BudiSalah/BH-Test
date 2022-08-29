import { render, screen } from '@testing-library/react';
import Poll from './index';

describe('Poll test cases', () => {
  describe('Poll question', () => {
    test('question input placeholder', () => {});
    test('insert question', () => {});
    test('change question', () => {});
    test('question input up to 80 characters and disabled', () => {});
  });

  describe('Poll options', () => {
    test('option input placeholder', () => {});
    test('add 1 option', () => {});
    test('add up to 10 options', () => {});
    test('update possible answers', () => {});
    test('edit option', () => {});
    test('remove option', () => {});
    test('option input up to 80 characters and disabled', () => {});
  });

  describe('Poll creation', () => {
    test('submit button name', () => {});
    test('submit button is clickable', () => {});
    test('poll has at least 2 options on submit', () => {});
  });

  describe('Poll reset', () => {
    test('reset button name', () => {});
    test('reset button is clickable', () => {});
    test('reset poll question and options', () => {});
  });
});
