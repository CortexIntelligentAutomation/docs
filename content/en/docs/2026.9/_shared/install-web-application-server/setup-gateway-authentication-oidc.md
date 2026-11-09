See the [Add New OpenID Connect Authentication Provider][Add New OpenID Connect Authentication Provider tutorial] tutorial for a step-by-step guide.

1. Select the `OpenID Connect` tab.
1. Select `+ New Provider`.
1. Enter the details of your OpenID Connect provider; currently only the Microsoft Entra provider is supported:

    1. The `Provider Type` field is set to Microsoft as this is currently the only OIDC provider supported.
    1. In the `Identifier` field, enter a friendly unique name for this provider.
    1. In the `Display Name` field, enter a friendly display for this provider. This is displayed on the {{% ctx %}} Gateway sign-in button.
    1. In the `Authority` field, enter the URL to send authentication requests to. For Microsoft Entra this is `https://login.microsoftonline.com`.
    1. In the `Tenant Identifier` field, enter the Microsoft Entra Tenant ID for the organisation managing authentication.
    1. In the `Client Identifier` field, enter the unique identifier to identify the {{% ctx %}} Gateway application to the authentication provider.
    1. In the `Client Secret` field, enter the client secret that validates the {{% ctx %}} Gateway application with the authentication provider.
1. Click `Validate` to validate the information entered and click `Save`.
1. Click `Next` once the authentication setup has been completed.

{{< figure class="centre" src="/images/Gateway Setup4 OIDC.png" title="OpenID Connect Authentication Screen" >}}

[Add New OpenID Connect Authentication Provider tutorial]: {{< url path="Cortex.Tutorials.Administration.Authentication.OpenID" >}}
