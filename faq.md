# FAQ

## What is Dahlia Finance?

We are a leverage yield farming protocol, helping liquidity providers maximize their yield by accessing under-collateralized leverage, and lenders earn the highest APY on their Celo assets. 

## How kind of APY can I expect?

This depends on several factors including the fees earned from liquidity providing, rewards offered, and the amount of leverage.  

## What is the difference between a Liquidity Providing pool and Yield Farming pool? 

While they innately both provide liquidity to an AMM, yield farming pools have the added benefit of earning extra rewards for the LP in the form of a DEX's governance tokens. 

## What is a Debt Ratio?

The debt ratio is the collateral amount over the borrow amount with a safety factor that accounts for the volatility of both assets. This determines the amount of leverage that is available at hand. In order to stay away from liquation, the debt ratio can never pass 100%. Once the debt ratio is above 100%, the position is able to be liquidated by any third party.

## How much leverage can I access?

This dependent on several factors. Most notably the pool itself. On stablecoin pairs, a liquidity provider could in theory access 9x their initial capital, the maximum amount of leverage.

## What assets can I lend out and earn interest on? 

Right now, the only supported assets are Celo, mcUSD, and mcEUR. In the near future, we will support cross chain assets as well as more Celo-native assets like governance tokens. 

## What is the Fountain of Youth?

The Fountain of Youth is a fork of the Iron Bank, a simple money market with much of the functionality taken away. It is the underlying money market used by Dahlia currently only for interest rates.

## Can I get liquidated? 

When the debt ratio is at or above 100%, leveraged positions are at risk of liquidation. In quantifiable terms, the borrowing credit, cannot exceed the collateral credit.

## Has Dahlia been audited?

Yes! We were audited by Braham Systems on July 2, 2021. Check our Audit tab for more details and a link to the report. 
