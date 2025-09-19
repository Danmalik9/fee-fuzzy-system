import {
  Clarinet,
  Tx,
  Chain,
  Account,
  types,
} from 'https://deno.land/x/clarinet@v1.5.0/index.ts';

Clarinet.test({
  name: "Verify Fuzzy Guild Hub Core Functionality",
  async fn(chain: Chain, accounts: Map<string, Account>) {
    const deployer = accounts.get('deployer')!;
    const account1 = accounts.get('wallet_1')!;

    // Test guild creation
    let block = chain.mineBlock([
      Tx.contractCall('fuzzy-guild-hub', 'create-guild', [
        types.ascii('Dynamic Innovators'),
        types.utf8('Collective for emerging technologies'),
        types.uint(1000000)
      ], deployer.address)
    ]);

    // Initial checks
    block.receipts[0].result.expectOk();
  }
});