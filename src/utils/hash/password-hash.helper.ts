import * as bcrypt from 'bcrypt';

export class PasswordHelper {
  static async hash(password: string): Promise<string> {
    const saltOrRounds = 10;
    const hash = await bcrypt.hash(password, saltOrRounds);
    return hash;
  }

  static async comparePassword(
    password: string,
    hashed: string,
  ): Promise<boolean> {
    return await bcrypt.compare(password, hashed);
  }
}
