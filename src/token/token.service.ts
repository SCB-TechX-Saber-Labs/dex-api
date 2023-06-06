import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import axios from 'axios';
import { validate } from 'class-validator';
import { TokenEntity } from 'src/pool/entities/token.entity';


require('dotenv').config();
@Injectable()
export class TokenService {
  constructor(
    @InjectRepository(TokenEntity)
    private readonly tokenRepository: Repository<TokenEntity>
  ) {
  }
  
 async create(token : TokenEntity) {

  const created = await this.tokenRepository.save(token);
  
  return created;
  
 }

}
