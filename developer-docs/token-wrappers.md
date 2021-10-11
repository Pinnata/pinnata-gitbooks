# Token Wrappers

#### Supported token wrappers:

* **WERC20** –  simple wrap for Symmetric ERC-20 LP tokens without staking logic
* **WLiquidityGauge** – wrapper for Mobius and Curve ERC-20 LP tokens for staking to Curve's Liquidity Gauge
* **WStakingRewards** – wrapper for Ubeswap and Sushiswap LP tokens that can be stake to staking contracts with Synthetix's `IStakingRewards` interface.

> NOTE: Each of these wrappers may have different encodings due to different interactions with different protocols.

## ERC-1155 Tokens

Based on the Alpha Homora v2 contracts, farming positions entered through Dahlia are tokenized into ERC-1155 tokens due some level of non-fungibility. 

On the majority of DEXs, and all of them on Celo, liquidity providers receive ERC-20 LP tokens in return for adding capital to the reserves of a given pool. In the Dahlia protocol, this is directly posted as collateral in the `DahliaBank`, where LPs get a minted ERC-1155 token in return. This is done so that the actual ERC-20 LP tokens can be staked in a staking contract and continue earning rewards. 

Data from the LP tokens as well as the pool ID and rewards per  share is encoded into the ERC-1155 token that is minted. 

After a user closes their position, the total amount of rewards earned from farming can be calculated from the following formula:

`shareBalance` \* (`currentRewardPerShare` from staking rewards contract - token's `rewardPerShare`
