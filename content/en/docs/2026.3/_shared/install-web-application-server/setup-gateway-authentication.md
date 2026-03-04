CORTEX Gateway can authenticate users against a Microsoft Active Directory ([LDAP][]) or an external OpenID Connect (OIDC) authentication service ([OpenID Connect][OIDC]). At least one authentication provider must be established in order to assign authorisation rights to users.

{{% alert title="Note" %}}
At this stage it is only possible to configure a single Authentication provider; either LDAP or a single OpenID Connect (OIDC) authentication service. Additional providers can be configured after the initial setup is completed. See the {{< ahref path="Cortex.Guides.UserGuides.UserInterfaces.Gateway.Admin.Authentication.MainDoc" title="Authentication User Guide" >}} for further assistance.
{{% /alert %}}

[LDAP]: {{< ref "#ldap" >}}
[OIDC]: {{< ref "#openid-connect" >}}
