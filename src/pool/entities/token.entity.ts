import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from 'typeorm';
import { PoolEntity } from './pool.entity';

@Entity('token')
export class TokenEntity {
  @PrimaryGeneratedColumn('uuid')
  token_id: string;

  @Column('text')
  address: string;

  @Column('text')
  name: string

  @Column('text')
  weight:string

  @Column('text')
  value:string

  @Column("bool")
  isApprove:boolean

  @Column("bool")
  isBind:boolean

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @ManyToOne(() => PoolEntity, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'pool_id',
    referencedColumnName: 'pool_id',
  })
  pool?: PoolEntity;
}