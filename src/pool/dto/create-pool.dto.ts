import { IsBoolean, IsEmpty, IsNotEmpty, IsObject, IsString, IsUUID, } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { TokenDto } from 'src/token/token.dto';

export class CreatePoolDto {

  @ApiProperty({ example: '0x02653cae0cad6b3adbc76bc4f7a3ce6693c3ed7', required: false })
  @IsString()
  address: string;

  @ApiProperty({ example: 'Weighted', required: false })
  @IsString()
  type: string;

  @ApiProperty({ example: 'THB-USD', required: false })
  @IsString()
  name: string;

  @ApiProperty({ example: 'THB-USD', required: false })
  @IsString()
  symbol: string;

  @ApiProperty({ example: 'true', required: false })
  @IsBoolean()
  swapEnabled: boolean;

  @ApiProperty({ example: '0.01', required: false })
  @IsString()
  swapFee: string;
  

  @ApiProperty({ example: '110', required: false })
  @IsString()
  owner: string;

  @ApiProperty({ example: '1', required: false })
  @IsString()
  totalWeight: string;

  @ApiProperty({ example: '9.9', required: false })
  @IsString()
  totalSwapVolume: string;

  @ApiProperty({ example: '9.9', required: false })
  @IsString()
  totalSwapFee: string;

  @ApiProperty({ example: '9.9', required: false })
  @IsString()
  totalLiquidity: string;

  @ApiProperty({ example: '9.9', required: false })
  @IsString()
  totalShares: string;

  @ApiProperty()
  @IsObject()
  token: TokenDto;

}
