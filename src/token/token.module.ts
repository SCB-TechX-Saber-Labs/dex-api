import { Module } from '@nestjs/common';
import { TokenService } from './token.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TokenEntity } from 'src/pool/entities/token.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TokenEntity])],
  controllers: [],
  providers: [TokenService],
  exports: [TokenService],
})
export class TokenModule {}