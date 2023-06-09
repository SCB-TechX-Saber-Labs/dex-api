import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './database/database.providers';
import { PoolModule } from './pool/pool.module';
import { TokenModule } from './token/token.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    PoolModule,
    ConfigModule.forRoot({
      isGlobal: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
