
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createBusiness = async (data: {
  userId: string;
  name: string;
  description?: string;
  logo?: string;
  email: string;
  phone?: string;
  website?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
  facebook?: string;
  twitter?: string;
  instagram?: string;
  linkedin?: string;
  industry?: string;
  tags?: string[];
}) => {
  try {
    const business = await prisma.business.create({
      data: {
        name: data.name,
        slug: data.name.toLowerCase().replace(/\s+/g, '-'),
        description: data.description || '',
        logo: data.logo || '',
        email: data.email,
        phone: data.phone || '',
        website: data.website || '',
        addressLine1: data.addressLine1 || '',
        addressLine2: data.addressLine2 || '',
        city: data.city || '',
        state: data.state || '',
        postalCode: data.postalCode || '',
        country: data.country || '',
        facebook: data.facebook || '',
        twitter: data.twitter || '',
        instagram: data.instagram || '',
        linkedin: data.linkedin || '',
        industry: data.industry || '',
        tags: data.tags || [],
        owner: {
          connect: { id: data.userId }, // Connect to the user
        },
      },
    });

    return business;
  } catch (error) {
    console.error('Error creating business:', error);
    throw error;
  }
};


export const getBusinessByUserId = async (userId: string) => {
    try {
      const business = await prisma.business.findFirst({
        where: { ownerId: userId },
      });
      return business;
    } catch (error) {
      console.error('Error fetching business by user ID:', error);
      throw error;
    }
  };
  


  export const getBusinessById = async (businessId: number) => {
    try {
      const business = await prisma.business.findUnique({
        where: { id: businessId },
      });
      return business;
    } catch (error) {
      console.error('Error fetching business by business ID:', error);
      throw error;
    }
  };
  


  export const getAllBusinesses = async () => {
    try {
      const businesses = await prisma.business.findMany();
      return businesses;
    } catch (error) {
      console.error('Error fetching all businesses:', error);
      throw error;
    }
  };
  

  export const updateBusiness = async (
    businessId: number,
    data: Partial<{
      name: string;
      description: string;
      logo: string;
      email: string;
      phone: string;
      website: string;
      addressLine1: string;
      addressLine2: string;
      city: string;
      state: string;
      postalCode: string;
      country: string;
      facebook: string;
      twitter: string;
      instagram: string;
      linkedin: string;
      industry: string;
      tags: string[];
    }>
  ) => {
    try {
      const business = await prisma.business.update({
        where: { id: businessId },
        data,
      });
      return business;
    } catch (error) {
      console.error('Error updating business:', error);
      throw error;
    }
  };

  

  export const deleteBusiness = async (businessId: number) => {
    try {
      // Delete the business
      const deletedBusiness = await prisma.business.delete({
        where: { id: businessId },
      });
  
      // Remove reference from user
      await prisma.user.updateMany({
        where: { businessId },
        data: { businessId: null },
      });
  
      return deletedBusiness;
    } catch (error) {
      console.error('Error deleting business:', error);
      throw error;
    }
  };
  