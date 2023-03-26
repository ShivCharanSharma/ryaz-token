import { ethers, network, upgrades } from 'hardhat';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeploymentSubmission } from 'hardhat-deploy/dist/types';

import { developmentChains, networkConfig } from '../helper-hardhat.config';
import { verify } from '../utils';

module.exports = async ({
  getNamedAccounts,
  deployments,
}: HardhatRuntimeEnvironment) => {
  const { log, save } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId as number;

  log('------------------------------------');
  const ryazioToken = await ethers.getContractFactory('RyazioToken', deployer);
  const ryazioTokenProxy = await upgrades.deployProxy(ryazioToken);
  await ryazioTokenProxy.deployed();
  const ryazioTokenProxyAddress = await ryazioTokenProxy.address;

  const artifact = await deployments.getExtendedArtifact('RyazioToken');
  const proxyDeployments: DeploymentSubmission = {
    address: ryazioTokenProxyAddress,
    ...artifact,
  };

  await save('RyazioToken', proxyDeployments);

  if (
    !developmentChains.includes(network.name) &&
    process.env.ETHERSCAN_API_KEY
  ) {
    await ryazioTokenProxy.deployTransaction.wait(
      networkConfig[chainId].blockConfirmations || 6
    );
    await verify(ryazioTokenProxyAddress, []);
  }
  log('Deploy RyazioToken Proxy done -> ', ryazioTokenProxyAddress);
};

module.exports.tags = ['all', 'RyazioToken'];
