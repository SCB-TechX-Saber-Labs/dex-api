import { IsEmpty, IsNotEmpty, IsString, IsUUID, } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class TokenDto {

  @ApiProperty({ example: '0xdb00139222c99e9098def2cebff3f36ff', required: true })
  @IsNotEmpty()
  address: string;

  @ApiProperty({ example: 'THB', required: true })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: '50', required: true })
  @IsNotEmpty()
  weight: string;

  @ApiProperty({ example: '1000', required: true })
  @IsNotEmpty()
  value: string;

  @ApiProperty({ example: true, required: true })
  @IsNotEmpty()
  isApprove: boolean;

  @ApiProperty({ example: true, required: true })
  @IsNotEmpty()
  isBind: boolean;

}