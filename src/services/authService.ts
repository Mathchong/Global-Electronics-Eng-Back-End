import AuthRepository from "../repositories/authRpository";
import { userData } from "../repositories/authRpository";
import { encrypt } from "../utils/bcrypt";

const authRepo = new AuthRepository();

export default class AuthService {
  async createUser(newUserData: userData) {
    const existingUser = await authRepo.getUserByUsername(newUserData.username);

    if (existingUser)
      throw { name: "conflict", message: "User already exists" };

    newUserData.password = encrypt(newUserData.password);
    
    return await authRepo.createUser(newUserData);
  }
}
