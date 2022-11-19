import prisma from "../config/database"
import { user } from "@prisma/client"

export default class AuthRepository{
    async createUser(userInfo: userData): Promise<user>{
        return await prisma.user.create({data: userInfo})
    }

    async getUserByUsername(username: string): Promise<user|null> {
        return await prisma.user.findUnique({where: {username}})
    }
}


export type userData = Omit<user, 'id'>