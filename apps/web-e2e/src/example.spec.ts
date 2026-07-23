import { test, expect } from '@playwright/test';

test('renders the Socializ workspace', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByRole('heading', { name: 'Good morning, Alex' }),
  ).toBeVisible();
});
