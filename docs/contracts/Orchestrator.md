## `Orchestrator`

Orchestrator contract in charge of managing the settings of the vaults and TCAP token



### `notLocked(address _contract, enum Orchestrator.Functions _fn, bytes32 _value)`

Throws if vault is locked.


checks if the timelocked value it's the same

### `validVault(contract IVaultHandler _vault)`

Throws if vault is not valid.




### `validTCAP(contract TCAP _tcap)`

Throws if TCAP Token is not valid.




### `validChainlinkOracle(address _oracle)`

Throws if Chainlink Oracle is not valid.





### `initializeVault(contract IVaultHandler _vault, uint256 _divisor, uint256 _ratio, uint256 _burnFee, uint256 _liquidationPenalty, address _tcapOracle, contract TCAP _tcapAddress, address _collateralAddress, address _collateralOracle, address _ethOracle)` (public)

Intialize the Vault Contract


Only owner can call it
Validates if contracts support their interface

### `unlockFunction(address _contract, enum Orchestrator.Functions _fn, bytes32 _hash)` (public)

Unlocks conctract function


Only owner can call it
Unlock time is = now + _TIMELOCK

### `lockVaultFunction(contract IVaultHandler _vault, enum Orchestrator.Functions _fn)` (public)

Locks vault function


Only owner can call it
Lock happens immediately

### `setDivisor(contract IVaultHandler _vault, uint256 _divisor)` (public)

Sets the divisor of a vault


Only owner can call it
Validates if _vault is valid and not locked
Locks function after using

### `setRatio(contract IVaultHandler _vault, uint256 _ratio)` (public)

Sets the ratio of a vault


Only owner can call it
Validates if _vault is valid and not locked
Locks function after using

### `setBurnFee(contract IVaultHandler _vault, uint256 _burnFee)` (public)

Sets the burn fee of a vault


Only owner can call it
Validates if _vault is valid and not locked
Locks function after using

### `setLiquidationPenalty(contract IVaultHandler _vault, uint256 _liquidationPenalty)` (public)

Sets the liquidation penalty of a vault


Only owner can call it
Validates if _vault is valid and not locked
Locks function after using

### `setTCAP(contract IVaultHandler _vault, contract TCAP _tcap)` (public)

Sets the TCAP ERC20 Contract


Only owner can call it
Validates if _vault and tcap are valid and not locked
Locks function after using

### `setTCAPOracle(contract IVaultHandler _vault, address _tcapOracle)` (public)

Sets the TCAP Oracle Contract


Only owner can call it
Validates if _vault and oracle are valid and not locked
Locks function after using

### `setCollateral(contract IVaultHandler _vault, contract IERC20 _collateral)` (public)

Sets the Collateral Contract


Only owner can call it
Validates if _vault is valid and not locked
Locks function after using

### `setCollateralOracle(contract IVaultHandler _vault, address _collateralOracle)` (public)

Sets the Collateral Oracle Contract


Only owner can call it
Validates if _vault and oracle are valid and not locked
Locks function after using

### `setETHOracle(contract IVaultHandler _vault, address _ethOracles)` (public)

Sets the ETH Price Oracle Contract


Only owner can call it
Validates if _vault and oracle are valid and not locked
Locks function after using

### `pauseVault(contract IVaultHandler _vault)` (public)

Pauses the Vault


Only owner can call it
Validates if _vault is valid

### `unpauseVault(contract IVaultHandler _vault)` (public)

Unpauses the Vault


Only owner can call it
Validates if _vault is valid

### `retrieveVaultFees(contract IVaultHandler _vault)` (public)

Retrieves a vault fees and put it on the Orchestrator


Only owner can call it
Validates if _vault is valid

### `retrieveFees()` (public)

Retrieves the fees on the orchestrator


Only owner can call it
Transfer the balance to the contract owner

### `enableTCAPCap(contract TCAP _tcap, bool _enable)` (public)

Enables or disables the TCAP Cap


Only owner can call it
Validates if _tcap is valid

### `setTCAPCap(contract TCAP _tcap, uint256 _cap)` (public)

Enables or disables the TCAP Cap


Only owner can call it
Validates if _tcap is valid

### `addTCAPVault(contract TCAP _tcap, contract IVaultHandler _vault)` (public)

Adds Vault to TCAP ERC20


Only owner can call it
Validates if _tcap is valid

### `receive()` (external)

Allows the contract to receive money




### `LogUnlock(address _contract, enum Orchestrator.Functions _fn, bytes32 _hash)`



Logs the unlock function. 

