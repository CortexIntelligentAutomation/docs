---
title: "Setup Gateway"
linkTitle: "Setup Gateway"
description: "Initial setup of authentication providers and assign roles used to control access to {{% ctx %}} Gateway and functionality within."
weight: 20
---

# {{% param title %}}

## Summary

The initial setup of {{% ctx %}} Gateway is triggered when signing in for the first time using the Administrator account. It allows for changing the default password and setting up an initial authentication provider and assigning roles to groups within that provider.

## Anatomy

The initial setup is a guided process that performs the configuration of:

* the [Administrator Account Details][].
* authentication providers to control access to {{% ctx %}} Gateway.
* authorisation to groups within the configured authentication provider(s) to control access to functionality in {{% ctx %}} Gateway.

### Account Details

On the Administrator Details page an e-mail address should be entered for the Administrator:

{{< figure class="centre" src="/images/Gateway Setup2.png" title="Administrator Details Screen" >}}

After clicking `Next` it is required that the default password is changed:

{{< figure class="centre" src="/images/Gateway Setup3.png" title="Change Password Screen" >}}

{{% alert title="Note" %}}
Both the e-mail address and password can be changed again after initial setup by logging in to {{% ctx %}} Gateway and selecting `Admin` > `My Account`.
{{% /alert %}}

[Administrator Account Details]: {{< ref "#account-details" >}}
