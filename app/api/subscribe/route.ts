import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: 'TEDx Kings Square <subscribe@tedxkingssquarewomen.com.ng>',
      to: ['subscribe@tedxkingssquarewomen.com.ng'],
      subject: 'New Newsletter Subscription',
      html: `<p>New subscriber: <strong>${email}</strong></p>`,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    return NextResponse.json({ error: body }, { status: res.status });
  }

  return NextResponse.json({ ok: true });
}
