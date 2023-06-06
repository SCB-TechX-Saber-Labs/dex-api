import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseConfig {
  public host: string = process.env.DB_HOST;
  public username: string = process.env.DB_USERNAME;
  public password: string = process.env.DB_PASSWORD;
  public database: string = process.env.DB_NAME;
}
