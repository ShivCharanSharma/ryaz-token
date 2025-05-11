import { run } from 'hardhat';

export const verify = async (
  contractAddress: string,
  constructorArgs: unknown[],
) => {
  try {
    await run('verify:verify', {
      address: contractAddress,
      constructorArguments: constructorArgs,
    });
  } catch (error: any) {
    if (error.message.toLowerCase().includes('verifying')) {
      console.log('Already verified');
    } else {
      console.log(error);
    }
  }
};
