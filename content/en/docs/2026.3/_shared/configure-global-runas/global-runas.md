The Execution Service runs as `Network Service` by default, which means all flows execute as the network service user, except for those blocks that have been configured to be run as a specific user specified in the block's `RunAs` property.

For security reasons, it may be required that all flows as a different user by using the Global RunAs feature, specifying the credentials of the user to be run as.  The `RunAs` advanced property on blocks, will still override the Global RunAs user for the execution of that block.
