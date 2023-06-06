import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { PoolEntity } from 'src/pool/entities/pool.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PoolRO } from './pool.interface';
import { CreatePoolDto } from './dto/create-pool.dto';
import { validate } from 'class-validator';
import { TokenEntity } from './entities/token.entity';
import { TokenService } from 'src/token/token.service';

require('dotenv').config();
@Injectable()
export class PoolService {


  constructor(
    @InjectRepository(PoolEntity)
    private readonly poolRepository: Repository<PoolEntity>,
  ) { }

  @Inject(TokenService)
  private readonly tokenService: TokenService;


  async create(createPoolDto: CreatePoolDto): Promise<PoolRO> {

    let pool = new PoolEntity();
    pool.address = createPoolDto.address
    pool.type = createPoolDto.type
    pool.symbol = createPoolDto.symbol
    pool.name = createPoolDto.name
    pool.swapEnabled = createPoolDto.swapEnabled
    pool.swapFee = createPoolDto.swapFee
    pool.owner = createPoolDto.owner
    pool.totalWeight = createPoolDto.totalWeight
    pool.totalSwapVolume = createPoolDto.totalSwapVolume
    pool.totalSwapFee = createPoolDto.totalSwapFee
    pool.totalLiquidity = createPoolDto.totalLiquidity
    pool.totalShares = createPoolDto.totalShares
 
    const errors = await validate(pool);

    if (errors.length > 0) {
      const _errors = { address : 'Pool input is not valid.' };
      throw new HttpException({ message: 'Input data validation failed', _errors }, HttpStatus.BAD_REQUEST);

    } else {

      let token = new TokenEntity();
      token.address = createPoolDto.token.address;
      token.name = createPoolDto.token.name;
      token.weight = createPoolDto.token.weight;
      token.value = createPoolDto.token.value;
      token.isApprove = createPoolDto.token.isApprove;
      token.isBind = createPoolDto.token.isBind;

      const tokenSaved = await this.tokenService.create(token);
      pool.tokens = [tokenSaved];
      console.log('tokenSaved ',tokenSaved)
      
      const poolSaved = await this.poolRepository.save(pool);

      console.log('poolSaved ',poolSaved);
      
      return this.buildPoolRo(poolSaved);
    }
  }

  async findAll(): Promise<PoolEntity[]> {
    return await this.poolRepository.find({
      relations: {
          tokens: true,
      },
  })
  }

  async findById(pool_id: string): Promise<PoolRO> {

    const pool = await this.poolRepository.findOne(
      {
        where: { pool_id: pool_id },
      }
    );

    if (!pool) {
      const errors = { Pool: ' not found' };
      throw new HttpException({ errors }, 401);
    }

    return this.buildPoolRo(pool);
  }

  private buildPoolRo(pool: PoolEntity) {
    const poolRO = {
      pool_id: pool.pool_id,
      address: pool.address,
      type: pool.type,
      name: pool.name,
      swapEnabled: pool.swapEnabled,
      swapFee: pool.swapFee,
      totalWeight: pool.totalWeight,
      totalSwapVolume: pool.totalSwapVolume,
      totalSwapFee: pool.totalSwapFee,
      totalLiquidity: pool.totalLiquidity,
      totalShares: pool.totalShares
    };

    console.log('poolRO ',poolRO)
    return { pool : poolRO };
  }
}
