# Managing leverage

**The amount of leverage a users can access is determined by the amount of assets being supplied as collateral a a given time relative to the assets borrowed.**&#x20;

Positions are defined by collateral and borrows. Collateral is the current value of the entire position multiplied by the collateral factor for the underlying assets, usually the lp token for that pool.

Each asset also has its own borrowing factor. A borrowing credit value determines how much credit (received from collateralizing an asset) is consumed from borrowing an asset.

The collateral factor and borrowing factor of an asset depend on the volatility of the asset price. If an asset is volatile, the collateral credit will be low and the borrowing credit will be high. For instance, if a user supply CELO as collateral to borrow cUSD, he would be able to borrow more cUSD than if he were to otherwise supply CELO to borrow UBE (or any less stable asset).

In order to make this simpler for users, Dahlia does not require the user to manage one's debt ratio, and the amount of leverage accessible to a yield farmer is automatically calculated in with a 100% maximum debt ratio. &#x20;

## Liquidation&#x20;

Once the debt ratio exceeds 100%, a user is automatically at risk of liquidation. In this case, a user will want to head over to the position tab and;

1. Add collateral to their position
2. Payback their loans&#x20;
