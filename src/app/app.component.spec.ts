import { describe, it , expect } from 'vitest'
import { render, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it(`has 'NgVitest' as title`, async () => {
    await render(AppComponent);
    expect(screen.getByRole('heading', {name: /NgVitest/i})).toBeInTheDocument();
  });
});
