/* eslint-disable @typescript-eslint/no-unused-vars */
import { network } from 'hardhat';
import { HardhatRuntimeEnvironment } from 'hardhat/types';

module.exports = async ({
  getNamedAccounts,
  deployments,
}: HardhatRuntimeEnvironment) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;

  /* sample deploy script */
  const constract = await deploy('ContractName', {
    from: deployer,
    args: [],
    log: true,
  });
  log('------------------------------------');
};

module.exports.tags = ['all'];
