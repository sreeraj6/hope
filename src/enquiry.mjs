export const MAX_MESSAGE_LENGTH = 3500;
export const fields = [
  ['name', 'Name'], ['phone', 'Phone'], ['service', 'Service'],
  ['property', 'Property'], ['location', 'Location'],
  ['stage', 'Project stage'], ['cameras', 'Approx. cameras / coverage'],
  ['time', 'Preferred contact time'], ['budget', 'Budget'],
  ['date', 'Preferred site-visit date (not confirmed)'], ['description', 'Requirements'],
];
export function composeMessage(data) {
  const lines = fields.flatMap(([key, label]) => {
    const value = String(data[key] ?? '').trim();
    return value ? [`${label}: ${value}`] : [];
  });
  const message = `Hello Hope Networking, I'd like to discuss a project.\n\n${lines.join('\n')}\n\nPlease let me know the next steps.`;
  if (message.length > MAX_MESSAGE_LENGTH) throw new Error('Your enquiry is too long. Please shorten it to 3,500 characters in total.');
  return message;
}
export function whatsappUrl(number, message) {
  if (!/^[1-9]\d{7,14}$/.test(number)) throw new Error('A verified WhatsApp number is not available yet.');
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
