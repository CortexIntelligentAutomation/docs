---
title: "Microsoft Entra"
linkTitle: "Microsoft Entra"
description: "Instructions on how to configure Microsoft Entra OIDC Authentication for use in {{% ctx %}} Gateway."
weight: 1
---

# {{% param title %}}

## Configure Microsoft Entra OIDC Provider

{{% alert title="Note" %}}
In order to configure a Microsoft Entra Provider a Microsoft Azure account with at least the `Application Developer` role is needed. A `Workforce` or `External Tenant` is also required.
{{% /alert %}}

1. Register {{% ctx %}} Gateway as an application to create a trust relationship between {{% ctx %}} Gateway and the Microsoft Identity Platform:
    1. Login to Microsoft Azure and navigate to `Microsoft Entra ID` > `Manage` > `App registrations`.
    1. Select `+ New registration`.
    1. Enter a meaningful Name for the {{% ctx %}} Gateway application.
    1. Select the appropriate Supported account type, e.g. `Accounts in this organizational directory only`.
    1. Click `Register`.
1. Add a Redirect URI to allow {{% ctx %}} Gateway to send log in and log out requests to the Entra endpoint:
    1. Select the application registration created in Step 1.
    1. Click `Redirect URIs`.
    1. Click `+ Add a platform`.
    1. Select Single-page application and set:
        * `Redirect URIs` to `<protocol>://<host>:<port>/<webapplicationname>/redirect`, e.g. `https://server.domain.com/gateway/redirect`.
        * `Front-channel logout URL` to `https://localhost:44321/signout-callback-oidc`.
        * `Implicit grant and hybrid flows` to `ID tokens`.
    1. Click `Configure`.
1. Configure permissions for {{% ctx %}} Gateway to access the user's data using Microsoft Graph:
    1. Select the application registration created in Step 1.
    1. Select `API permissions` from the menu on the left.
        {{% alert title="Note" %}}The Delegated permission `User.Read` was added automatically when the application was registered.{{% /alert %}}
    1. Click `+ Add a permission`
        * Select `Microsoft Graph`
        * Select `Application permissions`.
        * Locate and expand `GroupMember` and select `GroupMember.Read.All` to allow the application to authenticate itself without user interaction or consent.
        * Click `Add permissions`.
    1. Click `+ Add a permission` again.
        * Select `Microsoft Graph`
        * Select `Delegated permissions`
        * Locate and expand `Openid permissions`, and select:
            * `email` to allow access to view the users’ email address.
            * `offline_access` to maintain access to data already accessed.
            * `openid` to allow users to sign in.
            * `profile` to allow access to view the user’s basic profile.
        * Click `Add permissions`.
1. Configure the application registration to return the Entra groups to {{% ctx %}} Gateway:
    1. Select the application registration created in Step 1.
    1. Select `Token configuration` from the menu on the left.
    1. Click `+ Add groups claim`.
    1. Select `Security groups`.
    1. Locate and expand `ID`.
        * Select `sAMAccountName`.
    1. Click `Add`.
1. Create credentials for {{% ctx %}} Gateway to authenticate with Entra securely:
    1. Select the application registration created in Step 1.
    1. Select `Client credentials`.
    1. Click `+ New client secret`.
    1. Enter a `Description` for the client secret.
    1. In the `Expires` dropdown, select an expiration for the secret or specify a custom lifetime.
    1. Select `Add`.
        {{% alert title="Warning" color="warning" %}}Make a note of the client secret Value as this is never displayed again after you have left this page.{{% /alert %}}

## Configure {{% ctx %}} Gateway to use Microsoft Entra Authentication

{{% alert title="Note" %}}
In order to configure {{% ctx %}} Gateway to use a Microsoft Entra OpenID Connect Provider, an application MUST be registered and configured as specified in {{< ahref path="Cortex.Faqs.ConfigureOidcAuthentication.MicrosoftEntra.Entra" title="Configure Microsoft Entra OIDC Provider" >}}
{{% /alert %}}

1. Log on to {{% ctx %}} Gateway using the local Administrator account or as a user with the `Admin` role.
1. Select `Admin` > `Authentication`.
1. Select the `OpenID Connect` tab.
1. Click `+ New Provider` and enter the provider details:
    1. `Identifier` - a unique free-format identifier for this provider. This cannot be edited once the form has been saved.
    1. `Display Name` - free-format text to be displayed on the provider tab and login button.
    1. `Authority` - the URL to access the provider authentication. For Microsoft Entra authentication this should be `https://login.microsoftonline.com`.
    1. `Tenant Identifier` - the Tenant ID. This can be obtained from the Application registration details in Microsoft Entra by clicking on the registration to display its details. Copy the value for `Directory (tenant) ID`.
    1. `Client Identifier` - the Client ID. This can be obtained from the Application registration details in Microsoft Entra by clicking on the registration to display its details. Copy the value for `Application (client) ID`.
    1. `Client Secret` - the client secret that was revealed when creating the client credentials for the Application in Microsoft Entra. If you do not have access to the client secret, it will be necessary to create a new client secret in Microsoft Entra - for guidance see step 5 in [Configure Microsoft Entra OIDC][].
1. Click `Validate` to validate the information entered and enable the Save button.
    {{% alert title="Note" %}}Validate does not validate the accuracy of the information entered, it only validates that it is of the correct format.{{% /alert %}}
1. Click `Save` to save the provider’s configuration.

    {{% alert title="Note" %}}It may be necessary to refresh the browser to ensure correct operation.{{% /alert %}}

[Configure Microsoft Entra OIDC]:  {{< url path="Cortex.Faqs.ConfigureOidcAuthentication.MicrosoftEntra.Entra" >}}
