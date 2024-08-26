/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token';
import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';

/**
 * @category Instructions
 * @category GlobalCreate
 * @category generated
 */
export const GlobalCreateStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number;
}>([['instructionDiscriminator', beet.u8]], 'GlobalCreateInstructionArgs');
/**
 * Accounts required by the _GlobalCreate_ instruction
 *
 * @property [_writable_, **signer**] payer
 * @property [_writable_] global
 * @property [] mint
 * @property [_writable_] globalVault
 * @category Instructions
 * @category GlobalCreate
 * @category generated
 */
export type GlobalCreateInstructionAccounts = {
  payer: web3.PublicKey;
  global: web3.PublicKey;
  systemProgram?: web3.PublicKey;
  mint: web3.PublicKey;
  globalVault: web3.PublicKey;
  tokenProgram?: web3.PublicKey;
};

export const globalCreateInstructionDiscriminator = 7;

/**
 * Creates a _GlobalCreate_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category GlobalCreate
 * @category generated
 */
export function createGlobalCreateInstruction(
  accounts: GlobalCreateInstructionAccounts,
  programId = new web3.PublicKey('MNFSTqtC93rEfYHB6hF82sKdZpUDFWkViLByLd1k1Ms'),
) {
  const [data] = GlobalCreateStruct.serialize({
    instructionDiscriminator: globalCreateInstructionDiscriminator,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.payer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.global,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.mint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.globalVault,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  });
  return ix;
}
