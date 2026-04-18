import type { Handler } from '@netlify/functions';

const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { name, email } = JSON.parse(event.body ?? '{}');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: 'TEDx Kings Square <register@entueestae.resend.app>',
      to: ['register@entueestae.resend.app'],
      subject: 'New Registration Interest',
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p>`,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    return { statusCode: res.status, body };
  }

  return { statusCode: 200, body: JSON.stringify({ ok: true }) };
};

export { handler };
