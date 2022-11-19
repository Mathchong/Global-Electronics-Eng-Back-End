import AuthRepository from "../repositories/authRpository";
import { userData } from "../repositories/authRpository";
import { encrypt, verifyHash } from "../utils/bcrypt";
import { generateToken } from "../utils/jwt";

const authRepo = new AuthRepository();

export default class AuthService {
  async createUser(newUserData: userData) {
    const existingUser = await authRepo.getUserByUsername(newUserData.username);

    if (existingUser)
      throw { name: "conflict", message: "User already exists" };

    newUserData.password = encrypt(newUserData.password);

    return await authRepo.createUser(newUserData);
  }

  async userLogin(userData: userData) {
    let existingUser = await authRepo.getUserByUsername(userData.username);
    if (!existingUser)
      throw { name: "Unauthorized", message: "Invalid Credentials" };

    const matches = verifyHash(userData.password, existingUser.password);

    if (!matches)
      throw { name: "Unauthorized", message: "Invalid Credentials" };
    
      const { password, ...user } = existingUser;
    return generateToken(user);
  }
}
