import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Create a new user
 */
export async function createUser(data: {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dateOfBirth: Date;
  role: string;
}) {
  try {
    const user = await prisma.user.create({
      data,
    });
    return user;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

/**
 * Get a user by ID
 */
export async function getUserById(id: number) {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    throw error;
  }
}

/**
 * Get all users
 */
export async function getAllUsers() {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
}

/**
 * Delete a user by ID
 */
export async function deleteUser(id: number) {
  try {
    const user = await prisma.user.delete({
      where: { id },
    });
    return user;
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
}
