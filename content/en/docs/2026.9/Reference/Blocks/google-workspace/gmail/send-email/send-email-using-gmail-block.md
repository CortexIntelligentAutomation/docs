---
title: "Send Email Using Gmail"
linkTitle: "Send Email Using Gmail"
description: "Sends an email using the SMTP server hosted by Gmail."
---

{{< figure src="/blocks/Cortex_Blocks_GoogleWorkspace_Gmail_SendEmail_SendEmailUsingGmailBlock.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.GoogleWorkspace.Gmail.SendEmail.SendEmailUsingGmailBlock)</p>

## Description

Connects to the [SMTP][] server hosted by [Gmail][] using the specified [Gmail Session Details][Gmail Session Details Property], and sends an [Email Message][Email Message Property].

[Close Session][Close Session Property] can be specified to choose whether the connection to the [SMTP][] server hosted by [Gmail][] is closed or is kept open for use on subsequent Send Email Using Gmail blocks.

## Examples

Sending emails using a username and password is not recommended and is being phased out by [Gmail][]. Using a username and password will currently only work for [Gmail][] accounts associated with a Google Workspace that has access enabled for less secure apps. Instead, it is recommended to use an app password or OAuth, for more information, see [Less Secure Apps][].

In the following examples, where a [UserCredentials][] is used in the [Gmail Session Details][Gmail Session Details Property], the [Password][] property can be either the password associated with the username (if the account is associated with a Google Workspace with access enabled for less secure apps) or an app password.

For more information, see [Setting Credentials][].

### Sending an email to a single recipient

This example will send an email from `sender@gmail.com` to `recipient@outlook.com`. The example uses the [SMTP][] server hosted at `smtp.gmail.com` on [Port][] `465` which requires [UseSsl][] to be to set to `true` within the [Gmail Session Details][Gmail Session Details Property].

For more information about when [UseSsl][] should be set to `true` or `false`, see [Setting UseSsl][].

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Email Message][Email Message Property] | `($)EmailMessage` with value `{"To":  [{"Name":  null,  "Address":  "recipient@outlook.com"}], "From": {"Name": null, "Address": "sender@gmail.com"}, "Cc": [], "Bcc": [], "Priority": null, "Subject": "Example email subject", "BodyFormat": null, "Body": "Example email body", "Attachments": []}`<br><br>In this example `($)EmailMessage` has been set up using the following [Expression][]:<br><br>`new EmailMessage(to: new List<EmailAddress>(){ new EmailAddress("recipient@outlook.com") }, from: new EmailAddress("sender@gmail.com"), cc: null, bcc: null, priority: null, subject: "Example email subject", bodyFormat: null, body: "Example email body", attachments: null)` | `($)EmailMessage` is a variable of type [EmailMessage][]<br><br>As [Priority][] and [BodyFormat][] are `null`, the email will be sent with a [Text][] body and [Normal][] priority.|
| [Gmail Session Details][Gmail Session Details Property] | `($)GmailSessionDetails` with value `{"ServerDetails": {"Host": "smtp.gmail.com", "Port": 465, "UseSsl": true}, "Credentials": {"Domain": null, "Username": "sender@gmail.com", "Password": "encryptedPassword"}}`<br><br>In this example `($)GmailSessionDetails` has been set up using the following [Expression][]:<br><br> `new GmailSessionDetails(serverDetails: new ServerDetails("smtp.gmail.com", 465, true), credentials: new UserCredentials("sender@gmail.com", "encryptedPassword"))` | `($)GmailSessionDetails` is a variable of type [GmailSessionDetails][]<br><br>The [Password][] property in the [UserCredentials][] can be the password associated with the username (if the account is associated with a Google Workspace with access enabled for less secure apps) or an app password, for more information, see [Setting Credentials][].<br><br>The [Password][] property must be encrypted, for more information on how to encrypt the password, see [EncryptedText][]. |
| [Close Session][Close Session Property] | `($)CloseSession` with value `true` |`($)CloseSession` is a variable of type [Boolean][] |

#### Result

An email with [Normal][] priority is sent from `sender@gmail.com` to `recipient@outlook.com` with a subject of `"Example email subject"` and a [Text][] body of `"Example email body"`, and then the session is closed.

***

### Sending an email to multiple recipients

This example will send an email from `sender@gmail.com` to `recipient1@outlook.com`, `recipient2@outlook.com` and `recipient3@outlook.com`. The example uses the [SMTP][] server hosted at `smtp.gmail.com` on [Port][] `465` which requires [UseSsl][] to be set to `true` within the [Gmail Session Details][Gmail Session Details Property].

For more information about when [UseSsl][] should be set to `true` or `false`, see [Setting UseSsl][].

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Email Message][Email Message Property] | `($)EmailMessage` with value `{"To":  [{"Name":  null,  "Address":  "recipient1@outlook.com"},  {"Name":  null,  "Address":  "recipient2@outlook.com"}, {"Name": null, "Address": "recipient3@outlook.com"}], "From": {"Name": null, "Address": "sender@gmail.com"}, "Cc": [], "Bcc": [], "Priority": null, "Subject": "Example email subject", "BodyFormat": null, "Body": "Example email body", "Attachments": []}`<br><br>In this example `($)EmailMessage` has been set up using the following [Expression][]:<br><br> `new EmailMessage(to: new List<EmailAddress>(){ new EmailAddress("recipient1@outlook.com"), new EmailAddress("recipient2@outlook.com"), new EmailAddress("recipient3@outlook.com") }, from: new EmailAddress("sender@gmail.com"), cc: null, bcc: null, priority: null, subject: "Example email subject", bodyFormat: null, body: "Example email body", attachments: null)` | `($)EmailMessage` is a variable of type [EmailMessage][]<br><br>As [Priority][] and [BodyFormat][] are `null`, the email will be sent with a [Text][] body and [Normal][] priority.|
| [Gmail Session Details][Gmail Session Details Property] | `($)GmailSessionDetails` with value `{"ServerDetails": {"Host": "smtp.gmail.com", "Port": 465, "UseSsl": true}, "Credentials": {"Domain": null, "Username": "sender@gmail.com", "Password": "encryptedPassword"}}`<br><br>In this example `($)GmailSessionDetails` has been set up using the following [Expression][]:<br><br> `new GmailSessionDetails(serverDetails: new ServerDetails("smtp.gmail.com", 465, true), credentials: new UserCredentials("sender@gmail.com", "encryptedPassword"))` | `($)GmailSessionDetails` is a variable of type [GmailSessionDetails][]<br><br>The [Password][] property in the [UserCredentials][] can be the password associated with the username (if the account is associated with a Google Workspace with access enabled for less secure apps) or an app password, for more information, see [Setting Credentials][].<br><br>The [Password][] property must be encrypted, for more information on how to encrypt the password, see [EncryptedText][]. |
| [Close Session][Close Session Property] | `($)CloseSession` with value `true` |`($)CloseSession` is a variable of type [Boolean][] |

#### Result

An email with [Normal][] priority is sent from `sender@gmail.com` to `recipient1@outlook.com`, `recipient2@outlook.com` and `recipient3@outlook.com` with a subject of `"Example email subject"` and a [Text][] body of `"Example email body"`, and then the session is closed.

***

### Sending an email with a CC or BCC recipient

This example will send an email from `sender@gmail.com` to `recipient@outlook.com` with `cc@outlook.com` and `bcc@outlook.com` as the [CC][CC Glossary] and [BCC][BCC Glossary] recipients for the email respectively. The example uses the [SMTP][] server hosted at `smtp.gmail.com` on [Port][] `465` which requires [UseSsl][] to be set to `true` within the [Gmail Session Details][Gmail Session Details Property].

For more information about when [UseSsl][] should be set to `true` or `false`, see [Setting UseSsl][].

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Email Message][Email Message Property] | `($)EmailMessage` with value `{"To": [{"Name": null, "Address": "recipient@outlook.com"}], "From": {"Name": null, "Address": "sender@gmail.com"}, "Cc": [{"Name": null, "Address": "cc@outlook.com"}], "Bcc": [{"Name": null, "Address": "bcc@outlook.com"}], "Priority": null, "Subject": "Example email subject", "BodyFormat": null, "Body": "Example email body", "Attachments": []}`<br><br>In this example `($)EmailMessage` has been set up using the following [Expression][]:<br><br> `new EmailMessage(to: new List<EmailAddress>(){ new EmailAddress("recipient@outlook.com") }, from: new EmailAddress("sender@gmail.com"), cc: new List<EmailAddress>(){ new EmailAddress("cc@outlook.com") }, bcc: new List<EmailAddress>(){ new EmailAddress("bcc@outlook.com") }, priority: null, subject: "Example email subject", bodyFormat: null, body: "Example email body", attachments: null)` | `($)EmailMessage` is a variable of type [EmailMessage][]<br><br>As [Priority][] and [BodyFormat][] are `null`, the email will be sent with a [Text][] body and [Normal][] priority. |
| [Gmail Session Details][Gmail Session Details Property] | `($)GmailSessionDetails` with value `{"ServerDetails": {"Host": "smtp.gmail.com", "Port": 465, "UseSsl": true}, "Credentials": {"Domain": null, "Username": "sender@gmail.com", "Password": "encryptedPassword"}}`<br><br>In this example `($)GmailSessionDetails` has been set up using the following [Expression][]:<br><br> `new GmailSessionDetails(serverDetails: new ServerDetails("smtp.gmail.com", 465, true), credentials: new UserCredentials("sender@gmail.com", "encryptedPassword"))` | `($)GmailSessionDetails` is a variable of type [GmailSessionDetails][]<br><br>The [Password][] property in the [UserCredentials][] can be the password associated with the username (if the account is associated with a Google Workspace with access enabled for less secure apps) or an app password, for more information, see [Setting Credentials][].<br><br>The [Password][] property must be encrypted, for more information on how to encrypt the password, see [EncryptedText][]. |
| [Close Session][Close Session Property] | `($)CloseSession` with value `true` |`($)CloseSession` is a variable of type [Boolean][] |

#### Result

An email with [Normal][] priority is sent from `sender@gmail.com` to `recipient@outlook.com` with a subject of `"Example email subject"` and a [Text][] body of `"Example email body"`. Both `cc@outlook.com` and `bcc@outlook.com` will also recieve copies of the email as they are listed as [CC][CC Glossary] and [BCC][BCC Glossary] recipients, and then the session is closed.

***

### Sending an email with multiple CC or BCC recipients

This example will send an email from `sender@gmail.com` to `recipient@outlook.com` with `cc1@outlook.com` and `cc2@outlook.com` as the [CC][CC Glossary] recipients and `bcc1@outlook.com` and `bcc2@outlook.com` as the [BCC][BCC Glossary] recipients for the email. The example uses the [SMTP][] server hosted at `smtp.gmail.com` on [Port][] `465` which requires [UseSsl][] to be set to `true` within the [Gmail Session Details][Gmail Session Details Property].

For more information about when [UseSsl][] should be set to `true` or `false`, see [Setting UseSsl][].

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Email Message][Email Message Property] | `($)EmailMessage` with value `{"To": [{"Name": null, "Address": "recipient@outlook.com"}], "From": {"Name": null, "Address": "sender@gmail.com"}, "Cc": [{"Name": null, "Address": "cc1@outlook.com"}, {"Name": null, "Address": "cc2@outlook.com"}], "Bcc": [{"Name": null, "Address": "bcc1@outlook.com"}, {"Name": null, "Address": "bcc2@outlook.com"}], "Priority": null, "Subject": "Example email subject", "BodyFormat": null, "Body": "Example email body", "Attachments": []}`<br><br>In this example `($)EmailMessage` has been set up using the following [Expression][]:<br><br> `new EmailMessage(to: new List<EmailAddress>(){ new EmailAddress("recipient@outlook.com") }, from: new EmailAddress("sender@gmail.com"), cc: new List<EmailAddress>(){ new EmailAddress("cc1@outlook.com"), new EmailAddress("cc2@outlook.com") }, bcc: new List<EmailAddress>(){ new EmailAddress("bcc1@outlook.com"), new EmailAddress("bcc2@outlook.com") }, priority: null, subject: "Example email subject", bodyFormat: null, body: "Example email body", attachments: null)` | `($)EmailMessage` is a variable of type [EmailMessage][]<br><br>As [Priority][] and [BodyFormat][] are `null`, the email will be sent with a [Text][] body and [Normal][] priority. |
| [Gmail Session Details][Gmail Session Details Property] | `($)GmailSessionDetails` with value `{"ServerDetails": {"Host": "smtp.gmail.com", "Port": 465, "UseSsl": true}, "Credentials": {"Domain": null, "Username": "sender@gmail.com", "Password": "encryptedPassword"}}`<br><br>In this example `($)GmailSessionDetails` has been set up using the following [Expression][]:<br><br> `new GmailSessionDetails(serverDetails: new ServerDetails("smtp.gmail.com", 465, true), credentials: new UserCredentials("sender@gmail.com", "encryptedPassword"))` | `($)GmailSessionDetails` is a variable of type [GmailSessionDetails][]<br><br>The [Password][] property in the [UserCredentials][] can be the password associated with the username (if the account is associated with a Google Workspace with access enabled for less secure apps) or an app password, for more information, see [Setting Credentials][].<br><br>The [Password][] property must be encrypted, for more information on how to encrypt the password, see [EncryptedText][]. |
| [Close Session][Close Session Property] | `($)CloseSession` with value `true` |`($)CloseSession` is a variable of type [Boolean][] |

#### Result

An email with [Normal][] priority is sent from `sender@gmail.com` to `recipient@outlook.com` with a subject of `"Example email subject"` and a [Text][] body of `"Example email body"`. Both `cc1@outlook.com` and `cc2@outlook.com` will also recieve copies of the email as they are listed as [CC][CC Glossary] recipients, and both `bcc1@outlook.com` and `bcc2@outlook.com` will recieve copies of the email as they are listed as [BCC][BCC Glossary] recipients. Finally, the session is closed.

***

### Sending an email with a different priority

This example will send an email with [Urgent][] priority from `sender@gmail.com` to `recipient@outlook.com`. The example uses the [SMTP][] server hosted at `smtp.gmail.com` on [Port][] `465` which requires [UseSsl][] to be set to `true` within the [Gmail Session Details][Gmail Session Details Property].

For more information on:

- What priorities an email can be sent as, see [EmailMessagePriority][]
- The effect of changing the [Priority][] of the [Email Message][Email Message Property], see [How does Priority affect sending an email?][]
- When [UseSsl][] should be set to `true` or `false`, see [Setting UseSsl][].

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Email Message][Email Message Property] | `($)EmailMessage` with value `{"To": [{"Name": null, "Address": "recipient@outlook.com"}], "From": {"Name": null, "Address": "sender@gmail.com"}, "Cc": [], "Bcc": [], "Priority": "EmailMessagePriority.Urgent", "Subject": "Example email subject", "BodyFormat": null, "Body": "Example email body", "Attachments": []}`<br><br>In this example `($)EmailMessage` has been set up using the following [Expression][]:<br><br> `new EmailMessage(to: new List<EmailAddress>(){ new EmailAddress("recipient@outlook.com") }, from: new EmailAddress("sender@gmail.com"), cc: null, bcc: null, priority: EmailMessagePriority.Urgent, subject: "Example email subject", bodyFormat: null, body: "Example email body", attachments: null)` | `($)EmailMessage` is a variable of type [EmailMessage][]<br><br>As [BodyFormat][] is `null`, the email will be sent with a [Text][] body. |
| [Gmail Session Details][Gmail Session Details Property] | `($)GmailSessionDetails` with value `{"ServerDetails": {"Host": "smtp.gmail.com", "Port": 465, "UseSsl": true}, "Credentials": {"Domain": null, "Username": "sender@gmail.com", "Password": "encryptedPassword"}}`<br><br>In this example `($)GmailSessionDetails` has been set up using the following [Expression][]:<br><br> `new GmailSessionDetails(serverDetails: new ServerDetails("smtp.gmail.com", 465, true), credentials: new UserCredentials("sender@gmail.com", "encryptedPassword"))` | `($)GmailSessionDetails` is a variable of type [GmailSessionDetails][]<br><br>The [Password][] property in the [UserCredentials][] can be the password associated with the username (if the account is associated with a Google Workspace with access enabled for less secure apps) or an app password, for more information, see [Setting Credentials][].<br><br>The [Password][] property must be encrypted, for more information on how to encrypt the password, see [EncryptedText][]. |
| [Close Session][Close Session Property] | `($)CloseSession` with value `true` |`($)CloseSession` is a variable of type [Boolean][] |

#### Result

An email with [Urgent][] priority is sent from `sender@gmail.com` to `recipient@outlook.com` with a subject of `"Example email subject"` and a [Text][] body of `"Example email body"`, and then the session is closed.

***

### Sending an email with an HTML body

This example will send an email with an [HTML][] body from `sender@gmail.com` to `recipient@outlook.com`. The example uses the [SMTP][] server hosted at `smtp.gmail.com` on [Port][] `465` which requires [UseSsl][] to be set to `true` within the [Gmail Session Details][Gmail Session Details Property].

For more information on:

- What other body formats an email can be sent with, see [EmailMessageBodyFormat][]
- The effect of changing the [BodyFormat][] of the [Email Message][Email Message Property], see [How does BodyFormat affect sending an email?][]
- When [UseSsl][] should be set to `true` or `false`, see [Setting UseSsl][].

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Email Message][Email Message Property] | `($)EmailMessage` with value `{"To": [{"Name": null, "Address": "recipient@outlook.com"}], "From": {"Name": null, "Address": "sender@gmail.com"}, "Cc": [], "Bcc": [], "Priority": null, "Subject": "Example email subject", "BodyFormat": "EmailMessageBodyFormat.Html", "Body": "<h1>Example email body</h1>", "Attachments": []}`<br><br>In this example `($)EmailMessage` has been set up using the following [Expression][]:<br><br> `new EmailMessage(to: new List<EmailAddress>(){ new EmailAddress("recipient@outlook.com") }, from: new EmailAddress("sender@gmail.com"), cc: null, bcc: null, priority: null, subject: "Example email subject", bodyFormat: EmailMessageBodyFormat.Html, body: "<h1>Example email body</h1>", attachments: null)` | `($)EmailMessage` is a variable of type [EmailMessage][]<br><br> As [Priority][] is `null`, the email will be sent with [Normal][] priority. |
| [Gmail Session Details][Gmail Session Details Property] | `($)GmailSessionDetails` with value `{"ServerDetails": {"Host": "smtp.gmail.com", "Port": 465, "UseSsl": true}, "Credentials": {"Domain": null, "Username": "sender@gmail.com", "Password": "encryptedPassword"}}`<br><br>In this example `($)GmailSessionDetails` has been set up using the following [Expression][]:<br><br> `new GmailSessionDetails(serverDetails: new ServerDetails("smtp.gmail.com", 465, true), credentials: new UserCredentials("sender@gmail.com", "encryptedPassword"))` | `($)GmailSessionDetails` is a variable of type [GmailSessionDetails][]<br><br>The [Password][] property in the [UserCredentials][] can be the password associated with the username (if the account is associated with a Google Workspace with access enabled for less secure apps) or an app password, for more information, see [Setting Credentials][].<br><br>The [Password][] property must be encrypted, for more information on how to encrypt the password, see [EncryptedText][]. |
| [Close Session][Close Session Property] | `($)CloseSession` with value `true` |`($)CloseSession` is a variable of type [Boolean][] |

#### Result

An email with [Normal][] priority is sent from `sender@gmail.com` to `recipient@outlook.com` with a subject of `"Example email subject"` and an [HTML][] body of `"<h1>Example email body</h1>"`, and then the session is closed.

***

### Sending an email with a single attachment

This example will send an email with a single attachment, `attachment.txt`, from `sender@gmail.com` to `recipient@outlook.com`. The attachment is located at `C:\attachment.txt` on the server executing the flow. The example uses the [SMTP][] server hosted at `smtp.gmail.com` on [Port][] `465` which requires [UseSsl][] to be set to `true` within the [Gmail Session Details][Gmail Session Details Property].

For more information on:

- Email attachments, see [Attachments][Attachments Remarks]
- When [UseSsl][] should be set to `true` or `false`, see [Setting UseSsl][].

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Email Message][Email Message Property] | `($)EmailMessage` with value `{"To": [{"Name": null, "Address": "recipient@outlook.com"}], "From": {"Name": null, "Address": "sender@gmail.com"}, "Cc": [], "Bcc": [], "Priority": null, "Subject": "Example email subject", "BodyFormat": null, "Body": "Example email body", "Attachments": ["C:\\attachment.txt"]}`<br><br>In this example `($)EmailMessage` has been set up using the following [Expression][]:<br><br> `new EmailMessage(to: new List<EmailAddress>(){ new EmailAddress("recipient@outlook.com") }, from: new EmailAddress("sender@gmail.com"), cc: null, bcc: null, priority: null, subject: "Example email subject", bodyFormat: null, body: "Example email body", attachments: new List<string>(){ @"C:\attachment.txt" })` | `($)EmailMessage` is a variable of type [EmailMessage][]<br><br>As [Priority][] and [BodyFormat][] are `null`, the email will be sent with a [Text][] body and [Normal][] priority.<br><br>The [Attachments][Attachments Remarks] are added to the email by providing file paths pointing to the files to be attached to the email. |
| [Gmail Session Details][Gmail Session Details Property] | `($)GmailSessionDetails` with value `{"ServerDetails": {"Host": "smtp.gmail.com", "Port": 465, "UseSsl": true}, "Credentials": {"Domain": null, "Username": "sender@gmail.com", "Password": "encryptedPassword"}}`<br><br>In this example `($)GmailSessionDetails` has been set up using the following [Expression][]:<br><br> `new GmailSessionDetails(serverDetails: new ServerDetails("smtp.gmail.com", 465, true), credentials: new UserCredentials("sender@gmail.com", "encryptedPassword"))` | `($)GmailSessionDetails` is a variable of type [GmailSessionDetails][]<br><br>The [Password][] property in the [UserCredentials][] can be the password associated with the username (if the account is associated with a Google Workspace with access enabled for less secure apps) or an app password, for more information, see [Setting Credentials][].<br><br>The [Password][] property must be encrypted, for more information on how to encrypt the password, see [EncryptedText][]. |
| [Close Session][Close Session Property] | `($)CloseSession` with value `true` |`($)CloseSession` is a variable of type [Boolean][] |

#### Result

An email with [Normal][] priority containing a text file attachment, `attachment.txt`, is sent from `sender@gmail.com` to `recipient@outlook.com` with a subject of `"Example email subject"` and a [Text][] body of `"Example email body"`, and then the session is closed.

***

### Sending an email with multiple attachments

This example will send an email with mutiple attachments, `attachment1.txt` and `attachment2.txt` from `sender@gmail.com` to `recipient@outlook.com`.  The attachments are located at the paths `C:\attachment1.txt` and `C:\attachment2.txt` on the server executing the flow. The example uses the [SMTP][] server hosted at `smtp.gmail.com` on [Port][] `465` which requires [UseSsl][] to be set to `true` within the [Gmail Session Details][Gmail Session Details Property].

For more information on:

- Email attachments, see [Attachments][Attachments Remarks]
- When [UseSsl][] should be set to `true` or `false`, see [Setting UseSsl][].

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Email Message][Email Message Property] | `($)EmailMessage` with value `{"To": [{"Name": null, "Address": "recipient@outlook.com"}], "From": {"Name": null, "Address": "sender@gmail.com"}, "Cc": [], "Bcc": [], "Priority": null, "Subject": "Example email subject", "BodyFormat": null, "Body": "Example email body", "Attachments": ["C:\\attachment1.txt", "C:\\attachment2.txt"]}`<br><br>In this example `($)EmailMessage` has been set up using the following [Expression][]:<br><br> `new EmailMessage(to: new List<EmailAddress>(){ new EmailAddress("recipient@outlook.com") }, from: new EmailAddress("sender@gmail.com"), cc: null, bcc: null, priority: null, subject: "Example email subject", bodyFormat: null, body: "Example email body", attachments: new List<string>(){ @"C:\attachment1.txt", @"C:\attachment2.txt" })` | `($)EmailMessage` is a variable of type [EmailMessage][]<br><br>As [Priority][] and [BodyFormat][] are `null`, the email will be sent with a [Text][] body and [Normal][] priority.<br><br>The [Attachments][Attachments Remarks] are added to the email by providing file paths pointing to the files to be attached to the email. |
| [Gmail Session Details][Gmail Session Details Property] | `($)GmailSessionDetails` with value `{"ServerDetails": {"Host": "smtp.gmail.com", "Port": 465, "UseSsl": true}, "Credentials": {"Domain": null, "Username": "sender@gmail.com", "Password": "encryptedPassword"}}`<br><br>In this example `($)GmailSessionDetails` has been set up using the following [Expression][]:<br><br> `new GmailSessionDetails(serverDetails: new ServerDetails("smtp.gmail.com", 465, true), credentials: new UserCredentials("sender@gmail.com", "encryptedPassword"))` | `($)GmailSessionDetails` is a variable of type [GmailSessionDetails][]<br><br>The [Password][] property in the [UserCredentials][] can be the password associated with the username (if the account is associated with a Google Workspace with access enabled for less secure apps) or an app password, for more information, see [Setting Credentials][].<br><br>The [Password][] property must be encrypted, for more information on how to encrypt the password, see [EncryptedText][]. |
| [Close Session][Close Session Property] | `($)CloseSession` with value `true` |`($)CloseSession` is a variable of type [Boolean][] |

#### Result

An email with [Normal][] priority containing two text file attachments, `attachment1.txt` and `attachment2.txt`, is sent from `sender@gmail.com` to `recipient@outlook.com` with a subject of `"Example email subject"` and a [Text][] body of `"Example email body"`, and then the session is closed.

***

### Sending an email with UseSsl set to false

This example will send an email from `sender@gmail.com` to `recipient@outlook.com`. The example uses the [SMTP][] server hosted at `smtp.gmail.com` on [Port][] `587` which requires [UseSsl][] to be set to `false` within the [Gmail Session Details][Gmail Session Details Property].

For more information on when [UseSsl][] should be set to `true` or `false`, see [Setting UseSsl][].

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Email Message][Email Message Property] | `($)EmailMessage` with value `{"To":  [{"Name":  null,  "Address":  "recipient@outlook.com"}], "From": {"Name": null, "Address": "sender@gmail.com"}, "Cc": [], "Bcc": [], "Priority": null, "Subject": "Example email subject", "BodyFormat": null, "Body": "Example email body", "Attachments": []}`<br><br>In this example `($)EmailMessage` has been set up using the following [Expression][]:<br><br>`new EmailMessage(to: new List<EmailAddress>(){ new EmailAddress("recipient@outlook.com") }, from: new EmailAddress("sender@gmail.com"), cc: null, bcc: null, priority: null, subject: "Example email subject", bodyFormat: null, body: "Example email body", attachments: null)` | `($)EmailMessage` is a variable of type [EmailMessage][]<br><br>As [Priority][] and [BodyFormat][] are `null`, the email will be sent with a [Text][] body and [Normal][] priority.|
| [Gmail Session Details][Gmail Session Details Property] | `($)GmailSessionDetails` with value `{"ServerDetails": {"Host": "smtp.gmail.com", "Port": 587, "UseSsl": false}, "Credentials": {"Domain": null, "Username": "sender@gmail.com", "Password": "encryptedPassword"}}`<br><br>In this example `($)GmailSessionDetails` has been set up using the following [Expression][]:<br><br> `new GmailSessionDetails(serverDetails: new ServerDetails("smtp.gmail.com", 587, false), credentials: new UserCredentials("sender@gmail.com", "encryptedPassword"))` | `($)GmailSessionDetails` is a variable of type [GmailSessionDetails][]<br><br>The [Password][] property in the [UserCredentials][] can be the password associated with the username (if the account is associated with a Google Workspace with access enabled for less secure apps) or an app password, for more information, see [Setting Credentials][].<br><br>The [Password][] property must be encrypted, for more information on how to encrypt the password, see [EncryptedText][]. |
| [Close Session][Close Session Property] | `($)CloseSession` with value `true` |`($)CloseSession` is a variable of type [Boolean][] |

#### Result

An email with [Normal][] priority is sent from `sender@gmail.com` to `recipient@outlook.com` with a subject of `"Example email subject"` and a [Text][] body of `"Example email body"`, and then the session is closed.

***

### Sending an email using OAuth

This example will send an email from `sender@gmail.com` to `recipient@outlook.com`. The example uses the [SMTP][] server hosted at `smtp.gmail.com` on [Port][] `465` which requires [UseSsl][] to be to set to `true` within the [Gmail Session Details][Gmail Session Details Property].

For more information about when [UseSsl][] should be set to `true` or `false`, see [Setting UseSsl][].

The authentication mechanism used in this example is OAuth, the specific authentication flow used is often referred to as "Two-Legged OAuth". Therefore, for this example to work correctly:

- Credentials provided must be for a [Gmail][] account connected to a Google Workspace
- Credentials in [Gmail Session Details][Gmail Session Details Property] must be a [GmailOAuthCertificateCredentials][] which requires:
  - [CertificatePath][]
  - [CertificatePassword][]
  - [FromAddress][]
  - [ClientId][]
- [CertificatePath][] must be a path pointing to a certificate accessible from the server executing the flow

For more information on:

- What each of the properties in the [GmailOAuthCertificateCredentials][] needs to be, see [GmailOAuthCertificateCredentials][]
- Using a certificate file, see [Certificate Files][]
- How to set up the Gmail account so that this authentication mechanism can be used, see [Setting up a Gmail account for OAuth authentication][]

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Email Message][Email Message Property] | `($)EmailMessage` with value `{"To":  [{"Name":  null,  "Address":  "recipient@outlook.com"}], "From": {"Name": null, "Address": "sender@gmail.com"}, "Cc": [], "Bcc": [], "Priority": null, "Subject": "Example email subject", "BodyFormat": null, "Body": "Example email body", "Attachments": []}`<br><br>In this example `($)EmailMessage` has been set up using the following [Expression][]:<br><br>`new EmailMessage(to: new List<EmailAddress>(){ new EmailAddress("recipient@outlook.com") }, from: new EmailAddress("sender@gmail.com"), cc: null, bcc: null, priority: null, subject: "Example email subject", bodyFormat: null, body: "Example email body", attachments: null)` | `($)EmailMessage` is a variable of type [EmailMessage][]<br><br>As [Priority][] and [BodyFormat][] are `null`, the email will be sent with a [Text][] body and [Normal][] priority.|
| [Gmail Session Details][Gmail Session Details Property] | `($)GmailSessionDetails` with value `{"ServerDetails": {"Host": "smtp.gmail.com", "Port": 465, "UseSsl": true}, "Credentials": {"CertificatePath": "C:\\certificate.p12", "CertificatePassword": "encryptedPassword", "FromAddress": "sender@gmail.com", "ClientId": "clientId"}}`<br><br>In this example `($)GmailSessionDetails` has been set up using the following [Expression][]:<br><br> `new GmailSessionDetails(serverDetails: new ServerDetails("smtp.gmail.com", 465, true), credentials: new GmailOAuthCertificateCredentials(@"C:\certificate.p12", "encryptedPassword", "sender@gmail.com", "clientId"))` | `($)GmailSessionDetails` is a variable of type [GmailSessionDetails][]<br><br>The [CertificatePath][] in the [GmailOAuthCertificateCredentials][] is a path pointing to a certificate accessible from the server executing the flow.<br><br>For information on:<ul><li>What each of the properties in the [GmailOAuthCertificateCredentials][] needs to be, see [GmailOAuthCertificateCredentials][]</li><li>How to set up the [Gmail][] account so that this authentication mechanism can be used, see [Setting up a Gmail account for OAuth authentication][]</li></ul>The [CertificatePassword][] property  must be encrypted, for more information on how to encrypt the password, see [EncryptedText][]. |
| [Close Session][Close Session Property] | `($)CloseSession` with value `true` |`($)CloseSession` is a variable of type [Boolean][] |

#### Result

An email with [Normal][] priority is sent from `sender@gmail.com` to `recipient@outlook.com` with a subject of `"Example email subject"` and a [Text][] body of `"Example email body"`, and then the session is closed.

***

## Properties

### Email Message

The [Email Message][Email Message Property] to send via the [SMTP][] server hosted by [Gmail][] specified in the [Gmail Session Details][Gmail Session Details Property]. This property contains all of the information in relation to the email to be sent, these are:

- [To][]
- [From][]
- [Cc][]
- [Bcc][]
- [Priority][]
- [Subject][]
- [BodyFormat][]
- [Body][]
- [Attachments][]

Note that if the properties [Priority][] and [BodyFormat][] are set to `null` when [creating an EmailMessage using a constructor][], the email will be sent with [Normal][] priority and with a [Text][] body.

For more detailed information on each of the properties, see [EmailMessage][].

|||
|----------|----------|
| Data Type | [EmailMessage][] |
| Property Type | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor | [Literal][] |
| Default Value | [EmailMessage][] with value shown below: |

```json
{
  "To": [
    {
      "Name": null,
      "Address": ""
    }
  ],
  "From": {
    "Name": "",
    "Address": ""
  },
  "Cc": [],
  "Bcc": [],
  "Priority": "EmailMessagePriority.Normal",
  "Subject": "",
  "BodyFormat": "EmailMessageBodyFormat.Text",
  "Body": "",
  "Attachments": []
}
```

### Gmail Session Details

The [Gmail Session Details][Gmail Session Details Property] object that includes all of the information required to open and maintain a session with an [SMTP][] server hosted by [Gmail][], including:

- [ServerDetails][ServerDetails Property] - must be provided in order to connect to an [SMTP][] server. This object contains the properties [Host][], [Port][] and [UseSsl][]. For more information on:
  - Supported server address formats, see [Supported formats for ServerDetails.Host][].
  - When [UseSsl][] should be set to `true` or `false`, see [Setting UseSsl][].
- [Credentials][Credentials Property] - must be provided in order to connect to an [SMTP][] server. This object must be a [UserCredentials][] or a [GmailOAuthCertificateCredentials][] and is used for authentication. For more information on how to configure each of these, see [Setting Credentials][].

If the [Close Session][Close Session Property] property is set to `false`, then the session will be kept open and can be used in subsequent Send Email Using Gmail blocks which improves performance, see [Opening Sessions][] for more information.

For more detailed information on each of the properties, see [GmailSessionDetails][].

|||
|----------|----------|
| Data Type | [GmailSessionDetails][] |
| Property Type | [InputOutput][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)GmailSessionDetails` with no value |

### Close Session

[Close Session][Close Session Property] can be specified to choose whether the session is closed or is kept open for use on subsequent Send Email Using Gmail blocks, this defaults to `false` if left blank, please see [Closing Sessions][Closing Sessions] for more information.

|||
|-----------------|----------|
| Data Type       | [Boolean][] |
| Property Type   | [Input][] |
| Is [Advanced][] | `false` |
| Default Editor  | [Literal][] |
| Default Value   | [Boolean][] with value `true` |

## Exceptions

The exceptions thrown by the block can be found below:

| Name                                 | Description |
|--------------------------------------|-------------|
| [ArgumentException][]                |Thrown when [BodyFormat][] within the [Email Message][Email Message Property] is not one of the specified [EmailMessageBodyFormat][] values (e.g. `(EmailMessageBodyFormat)10`).|
| |Thrown when [Priority][] within the [Email Message][Email Message Property] is not one of the specified [EmailMessagePriority][] values (e.g. `(EmailMessagePriority)10`).|
| |Thrown when a file path provided in the [Attachments][] within the [Email Message][Email Message Property] is empty (i.e. `""`), contains only whitespace (i.e. `"   "`) or contains the NUL character (i.e. `\0`).|
| [ArgumentNullException][]            |Thrown when a file path provided in the [Attachments][] within the [Email Message][Email Message Property] is `null`.|
| [EmailSessionException][]            |Thrown when an invalid [Port][] is provided in the [ServerDetails][] within the [Gmail Session Details][Gmail Session Details Property]. For more information, see [Invalid Port][].|
| |Thrown when an invalid [Host][] is provided in the [ServerDetails][] within the [Gmail Session Details][Gmail Session Details Property]. For more information, see [Invalid Host][].|
| |Thrown when a connection cannot be established; this typically occurs when [UseSsl][] within [Gmail Session Details][Gmail Session Details Property] is set to `false` with a [Port][] which requires it to be set to `true`. For more information, see [SSL Required][]. |
| |Thrown when a connection cannot be established; this typically occurs when [UseSsl][] within [Gmail Session Details][Gmail Session Details Property] is set to `true` with a [Port][] which requires it to be set to `false`. For more information, see [SSL Unsupported][]. |
| |Thrown when the [TLS][]/[SSL][] certificate has expired on the [Host][] or is untrusted or invalid. For more information, see [SSL Unsupported][]. Note that this exception has the same category and error code as the above row, this is a known limitation, see [EmailSessionErrorCode Limitations][]. |
| |Thrown when a locally installed anti-virus software replaces the [TLS][]/[SSL][] certificate in order to scan web traffic. For more information, see [SSL Unsupported][]. Note that this exception has the same category and error code as the above row, this is a known limitation, see [EmailSessionErrorCode Limitations][]. |
| |Thrown when the [CRL][] (Certificate Revocation List) server for the [TLS][]/[SSL][] certificate is down. For more information, see [SSL Unsupported][]. Note that this exception has the same category and error code as the above row, this is a known limitation, see [EmailSessionErrorCode Limitations][]. |
| |Thrown when the [Username][] and [Password][] in the [UserCredentials][] within [Gmail Session Details][Gmail Session Details Property] is incorrect. For more information, see [Invalid User Credentials][]. |
| |Thrown when an invalid [CertificatePath][] and [CertificatePassword][] combination has been provided in the [GmailOAuthCertificateCredentials][]. For more information, see [Invalid SSL Certificate][]. |
| |Thrown when the [CertificatePath][] in the [GmailOAuthCertificateCredentials][] points to an invalid [SSL][] certificate. For more information, see [Invalid SSL Certificate][]. |
| |Thrown when the [CertificatePath][] provided in the [GmailOAuthCertificateCredentials][] points to a non-existent file. For more information, see [Invalid SSL Certificate][]. |
| |Thrown when the [CertificatePath][] provided in the [GmailOAuthCertificateCredentials][] points to a folder. For more information, see [Invalid SSL Certificate][]. |
| |Thrown when the [CertificatePath][] provided in the [GmailOAuthCertificateCredentials][] is longer than the system defined maximum length (typically 32,767). For more information, see [Invalid SSL Certificate][]. |
| |Thrown when the [CertificatePath][] provided in the [GmailOAuthCertificateCredentials][] contains only whitespace (i.e. `" "`) or contains the NUL character (i.e. `\0`). For more information, see [Invalid SSL Certificate][]. |
| |Thrown when the [CertificatePath][] provided in the [GmailOAuthCertificateCredentials][] contains leading spaces. For more information, see [Invalid SSL Certificate][]. |
| |Thrown when the [CertificatePath][] provided in the [GmailOAuthCertificateCredentials][] contains invalid characters (i.e. `"`, `*`, `?`, `\|`, `<`, `>`, `:`, `\`, `/`). For more information, see [Invalid SSL Certificate][]. |
| |Thrown when access is denied to the file at the [CertificatePath][] provided in the [GmailOAuthCertificateCredentials][]. For more information, see [Invalid SSL Certificate][]. |
| |Thrown when an invalid [FromAddress][] and [ClientId][] combination has been provided in the [GmailOAuthCertificateCredentials][].  For more information, see [Invalid Gmail Client Credentials][].|
| [FileNotFoundException][]            |Thrown when a non-existent file path is provided in [Attachments][] within [Email Message][Email Message Property]. |
| [IOException][]                      |Thrown when the desired socket is held by another process; re-running the flow typically solves this. |
| |Thrown when a file path within [Attachments][] within the [Email Message][Email Message Property] contains leading spaces.|
| |Thrown when a file path within [Attachments][] within the [Email Message][Email Message Property] contains invalid characters (i.e. `"`, `*`, `?`, `\|`, `<`, `>`, `:`, `\`, `/`).|
| [PathTooLongException][]             |Thrown when a file path provided in the [Attachments][] within the [Email Message][Email Message Property] exceeds the system-defined maximum length (typically 32,767).|
| [PropertyNullException][]            |Thrown when the [Gmail Session Details][Gmail Session Details Property] is `null`. |
| |Thrown when the [UserCredentials][] within [Gmail Session Details][Gmail Session Details Property] is `null`. |
| |Thrown when the [ServerDetails][] within [Gmail Session Details][Gmail Session Details Property] is `null`. |
| |Thrown when the [Host][] in [ServerDetails][] within [Gmail Session Details][Gmail Session Details Property] is `null`. |
| |Thrown when the [Email Message][Email Message Property] is `null`. |
| |Thrown when the [To][] within [Email Message][Email Message Property] is `null`. |
| |Thrown when the [From][] within [Email Message][Email Message Property] is `null`. |
| |Thrown when the [Address][] in an [EmailAddress][] within [Email Message][Email Message Property] is `null`. |
| |Thrown when the [CertificatePath][] in the [GmailOAuthCertificateCredentials][] within [Gmail Session Details][Gmail Session Details Property] is `null`. |
| |Thrown when the [CertificatePassword][] in the [GmailOAuthCertificateCredentials][] within [Gmail Session Details][Gmail Session Details Property] is `null`. |
| |Thrown when the [FromAddress][] in the [GmailOAuthCertificateCredentials][] within [Gmail Session Details][Gmail Session Details Property] is `null`. |
| |Thrown when the [ClientId][] in the [GmailOAuthCertificateCredentials][] within [Gmail Session Details][Gmail Session Details Property] is `null`. |
| [PropertyEmptyException][]           |Thrown when the [Host][] in [ServerDetails][] within [Gmail Session Details][Gmail Session Details Property] is empty (i.e. `""`). |
| |Thrown when the [To][] within [Email Message][Email Message Property] is empty (i.e. `[]`). |
| |Thrown when the [Address][] in an [EmailAddress][] within [Email Message][Email Message Property] is empty (i.e. `""`). |
| |Thrown when the [CertificatePath][] in the [GmailOAuthCertificateCredentials][] within [Gmail Session Details][Gmail Session Details Property] is empty (i.e. `""`). |
| |Thrown when the [CertificatePassword][] in the [GmailOAuthCertificateCredentials][] within [Gmail Session Details][Gmail Session Details Property] is empty (i.e. `""`). |
| |Thrown when the [FromAddress][] in the [GmailOAuthCertificateCredentials][] within [Gmail Session Details][Gmail Session Details Property] is empty (i.e. `""`). |
| |Thrown when the [ClientId][] in the [GmailOAuthCertificateCredentials][] within [Gmail Session Details][Gmail Session Details Property] is empty (i.e. `""`). |
| [PropertyValueOutOfRangeException][] |Thrown when the [Port][] in the [ServerDetails][] within [Gmail Session Details][Gmail Session Details Property] is below `1` or above `65535`. For more information, see [Property Is Invalid][]. |
| [SmtpCommandException][]             |Thrown when the [Address][] in an [EmailAddress][] within [Email Message][Email Message Property] is not of the correct format ([RFC 5321][]).|
| |Thrown when the combined size of all of the attachments in the list of [Attachments][] within the [Email Message][Email Message Property] is greater than the limit specified by the email service provider; for [Gmail][] this is `25 MB`.|
| [UnauthorizedAccessException][]      |Thrown when access is denied to a file provided in [Attachments][] within [Email Message][Email Message Property].|
| |Thrown when a file path within the [Attachments][] property within [Email Message][Email Message Property] points to a folder.|

## Remarks

### How does Priority affect sending an email?

An email sent with [Urgent][] or [NonUrgent][] priority will have its priority displayed differently depending on the email client. For example, [Outlook][] displays an email that has an [Urgent][] priority with a red exclamation mark like so:

{{< figure src="/images/send-email-using-smtp-server-important-email.png" >}}

For more information on how the priority of an email will be displayed, see the help provided by the respective email client.

### How does BodyFormat affect sending an email?

An email sent with an [HTML][] body will have its body displayed as an HTML page instead of as plain text. How the email looks in the email client may differ depending on the email client in use. For example, if the [Email Message][Email Message Property] has its [BodyFormat][] set to [HTML][] and the [Body][] has a value of:

```json
"<h1>Example header text</h1><p>Example paragraph text</p>"
```

[Outlook][] will display the email body as follows:

{{< figure src="/images/send-email-using-smtp-server-html-email.png" >}}

For more information on how the body of an email will be displayed, see the help provided by the respective email client.

### Attachments

Attachments can be sent in an email by providing a list of file paths in the [Attachments][] property of the [Email Message][Email Message Property]. For more information concerning attaching files to an email, see the sections below.

#### Supported file path formats

Each file path in the [Attachments][] within the [Email Message][Email Message Property] can be an:

- Absolute file path
- Relative file path
- UNC file path

where each file path must be accessible from the server executing the flow.

For more information about each of these supported file path formats, please see [File & Folder Paths][].

#### File paths need escaping

Each file path in the [Attachments][] within the [Email Message][Email Message Property] requires \ characters to be escaped, otherwise each unescaped \ will be reported as an Invalid property value message when trying to debug the flow.

Escaping can be done in two ways:

- Escaping the `\` character with another `\` character (e.g. `"C:\\Attachments\\attachment.txt"`), or
- Prepending an `@` character before the start of the File Path (e.g. `@"C:\Attachments\attachment.txt"`)

#### Null file path

If `null` is provided as a file path in the [Attachments][] within the [Email Message][Email Message Property], an [ArgumentNullException][] is thrown.

#### Empty file path

If an empty string is provided as a file path in the [Attachments][] within the [Email Message][Email Message Property], an [ArgumentException][] is thrown.

#### File path does not exist

If a file path in the [Attachments][] within the [Email Message][Email Message Property] does not exist, a [FileNotFoundException][] is thrown.

#### Invalid file path

If a file path in the [Attachments][] within the [Email Message][Email Message Property] is invalid (i.e. contains any of the following characters: ", *, ?, |, <, >, :, \, /), an [IOException][] will be thrown.

#### File path points to a folder

If a file path in the [Attachments][] within the [Email Message][Email Message Property] points to a folder, an [UnauthorizedAccessException][] will be thrown.

#### File path contains leading spaces

If a file path in the [Attachments][] within the [Email Message][Email Message Property] contains leading spaces they are not removed and an [IOException][] will be thrown; however, trailing spaces are removed.

#### File path contains only whitespace or the NUL character

If a file path in the [Attachments][] within the [Email Message][Email Message Property] contains only whitespace (i.e. `"  "`) or the NUL character (i.e. `\0`), an [ArgumentException][] will be thrown.

#### File path exceeds the system-defined maximum length

If a file path in the [Attachments][] within the [Email Message][Email Message Property] exceeds the system-defined maximum length (typically 32,767), a [PathTooLongException][] will be thrown.

#### User does not have necessary permissions to attach the file

If the user the flow is executing as does not have permissions to access the file at the provided file path in the [Attachments][] within the [Email Message][Email Message Property], an [UnauthorizedAccessException][] will be thrown.

#### Attachment size limit

The combined size of all the [Attachments][] within the [Email Message][Email Message Property] must be less than the limit specified by the email service provider. If the combined size of all of the attachments is greater than the limit, an [SmtpCommandException][] will be thrown.

For [Outlook][] this is `20 MB` and for [Gmail][] this is `25 MB`, for more information on the size limits for other email service providers, see the help provided by the respective email service provider.

### Supported formats for ServerDetails.Host

The following formats are supported for [Host][] in [ServerDetails][]:

- Fully Qualified Domain Name (e.g. `"smtp.gmail.com"`)

### Setting UseSsl

The [ServerDetails][] within the [Gmail Session Details][Gmail Session Details Property] specifies which [SMTP][] server to connect to. The value of the [UseSsl][] property inside this object depends on the [Host][] and [Port][] being connected to. There are two types of [SSL][]/[TLS][] connections that can occur:

- [SSL][]/[TLS][] is used as soon as a connection is established
- [SSL][]/[TLS][] is used via the STARTTLS command if it is available

The above two points correspond to the [UseSsl][] property being set to `true` and `false` respectively. As such, generally the following rules can be followed to determine whether [UseSsl][] should be set to `true` or `false`:

- If the [Port][] being connected to is `465` then [UseSsl][] should be set to `true`
- If the [Port][] being connected to is `25` or `587` then [UseSsl][] should be set to `false`

### Setting Credentials

The [Credentials][Credentials Property] within the [Gmail Session Details][Gmail Session Details Property] specifies what user to connect as on the [SMTP][] server hosted by [Gmail][]. Two types of authentication are supported:

- Basic
- OAuth (Two-Legged OAuth)

The above two authentication mechanisms correspond to the [Credentials][Credentials Property] within the [Gmail Session Details][Gmail Session Details Property] being a [UserCredentials][] and a [GmailOAuthCertificateCredentials][] respectively.

#### Setting Credentials to UserCredentials

Currently, [Gmail][] will not allow emails to be sent using the username and password of an account unless the account is associated with a Google Workspace account.

As such, the recommended approach for using a [UserCredentials][] as the [Credentials][Credentials Property] within the [Gmail Session Details][Gmail Session Details Property] is to set up an app password and use that in place of the actual password associated with the account, see [Setting up an app password for a Gmail account][] for more information.

Note the following:

- The value of the [Username][] property may optionally be encrypted, however the [Password][] should be encrypted.
- Note that the [UserCredentials][] also contains a [Domain][] property which is ignored by this block.

#### Setting Credentials to GmailOAuthCertificateCredentials

In order to use OAuth as the authentication mechanism:

- A client application must be set up on the Google Workspace
- A service account must be set up for the client application
- A private key (.p12 file) must be generated for the service account
- An administrator of the Google Workspace must grant the client application domain-wide delegation for the scope `https://mail.google.com/`

For more information on how to configure a [Gmail][] account to work with OAuth, see [Setting up a Gmail account for OAuth authentication][].

Once the account has been set up to work with OAuth, a [GmailOAuthCertificateCredentials][] can be used as the [Credentials][Credentials Property] within the [Gmail Session Details][Gmail Session Details Property]. The properties in the [GmailOAuthCertificateCredentials][] correspond with the client application data as follows:

- [CertificatePath][] - The path pointing to the certificate (.p12) file generated when setting up the client application; the certificate must be accessible from the server executing the flow, for more information on using a certificate file, see [Certificate Files][].
- [CertificatePassword][] - The password associated with the certificate (.p12)
- [FromAddress][] - The address of the account used to set up the client application
- [ClientId][] - The Client ID of the client application

Note that the values of the [CertificatePath][] and [ClientId][] properties may optionally be encrypted, however the [CertificatePassword][] should be encrypted.

For more detailed information on each of these properties, see [GmailOAuthCertificateCredentials][].

### Certificate Files

OAuth can be used as the authentication mechanism when sending an email using this block by providing a [GmailOAuthCertificateCredentials][] as the [Credentials][Credentials Property] in the [Gmail Session Details][Gmail Session Details Property]. [GmailOAuthCertificateCredentials][] requires a [CertificatePath][] to be provided, which is a path pointing to a certificate file accessible from the server executing the flow. For more information concerning using a certificate, see the sections below.

#### Supported CertificatePath formats

The [CertificatePath][] within the [GmailOAuthCertificateCredentials][] can be an:

- Absolute file path
- Relative file path
- UNC file path

where each file path must be accessible from the server executing the flow.

For more information about each of these supported file path formats, please see [File & Folder Paths][].

#### CertificatePath needs escaping

The [CertificatePath][] within the [GmailOAuthCertificateCredentials][] requires \ characters to be escaped, otherwise each unescaped \ will be reported as an Invalid property value message when trying to debug the flow.

Escaping can be done in two ways:

- Escaping the `\` character with another `\` character (e.g. `"C:\\Certificates\\certificate.p12"`), or
- Prepending an `@` character before the start of the File Path (e.g. `@"C:\Certificates\certificate.p12"`)

#### Null CertificatePath

If `null` is provided as the [CertificatePath][] within the [GmailOAuthCertificateCredentials][], a [PropertyNullException][] is thrown.

#### Empty CertificatePath

If an empty string is provided as the [CertificatePath][] within the [GmailOAuthCertificateCredentials][], a [PropertyEmptyException][] is thrown.

#### CertificatePath does not exist

If the path provided as the [CertificatePath][] within the [GmailOAuthCertificateCredentials][] does not exist, an [EmailSessionException][] is thrown. For more information, see [Invalid SSL Certificate][].

#### Invalid CertificatePath

If the path provided as the [CertificatePath][] within the [GmailOAuthCertificateCredentials][] is invalid (i.e. contains any of the following characters: ", *, ?, |, <, >, :, \, /), an [EmailSessionException][] will be thrown. For more information, see [Invalid SSL Certificate][].

#### CertificatePath points to a folder

If the path provided as the [CertificatePath][] within the [GmailOAuthCertificateCredentials][] points to a folder, an [EmailSessionException][] will be thrown. For more information, see [Invalid SSL Certificate][].

#### CertificatePath contains leading spaces

If the path provided as the [CertificatePath][] within the [GmailOAuthCertificateCredentials][] contains leading spaces they are not removed and an [EmailSessionException][] will be thrown; however, trailing spaces are removed. For more information, see [Invalid SSL Certificate][].

#### CertificatePath contains only whitespace or the NUL character

If the path provided as the [CertificatePath][] within the [GmailOAuthCertificateCredentials][] contains only whitespace (i.e. `"  "`) or the NUL character (i.e. `\0`), an [EmailSessionException][] will be thrown. For more information, see [Invalid SSL Certificate][].

#### CertificatePath exceeds the system-defined maximum length

If the path provided as the [CertificatePath][] within the [GmailOAuthCertificateCredentials][] exceeds the system-defined maximum length (typically 32,767), an [EmailSessionException][] will be thrown. For more information, see [Invalid SSL Certificate][].

#### User does not have necessary permissions to use the certificate file

If the user the flow is executing as does not have permissions to access the file at the [CertificatePath][] within the [GmailOAuthCertificateCredentials][], an [EmailSessionException][] will be thrown. For more information, see [Invalid SSL Certificate][].

### Opening Sessions

The Send Email Using Gmail block automatically handles creating and opening sessions for the specified [Gmail Session Details][Gmail Session Details Property] using the following rules:

- If a session does not exist, a new session will be created, opened and used when the block runs.
- If a session already exists but is closed, the session will be opened and used when the block runs.
- If a session already exists and is open, the session will be used when the block runs.

[Gmail Session Details][Gmail Session Details Property] will keep the session open across multiple Send Email Using Gmail blocks as long as [Close Session][Close Session Property] is set to `false`. Keeping the session open helps increase the performance of the block due to the subsequent blocks not having to spend resources creating and opening sessions for each execution.

Note that for all [SSL][] connections, the protocol to be used will be negotiated with the server depending on which protocols are available. Similarly, the [SASL][] mechanism to be used will be negotiated with the mail server based on the available mechanisms.

For information on how to explicitly close a session, please see [Closing Sessions][].

### Closing Sessions

Sessions can be explicitly closed by setting [Close Session][Close Session Property] to `true`. This causes the session to be closed after the [Email Message][Email Message Property] has been sent.

If [Close Session][Close Session Property] is set to `false` the session will be closed when the [Variable][] that [Gmail Session Details][Gmail Session Details Property] is set to goes out of scope or the flow ends, whichever happens first. For more information about variables and scope, please see [Variables][].

For information on how to open a session, please see [Opening Sessions][].

### Known Limitations

None

[Email Message Property]: {{< ref "#email-message" >}}
[Gmail Session Details Property]: {{< ref "#gmail-session-details" >}}
[Close Session Property]: {{< ref "#close-session" >}}
[How does Priority affect sending an email?]: {{< ref "#how-does-priority-affect-sending-an-email" >}}
[How does BodyFormat affect sending an email?]: {{< ref "#how-does-bodyformat-affect-sending-an-email" >}}
[Attachments Remarks]: {{< ref "#attachments" >}}
[Supported formats for ServerDetails.Host]: {{< ref "#supported-formats-for-serverdetailshost" >}}
[Setting Credentials]: {{< ref "#setting-credentials" >}}
[Setting UseSsl]: {{< ref "#setting-usessl" >}}
[Certificate Files]: {{< ref "#certificate-files" >}}
[Opening Sessions]: {{< ref "#opening-sessions" >}}
[Closing Sessions]: {{< ref "#closing-sessions" >}}

[Boolean]: {{< url path="Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
[EncryptedText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptedText.MainDoc" >}}

[EmailMessage]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessage.MainDoc" >}}
[To]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessage.To" >}}
[From]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessage.From" >}}
[Cc]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessage.Cc" >}}
[Bcc]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessage.Bcc" >}}
[Priority]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessage.Priority" >}}
[Subject]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessage.Subject" >}}
[BodyFormat]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessage.BodyFormat" >}}
[Body]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessage.Body" >}}
[Attachments]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessage.Attachments" >}}
[creating an EmailMessage using a constructor]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessage.CreateAnEmailMessage" >}}

[GmailSessionDetails]: {{< url path="Cortex.Reference.DataTypes.GoogleWorkspace.Gmail.GmailSessionDetails.MainDoc" >}}
[ServerDetails Property]: {{< url path="Cortex.Reference.DataTypes.GoogleWorkspace.Gmail.GmailSessionDetails.ServerDetails" >}}
[Credentials Property]: {{< url path="Cortex.Reference.DataTypes.GoogleWorkspace.Gmail.GmailSessionDetails.Credentials" >}}

[ServerDetails]: {{< url path="Cortex.Reference.DataTypes.SessionDetails.ServerDetails.MainDoc" >}}
[Host]: {{< url path="Cortex.Reference.DataTypes.SessionDetails.ServerDetails.Host" >}}
[Port]: {{< url path="Cortex.Reference.DataTypes.SessionDetails.ServerDetails.Port" >}}
[UseSsl]: {{< url path="Cortex.Reference.DataTypes.SessionDetails.ServerDetails.UseSsl" >}}

[UserCredentials]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.MainDoc" >}}
[Domain]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.Domain" >}}
[Username]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.Username" >}}
[Password]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.Password" >}}

[GmailOAuthCertificateCredentials]: {{< url path="Cortex.Reference.DataTypes.GoogleWorkspace.Gmail.Authentication.OAuth.GmailOAuthCertificateCredentials.MainDoc" >}}
[CertificatePath]: {{< url path="Cortex.Reference.DataTypes.GoogleWorkspace.Gmail.Authentication.OAuth.GmailOAuthCertificateCredentials.CertificatePath" >}}
[CertificatePassword]: {{< url path="Cortex.Reference.DataTypes.GoogleWorkspace.Gmail.Authentication.OAuth.GmailOAuthCertificateCredentials.CertificatePassword" >}}
[FromAddress]: {{< url path="Cortex.Reference.DataTypes.GoogleWorkspace.Gmail.Authentication.OAuth.GmailOAuthCertificateCredentials.FromAddress" >}}
[ClientId]: {{< url path="Cortex.Reference.DataTypes.GoogleWorkspace.Gmail.Authentication.OAuth.GmailOAuthCertificateCredentials.ClientId" >}}

[EmailAddress]: {{< url path="Cortex.Reference.DataTypes.Email.EmailAddress.MainDoc" >}}
[Address]: {{< url path="Cortex.Reference.DataTypes.Email.EmailAddress.Address" >}}

[EmailMessagePriority]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessagePriority.MainDoc" >}}
[Normal]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessagePriority.Normal" >}}
[Urgent]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessagePriority.Urgent" >}}
[NonUrgent]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessagePriority.NonUrgent" >}}

[EmailMessageBodyFormat]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessageBodyFormat.MainDoc" >}}
[HTML]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessageBodyFormat.HTML" >}}
[Text]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessageBodyFormat.Text" >}}

[Setting up an app password for a Gmail account]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Email.Authentication.SettingUpAppPassword" >}}
[Setting up a Gmail account for OAuth authentication]: {{< url path="Cortex.Reference.Concepts.WorkingWith.Email.Authentication.SettingUpOAuthGmail" >}}

[EmailSessionException]: {{< url path="Cortex.Reference.Exceptions.Email.EmailSessionException.MainDoc" >}}
[Invalid Port]: {{< url path="Cortex.Reference.Exceptions.Email.EmailSessionException.InvalidPort" >}}
[Invalid Host]: {{< url path="Cortex.Reference.Exceptions.Email.EmailSessionException.InvalidHost" >}}
[SSL Required]: {{< url path="Cortex.Reference.Exceptions.Email.EmailSessionException.SslRequired" >}}
[SSL Unsupported]: {{< url path="Cortex.Reference.Exceptions.Email.EmailSessionException.SslUnsupported" >}}
[Invalid User Credentials]: {{< url path="Cortex.Reference.Exceptions.Email.EmailSessionException.InvalidUserCredentials" >}}
[Invalid SSL Certificate]: {{< url path="Cortex.Reference.Exceptions.Email.EmailSessionException.InvalidSslCertificate" >}}
[Invalid Gmail Client Credentials]: {{< url path="Cortex.Reference.Exceptions.Email.EmailSessionException.InvalidClientCredentials" >}}
[EmailSessionErrorCode Limitations]: {{< url path="Cortex.Reference.DataTypes.Email.EmailSessionErrorCode.Limitations" >}}

[ArgumentException]: {{< url path="MSDocs.DotNet.Api.System.ArgumentException" >}}
[ArgumentNullException]: {{< url path="MSDocs.DotNet.Api.System.ArgumentNullException" >}}
[FileNotFoundException]: {{< url path="MSDocs.DotNet.Api.System.IO.FileNotFoundException" >}}
[IOException]: {{< url path="MSDocs.DotNet.Api.System.IO.IOException" >}}
[PathTooLongException]: {{< url path="MSDocs.DotNet.Api.System.IO.PathTooLongException" >}}
[PropertyNullException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyNullException.MainDoc" >}}
[PropertyEmptyException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyEmptyException.MainDoc" >}}
[PropertyValueOutOfRangeException]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.MainDoc" >}}
[Property Is Invalid]: {{< url path="Cortex.Reference.Exceptions.Common.Property.PropertyValueOutOfRangeException.PropertyIsInvalid">}}
[SmtpCommandException]: {{< url path="MimeKit.Docs.SmtpCommandException" >}}
[UnauthorizedAccessException]: {{< url path="MSDocs.DotNet.Api.System.UnauthorizedAccessException" >}}

[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.VariableEditor.MainDoc" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}
[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}
[Variables]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.MainDoc" >}}
[Advanced]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.AdvancedProperties.MainDoc" >}}
[File & Folder Paths]: {{< url path="Cortex.Reference.Concepts.WorkingWith.FilesAndFolders.Paths.MainDoc" >}}

[SASL]: {{< url path="Cortex.Reference.Glossary.P-T.SASL" >}}
[SMTP]: {{< url path="Cortex.Reference.Glossary.P-T.SMTP" >}}
[SSL]: {{< url path="Cortex.Reference.Glossary.P-T.SSL" >}}
[TLS]: {{< url path="Cortex.Reference.Glossary.P-T.TLS" >}}
[BCC Glossary]: {{< url path="Cortex.Reference.Glossary.A-E.BCC" >}}
[CC Glossary]: {{< url path="Cortex.Reference.Glossary.A-E.CC" >}}
[CRL]: {{< url path="Cortex.Reference.Glossary.A-E.CRL" >}}
[Gmail]: {{< url path="Cortex.Reference.Glossary.F-J.Gmail" >}}
[Outlook]: {{< url path="Cortex.Reference.Glossary.K-O.Outlook" >}}

[Less Secure Apps]: {{< url path="Google.Authentication.LessSecureApps.MainDoc" >}}
[RFC 5321]: {{< url path="IETF.Email.RFC5321" >}}
