
import { NextResponse } from 'next/server';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const organization_id = searchParams.get('organization_id');
  const reverse_sort = searchParams.get('reverse_sort');
  const page = searchParams.get('page') || 1;
  const size = searchParams.get('size') || 10;
  const Appid = searchParams.get('Appid');
  const Apikey = searchParams.get('Apikey');

  try {
    // Replace this URL with the actual endpoint of your external API
    const response = await fetch(
      `https://api.timbu.cloud/products?organization_id=${organization_id}&reverse_sort=${reverse_sort}&page=${page}&size=${size}&Appid=${Appid}&Apikey=${Apikey}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }

    const data = await response.json();
    const total = data.total; 
    const items = data.items; 

    return NextResponse.json({ items, total });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}