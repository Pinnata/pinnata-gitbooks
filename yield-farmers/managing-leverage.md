# Managing leverage

**The amount of leverage a users can access is determined by the amount of assets being supplied as collateral a a given time relative to the assets borrowed.** 

\*\*\*\*

_Collateral credit:_ Each asset has its own collateral credit value. A collateral credit value determines how much credit is gained from collateralizing an asset. Note: collateral is only taken from the liquidity supplied on step 1 when opening a farming position.

_Borrowing credit_: Each asset also has its own borrowing credit value. A borrowing credit value determines how much credit \(received from collateralizing an asset\) is consumed from borrowing an asset.

The collateral credit and borrowing credit of an asset depend on the volatility of the asset price. If an asset is volatile, the collateral credit will be low and the borrowing credit will be high. For instance, if a user supply ETH as collateral to borrow DAI, he would be able to borrow more DAI than if he were to otherwise supply ETH to borrow YFI \(or any less stable asset\).

In order to make this simpler for users, Dahlia does not require the user to manage one's debt ratio, and the amount of leverage accessible to a yield farmer is automatically calculated in with a 100% maximum debt ratio.  

## Liquidation 

Once the debt ratio exceeds 100%, a user is automatically at risk of liquidation. In this case, a user will want to head over to the position tab and;

1. Add collateral to their position
2. Payback their loans 

