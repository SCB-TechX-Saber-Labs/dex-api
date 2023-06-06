import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn, JoinColumn } from 'typeorm';
import {  TokenEntity} from './token.entity';


@Entity('pool')
export class PoolEntity {
  @PrimaryGeneratedColumn('uuid')
  pool_id: string;

  @Column('text')
  address: string;

  @Column('text')
  type: string

  @Column('text')
  symbol:string

  @Column('text')
  name:string

  @Column("bool")
  swapEnabled:boolean

  @Column('text')
  swapFee:string

  @Column('text')
  owner:string

  @Column('text')
  totalWeight:string

  @Column('text')
  totalSwapVolume:string

  @Column('text')
  totalSwapFee:string

  @Column('text')
  totalLiquidity:string

  @Column('text')
  totalShares:string

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
  
  @OneToMany(() => TokenEntity,(token) => token.pool)
  
  @JoinColumn({
    name: 'token_id',
    referencedColumnName: 'token_id',
  })
  tokens?: TokenEntity[];
}