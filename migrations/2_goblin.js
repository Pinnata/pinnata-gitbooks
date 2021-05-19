const Bank = artifacts.require('Bank');
const SimpleBankConfig = artifacts.require('SimpleBankConfig');
const WETH = artifacts.require('WETH');
const UniswapV2Factory = artifacts.require('UniswapV2Factory');
const UniswapV2Router02 = artifacts.require('UniswapV2Router02');
const UniswapV2Pair = artifacts.require('UniswapV2Pair');
const MockERC20 = artifacts.require('MockERC20');
const StrategyAllETHOnly = artifacts.require('StrategyAllETHOnly');
const StrategyLiquidate = artifacts.require('StrategyLiquidate');
const StakingRewards = artifacts.require('StakingRewards');
const UniswapGoblin = artifacts.require('UniswapGoblin');

module.exports = function (deployer, network, [creator]) {
  // if (network !== 'kovan') return;

  deployer.then(async () => {
    const router = await UniswapV2Router02.at('0xe3d8bd6aed4f159bc8000a9cd47cffdb95f96121');  
    console.log(await router.factory());     
    const factory = await UniswapV2Factory.at(await router.factory());
    console.log("in")

    const weth = await WETH.at("0xF194afDf50B03e69Bd7D057c1Aa9e10c9954E4C9");
    console.log(1)
    await deployer.deploy(MockERC20, 'MOCK', 'MOCK');
    const token = await MockERC20.deployed();
    console.log(2)

    await deployer.deploy(MockERC20, 'UNISWAP', 'UNI');
    const uni = await MockERC20.deployed();
    console.log(3)

    await factory.createPair(weth.address, token.address);
    const pair = await factory.getPair(token.address, weth.address);
    const lp = await UniswapV2Pair.at(pair);
    console.log(4)

    await deployer.deploy(StrategyAllETHOnly, router.address);
    const addStrat = await StrategyAllETHOnly.deployed();
    console.log(5)

    await deployer.deploy(StrategyLiquidate, router.address);
    const liqStrat = await StrategyLiquidate.deployed();
    console.log(5)

    await deployer.deploy(
      SimpleBankConfig,
      web3.utils.toWei('1', 'ether'),
      '3472222222222', // 30% per year
      '1000', // 10% reserve pool
      '1000' // 10% Kill prize
    );
    console.log(6)

    const config = await SimpleBankConfig.deployed();
    console.log(7)

    await deployer.deploy(Bank, config.address);
    const bank = await Bank.deployed();
    console.log(8)

    await deployer.deploy(StakingRewards, creator, creator, uni.address, lp.address);
    const staking = await StakingRewards.deployed();
    console.log(9)

    await deployer.deploy(
      UniswapGoblin,
      bank.address,
      staking.address,
      router.address,
      token.address,
      uni.address,
      addStrat.address,
      liqStrat.address,
      '100'
    );
    console.log(10)

    const goblin = await UniswapGoblin.deployed();
    console.log(11)

    // setup goblin to config
    await config.setGoblin(goblin.address, true, true, '7000', '8000');
    console.log(12)

    // mint mock token to deployer
    await token.mint(creator, web3.utils.toWei('100', 'ether'));
    await uni.mint(creator, web3.utils.toWei('100', 'ether'));
  });
};
