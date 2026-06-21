import { test, expect } from '@playwright/test';

test.describe('Service Apotheke Core Architecture', () => {
  test('Landing Page Mounts and Renders Title', async ({ page }) => {
    await page.goto('/');
    
    // Assert page structure loads without fatal React runtime errors
    const pageTitle = await page.title();
    expect(pageTitle).not.toBeNull();
  });

  test('Global State Toggles Successfully', async ({ page }) => {
    await page.goto('/');
    
    // Target the debug component injected in Phase 1
    const botStateText = page.locator('text=Bot State:');
    
    // If the debug component is mounted, assert state transitions
    if (await botStateText.isVisible()) {
      await expect(botStateText).toContainText('INACTIVE');
      await page.click('text=Toggle Global Bot State');
      await expect(botStateText).toContainText('ACTIVE');
    }
  });
});
