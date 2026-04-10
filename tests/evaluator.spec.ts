import { test, expect } from '@playwright/test';

test.describe('THE12 Landing Page Evaluation', () => {
  test('SEO & Meta Tags', async ({ page }) => {
    await page.goto('/');
    // Check if the title contains THE 12
    await expect(page).toHaveTitle(/THE 12/);
  });

  test('Mobile Viewport Rendering & Scroll', async ({ page }) => {
    // Set to mobile viewport (iPhone 12/13/14)
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');

    // Check if main heading is visible
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();

    // Check if Sticky CTA is hidden initially
    const stickyCTA = page.locator('text=무료 OT 신청').locator('..');
    // We can't strictly test 'hidden' easily if it's rendered conditionally, 
    // but we can check if it mounts after scroll.

    // Scroll down to trigger StickyCTA
    await page.evaluate(() => window.scrollBy(0, 500));
    // Wait for the animation / state update
    await page.waitForTimeout(500);

    // Check if Sticky CTA is visible
    await expect(page.locator('text=얼리버드 등록하기')).toBeVisible();
  });

  test('Component Hydration & Timer', async ({ page }) => {
    await page.goto('/');
    // Timer should be visible after mount
    await expect(page.locator('text=수퍼 얼리버드 마감까지')).toBeVisible();
  });

  test('Recommended Badge Clipping Check', async ({ page }) => {
    await page.goto('/');
    const badge = page.locator('text=RECOMMENDED');
    await expect(badge).toBeVisible();

    // The badge is inside a Card component. We need to check if the Card (parent) has overflow: hidden.
    // If it does, the absolute positioned badge (top -translate-y-1/2) gets clipped.
    const card = badge.locator('..');
    const overflowValue = await card.evaluate((el) => window.getComputedStyle(el).overflow);
    
    // Evaluator checks if overflow is hiding the content
    expect(overflowValue).not.toBe('hidden');
  });
});
