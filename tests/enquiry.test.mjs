import test from 'node:test';
import assert from 'node:assert/strict';
import { composeMessage, whatsappUrl, fields } from '../src/enquiry.mjs';

test('every entered field survives the WhatsApp URL encoding round trip', () => {
  const input = Object.fromEntries(fields.map(([key]) => [key, `${key}: കേരളം & + #? 🌿\nsecond line`]));
  const message = composeMessage(input);
  const url = new URL(whatsappUrl('919567650963', message));
  assert.equal(url.pathname, '/919567650963');
  assert.equal(url.searchParams.get('text'), message);
  for (const [key, label] of fields) assert.ok(message.includes(`${label}: ${input[key]}`));
});
test('empty optional fields are omitted and oversized messages are rejected without truncation', () => {
  const message = composeMessage({ name: ' Alex ', phone: '1234567890', budget: '' });
  assert.ok(message.includes('Name: Alex'));
  assert.ok(!message.includes('Budget:'));
  assert.throws(() => composeMessage({ description: 'x'.repeat(3501) }), /too long/);
});
test('invalid destination numbers cannot be used for a handoff', () => {
  for (const number of ['', '+919567650963', '0000', 'javascript:alert(1)']) {
    assert.throws(() => whatsappUrl(number, 'Hello'), /verified/);
  }
});
