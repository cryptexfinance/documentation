## `TCAP`

ERC20 token on the Ethereum Blockchain that provides total exposure to the cryptocurrency sector.



### `onlyHandler()`

Throws if called by any account other than the handler. 




### `constructor(string _name, string _symbol, uint256 _cap, contract Orchestrator _orchestrator)` (public)





### `addTokenHandler(address _handler)` (public)

Sets the address of the handler contract


Only owner can call it

### `mint(address _account, uint256 _amount)` (public)

Mints TCAP Tokens


Only handler can call it

### `burn(address _account, uint256 _amount)` (public)

Burns TCAP Tokens


Only handler can call it

### `setCap(uint256 _cap)` (public)

Sets the maximum capacity of the token.


When capEnabled is true, mint is not allowed to issue tokens that would increase the
total supply above the specified capacity.
Only owner can call it

### `enableCap(bool _enable)` (public)

Enables or Disables the Token Cap.


When capEnabled is true, minting will not be allowed above the max capacity.
Only owner can call it

### `_beforeTokenTransfer(address from, address to, uint256 amount)` (internal)

minted tokens must not cause the total supply to go over the cap.

See {ERC20-_beforeTokenTransfer}.


### `supportsInterface(bytes4 interfaceId) → bool` (external)

ERC165 Standard for support of interfaces





### `LogAddTokenHandler(address _owner, address _tokenHandler)`



Logs all the calls of the functions. 

### `LogSetCap(address _owner, uint256 _amount)`





### `LogEnableCap(address _owner, bool _enable)`





