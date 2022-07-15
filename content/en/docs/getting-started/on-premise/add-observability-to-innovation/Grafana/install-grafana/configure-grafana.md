---
title: "Configure Grafana"
linkTitle: "Configure Grafana"
description: "Information about configuring Grafana on the Web Application Server."
weight: 20
---

# {{< param title >}}

This guide describes how to configure Grafana on the Web Application Server.

## Log-in and Change the Password

It is required that on the first log in into Grafana, a new password for the admin user is set up.
The password should be different from the default one.

1. On the Web Application Server open a web browser.
1. Browse to `http://localhost:3000/`.
1. On the login page, enter `admin` for the username and password.
1. Click Log in.
1. Set a new password for the admin user when prompted to do so.

## Configure HTTPS

By default Grafana allows access over the unsecure HTTP protocol. This needs to be modified to allow access only over the secure HTTPS protocol.

1. Run a text editor in administrator mode.
1. In the text editor open the `custom.ini` Grafana configuration file, which is located in `C:\Program Files\GrafanaLabs\grafana\conf` folder, if Grafana was installed into the default install location.
1. In the `server` section uncomment the `protocol` option and set it to HTTPS, e.g.:

    ```yaml
    # Protocol (http, https, h2, socket)
    protocol = https
    ```

1. In the `server` section uncomment the `cert_file` and `cert_key` options and set them to the certificate `.pem` and `.key` filenames and path saved to during the [Certificate Requirements][] step e.g.:

    ```yaml
    # https certs & key file
    cert_file = C:\certificates\certificate.pem
    cert_key = C:\certificates\certificate.key
    ```

1. Save the file.
1. Open the Services app.
1. Restart the Grafana service.

## Verify That HTTPS Works

It is important to verify that Grafana is only accessible through HTTPS.

1. On the Web Application Server open a web browser.
1. Browse to `http://localhost:3000/`.
1. Browser should not be able to make a connection to Grafana and a default error page should be displayed.
1. Browse to `https://localhost:3000/`.
1. On the login page, enter `admin` as the username and the corresponding password.
1. Click Log in.
1. You should have successfully logged into Grafana.

## Next Steps?

1. [Install Grafana Loki][]

[Install Grafana Loki]: {{< url "Cortex.GettingStarted.OnPremise.AddObservabilityToInnovation.Grafana.InstallLoki.MainDoc" >}}
[Certificate Requirements]: {{< url "Cortex.GettingStarted.OnPremise.AddObservabilityToInnovation.Grafana.WebAppCertificateRequirements" >}}
