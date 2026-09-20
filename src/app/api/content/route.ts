import { NextResponse } from 'next/server';
import { getSiteData, updateSiteData } from '@/lib/db';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function GET() {
  try {
    const data = getSiteData();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const updated = updateSiteData(body);
    return NextResponse.json({ success: true, data: updated });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
