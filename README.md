```
++++++++++++              +++++        ++++       ++++   ++++           ++++++++++++        ++++++  
++++++++++++++++       +++++++++++     ++++       ++++   ++++           ++++++++++++     ++++++++++++
++++          ++++   ++++       ++++   ++++       ++++   ++++               ++++       ++++        ++++
++++          ++++   +++++++++++++++   +++++++++++++++   ++++               ++++       ++++++++++++++++
++++          ++++   +++++++++++++++   +++++++++++++++   ++++               ++++       ++++++++++++++++
++++          ++++   ++++       ++++   ++++       ++++   ++++               ++++       ++++        ++++
++++++++++++++++     ++++       ++++   ++++       ++++   ++++++++++++   ++++++++++++   ++++        ++++
++++++++++++.        ++++       ++++   ++++       ++++   ++++++++++++   ++++++++++++   ++++        ++++
```

# Dahlia Finance

**Leveraged Yield Farming on Celo**
 
 
[Dahlia](https://alfajores.dahlia.finance) is a leveraged yield farming protocol on [Celo](https://celo.org/) that offers high APY to Celo token lenders and farmers uncollateralized leverage on staked farming pools.

## Smart Contract Structure


### Bank([code](./contracts/Bank.sol))

Bank is the smart contract that manages all leveraged yeild farming positions. All interactions to Dahlia happen through this smart contract. If you are a rich wizard you can deposit your ETH/BNB to earn intersts. If you are a poor farmer 👩‍🌾, you can open a new position on Bank by specifying the debt you will take anda Goblin who will work for your position.

### Goblins ([code](./contracts/Goblin.sol))

### UniswapGoblin ([code](./contracts/UniswapGoblin.sol))

### StrategyAddETHOnly([code](./contracts/StrategyAddETHOnly.sol))

### StrategyLiquidate ([code](./contracts/StrategyLiquidate.sol))

### Active Bug Bounty Program: https://immunefi.com/bounty/alphafinance/

## License

[MIT License](https://opensource.org/licenses/MIT)
