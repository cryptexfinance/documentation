## `ETHVaultHandler`

Contract in charge of handling the TCAP Vault and stake using a Collateral ERC20




### `constructor(contract Orchestrator orchestrator)` (public)





### `addCollateralETH()` (public)

Adds collateral to vault using ETH


value should be higher than 0

### `removeCollateralETH(uint256 _amount)` (public)

Removes not used collateral from collateral


value should be higher than 0

### `safeTransferETH(address to, uint256 value)` (internal)

Allows the safe transfer of ETH



### `receive()` (external)

Only allows the contract to receive money from the WETH contract




