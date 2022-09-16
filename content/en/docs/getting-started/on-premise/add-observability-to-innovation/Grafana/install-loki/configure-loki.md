---
title: "Configure Loki"
linkTitle: "Configure Loki"
description: "Information about configuring Grafana Loki on the Web Application Server."
weight: 20
---

# {{% param title %}}

This guide describes how to configure Grafana Loki on the Web Application Server.

{{% alert type="note" title="Note" %}}For security reasons, Grafana Loki should be run behind an encrypted and authenticated reverse proxy as it does not provide these features by itself.{{% /alert %}}

## Install Certificate

IIS requires the X.509 SSL certificate, obtained in the [prerequisites][], to be installed on the Web Application Server.

You can import the certificate by right clicking the certificate file, selecting `Install Certificate` and following the wizard. When prompted, ensure you import it into the `Local Machine` store and not `Current User`.

To verify the certificate is imported:

1. Click the Windows button (`Start`)
2. Type `certlm.msc` and press `Enter` to open the Certificate Manager dialog
3. Expand `Personal` and select `Certificates`
4. You should see your certificate in this store

## Setup Reverse Proxy with IIS

All of the steps must be carried out on the Web Application Server.

### Install IIS Basic Authentication

1. Run *Server Manager*.
1. Expand the *Manage* menu and select *Add Roles and Features*.
1. In the left-hand menu, select *Server Selection*.
1. Select the name of the Web Application Server, click *Next*.
1. On the *Server Roles* page, in the *Roles* tree, expand *Web Server (IIS)* --> *Web Server* --> *Security*.
1. Select *Basic Authentication*, click *Next*.
1. Click *Next* to get to the *Confirm installation selections* page.
1. Click *Install*.
1. Click *Close* on the *Results* page.

### Install IIS URL Rewrite Module

1. Download the [URL Rewrite module 2.1][]
1. Run the downloaded installer.
1. When prompted by the Web Platform Installer, click *Install*.
1. On the *Prerequisites* page click *I Accept* to agree to the license terms for the module.
1. Once the install has completed, click *Finish*.
1. Click *Exit* to close the Web Platform Installer.

### Install Application Request Routing

1. Download [Application Request Routing 3.0][]
1. Run the downloaded installer.
1. When prompted by the Web Platform Installer, click *Install*.
1. On the *Prerequisites* page click *I Accept* to agree to the license terms for the module.
1. Once the install has completed, click *Finish*.
1. Click *Exit* to close the Web Platform Installer.

### Set Up Reverse Proxy

To set up a reverse proxy, carry out the following configuration.

#### Add a New Website

1. Run IIS Manager.
1. In the *Connection* pane, expand the server.
1. Right-click on *Sites* and select *Add Website...* from the menu.
1. In the *Add Website* window:
    - Provide the site name, e.g. `Grafana Loki`.
    - Set the *Physical path* to the location where the site will be stored and ensure that the path exists, e.g. `C:\inetpub\wwwroot\Grafana Loki`.
    - For *Binding* set:
        - *Type*: `https`
        - *IP address*: `All unassigned`
        - *Port*: `2100`
    - *Host name*: The fully qualified domain name of the Web Application Server. This must match one of the Subject Alternative Names in the SSL certificate selected in the next step.
    - *SSL certificate*: Select the certificate created as part of the [Certificate Requirements][prerequisites] instructions.
    - Click *OK* to add the website.

#### Enable Basic Authentication

1. In the *Connection* pane, browse to *Sites*.
1. Select the newly created website.
1. Double-click on the *Authentication* icon.
1. Disable *Anonymous Authentication*.
1. Enable *Basic Authentication*.

## Configure URL Rewrite Rule

1. In the *Connection* pane, browse to *Sites*.
1. Select the newly created website.
1. Double-click on the *URL Rewrite* icon.
1. In the *Actions* pane, click *Add Rule(s)...*.
1. Select *Reverse Proxy* from the *Inbound and Outbound Rules* section.
1. Click *OK*.
1. If prompted to *Add Reverse Proxy Rules*, click *OK* to enable proxy functionality.
1. In the *Inbound Rules* section enter `localhost:3100` as the server name.
1. Ensure that *Enable SSL Offloading* is checked.
1. Click *OK*.

#### Restart the Website

1. In the *Connection* pane, browse to *Sites*.
1. Select the newly created website.
1. In the *Manage Website* pane, click *Restart*.

#### Create Loki User

1. Run Windows PowerShell as Administrator.
1. Execute the following command to create a new local user on the Web Application Server:

    ```Powershell
    New-LocalUser "<username>" -Password (ConvertTo-SecureString "<password>" -AsPlainText -force) -FullName "<name>" -Description "<description>" –PasswordNeverExpires
    ```

    | Parameter | Description |
    |------|-------------|
    | username | The username of the user to be created. |
    | password | The password for the user account. |
    | name | The full name for the user account. |
    | description | The description of the user account. |

## Next Steps?

1. [Install Promtail][]

[Application Request Routing 3.0]: {{< url "IIS.Downloads.ApplicationRequestRouting-3_0" >}}
[Install Promtail]: {{< url "Cortex.GettingStarted.OnPremise.AddObservabilityToInnovation.Grafana.InstallPromtail.MainDoc" >}}
[prerequisites]: {{< url "Cortex.GettingStarted.OnPremise.AddObservabilityToInnovation.Grafana.WebAppCertificateRequirements" >}}
[Software Requirements]: {{< url "Cortex.GettingStarted.OnPremise.AddObservabilityToInnovation.Grafana.SoftwareRequirements" >}}
[URL Rewrite module 2.1]: {{< url "IIS.Downloads.UrlRewrite-2_1" >}}
