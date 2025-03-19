---
title: "Configure Firewalls"
linkTitle: "Configure Firewalls"
description: "Information about configuring Firewalls, e.g. adding rules."
---

# {{% param title %}}

## Add Inbound Rules to Windows Firewall

To set up inbound rules for Windows Firewall take the following steps for each rule that you want to add:

1. Navigate to `Start` → `Administrative Tools` → `Windows Firewall with Advanced Security`.
1. In the left-hand panel, click on the `Inbound Rules` node.
1. In the right-hand panel, click on `New Rule`.
1. In the New Inbound Rule Wizard, select the `Port` option then click on the `Next >`
button.
1. Select either `TCP` or `UDP` depending on the rule that is being made.
1. Select `Specific local ports`.
1. Enter the required ports in a comma separated list (e.g. `443, 80`) in the text box and press `Next >`.
1. Select `Allow the connection` then click `Next >`.
1. Click `Next >` again, then add an identifiable name for the rule
1. Click `Finish`.
