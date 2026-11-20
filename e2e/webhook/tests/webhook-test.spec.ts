import { expect, test } from '@playwright/test';
import { FRONTEND_URL } from '../../fixtures/test-helpers';

for (const [locale, mails, webhook, testLabel, specified, mailId, invalid] of [
  ['en', 'Emails', 'Mail Webhook', 'Test', 'Specify ID', 'Email ID', 'Enter a valid positive integer email ID'],
  ['es', 'Correos', 'Webhook de correo', 'Prueba', 'Especificar ID', 'ID del correo', 'Introduce un ID de correo válido que sea un entero positivo'],
  ['pt-BR', 'E-mails', 'Webhook de e-mail', 'Teste', 'Especificar ID', 'ID do e-mail', 'Digite um ID de e-mail válido que seja um número inteiro positivo'],
  ['ja', 'メール', 'メールWebhook', 'テスト', 'ID を指定', 'メール ID', '有効な正の整数のメール ID を入力してください'],
  ['de', 'E-Mails', 'Mail-Webhook', 'Test', 'ID angeben', 'E-Mail-ID', 'Gib eine gültige positive ganze Zahl als E-Mail-ID ein'],
]) {
  test(`Webhook test dialog translations: ${locale}`, async ({ page }) => {
    await page.route('**/admin/mail_webhook/settings', route => route.fulfill({
      json: { enabled: true, url: 'https://example.com/webhook', method: 'POST', headers: '{}', body: '{}' },
    }));
    await page.goto(`${FRONTEND_URL}/${locale}/admin`);
    await page.getByText(mails, { exact: true }).click();
    await page.getByText(webhook, { exact: true }).click();
    await page.getByRole('button', { name: testLabel, exact: true }).click();
    const dialog = page.getByRole('dialog');
    await dialog.getByText(specified, { exact: true }).click();
    await expect(dialog.getByPlaceholder(mailId, { exact: true })).toBeVisible();
    await dialog.getByRole('button', { name: testLabel, exact: true }).click();
    await expect(page.getByText(invalid, { exact: true })).toBeVisible();
  });
}

test('Webhook test dialog selects random or specified email', async ({ page }) => {
  const requests: any[] = [];
  let fail = false;
  await page.route('**/admin/mail_webhook/settings', route => route.fulfill({
    json: { enabled: true, url: 'https://example.com/webhook', method: 'POST', headers: '{}', body: '{}' },
  }));
  await page.route('**/admin/mail_webhook/test', route => {
    requests.push(route.request().postDataJSON());
    return route.fulfill({ status: fail ? 404 : 200, body: fail ? 'Mail not found' : '{"success":true}' });
  });
  await page.goto(`${FRONTEND_URL}/en/admin`);
  await page.getByText('Emails', { exact: true }).click();
  await page.getByText('Mail Webhook', { exact: true }).click();
  const open = page.locator('#app').getByRole('button', { name: 'Test', exact: true });
  await open.click();
  const dialog = page.getByRole('dialog');
  await expect(dialog.getByText('Random email', { exact: true })).toBeVisible();
  await expect(dialog.getByPlaceholder('Email ID', { exact: true })).toHaveCount(0);
  await dialog.getByRole('button', { name: 'Cancel', exact: true }).click();
  await expect(dialog).toBeHidden();
  expect(requests).toHaveLength(0);
  await open.click();
  await dialog.getByRole('button', { name: 'Test', exact: true }).click();
  await expect(dialog).toBeHidden();
  expect(requests).toHaveLength(1);
  expect(requests[0]).not.toHaveProperty('mail_id');
  await open.click();
  await dialog.getByText('Specify ID', { exact: true }).click();
  await dialog.getByRole('button', { name: 'Test', exact: true }).click();
  await expect(page.getByText('Enter a valid positive integer email ID', { exact: true })).toBeVisible();
  expect(requests).toHaveLength(1);
  await dialog.getByPlaceholder('Email ID', { exact: true }).fill('123');
  fail = true;
  await dialog.getByRole('button', { name: 'Test', exact: true }).click();
  await expect(page.getByText(/Mail not found/).first()).toBeVisible();
  await expect(dialog).toBeVisible();
  expect(requests[1].mail_id).toBe(123);
  fail = false;
  await dialog.getByRole('button', { name: 'Test', exact: true }).click();
  await expect(dialog).toBeHidden();
  expect(requests[2].mail_id).toBe(123);
  await open.click();
  await dialog.getByText('Random email', { exact: true }).click();
  await dialog.getByRole('button', { name: 'Test', exact: true }).click();
  await expect(dialog).toBeHidden();
  expect(requests[3]).not.toHaveProperty('mail_id');
});
