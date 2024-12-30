import { NextResponse } from 'next/server';
import { createBusiness, getBusinessByUserId, getBusinessById, getAllBusinesses, updateBusiness, deleteBusiness } from '@/actions/business.actions';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');
    const businessId = searchParams.get('businessId');

    if (userId) {
      const business = await getBusinessByUserId(userId);
      return NextResponse.json(business, { status: 200 });
    } else if (businessId) {
      const business = await getBusinessById(Number(businessId));
      return NextResponse.json(business, { status: 200 });
    } else {
      const businesses = await getAllBusinesses();
      return NextResponse.json(businesses, { status: 200 });
    }
  } catch (error) {
    console.error('Error fetching business data:', error);
    return NextResponse.json({ error: 'Failed to fetch business data' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

    if (!data.userId || !data.name || !data.email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const business = await createBusiness(data);
    return NextResponse.json(business, { status: 201 });
  } catch (error) {
    console.error('Error creating business:', error);
    return NextResponse.json({ error: 'Failed to create business' }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const { businessId, ...data } = await req.json();

    if (!businessId) {
      return NextResponse.json({ error: 'Missing businessId' }, { status: 400 });
    }

    const updatedBusiness = await updateBusiness(Number(businessId), data);
    return NextResponse.json(updatedBusiness, { status: 200 });
  } catch (error) {
    console.error('Error updating business:', error);
    return NextResponse.json({ error: 'Failed to update business' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const businessId = searchParams.get('businessId');

    if (!businessId) {
      return NextResponse.json({ error: 'Missing businessId' }, { status: 400 });
    }

    const deletedBusiness = await deleteBusiness(Number(businessId));
    return NextResponse.json(deletedBusiness, { status: 200 });
  } catch (error) {
    console.error('Error deleting business:', error);
    return NextResponse.json({ error: 'Failed to delete business' }, { status: 500 });
  }
}
