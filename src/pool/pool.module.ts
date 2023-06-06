import { Module } from '@nestjs/common';
import { PoolService } from './pool.service';
import { PoolController } from './pool.controller';
import { PoolEntity } from 'src/pool/entities/pool.entity';
import { TokenEntity } from 'src/pool/entities/token.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TokenService } from 'src/token/token.service';

@Module({
  imports: [TypeOrmModule.forFeature([PoolEntity,TokenEntity])],
  controllers: [PoolController],
  providers: [PoolService,TokenService],
  exports: [PoolService,TokenService]
})
export class PoolModule {}
