import { render, screen } from '@testing-library/react';
import Chart from './index';

describe('Chart test cases', () => {
  describe('Chart question', () => {
    test('chart question is equal to poll question', () => {});
    test('chart question updated on poll question update', () => {});
  });

  describe('Chart graph', () => {
    test('graph columns label text are the same as poll options text', () => {});
    test('graph columns label are the same order as poll options order', () => {});
    test('graph columns total numbers is equal to total votes number', () => {});
    test('graph data is updated on vote submit', () => {});
  });

  describe('Chart total votes', () => {
    test('total votes incremented on vote submit', () => {});
  });
});
