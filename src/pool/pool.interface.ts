export interface PoolData {
  pool_id : string
  address : string;
  type: string;
  name: string;
  swapEnabled: boolean;
  swapFee: string;
  totalWeight: string;
  totalSwapVolume: string;
  totalSwapFee: string;
  totalLiquidity: string;
  totalShares: string;
}

export interface PoolRO {
  pool: PoolData;
}