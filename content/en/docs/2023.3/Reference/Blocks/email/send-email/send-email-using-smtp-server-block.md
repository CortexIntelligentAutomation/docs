---
title: "Send Email Using SMTP Server"
linkTitle: "Send Email Using SMTP Server"
description: "Sends an email using the specified SMTP server."
---

{{< figure src="/blocks/email-send-email-using-smtp-server-block-icon.png" alt="Icon" class="block-icon" >}}

# {{% param title %}}

<p class="namespace">(Cortex.Blocks.Email.SendEmail.SendEmailUsingSmtpServerBlock)</p>

## Description

Connects to an [SMTP][] server using the specified [Basic Email Session Details][Basic Email Session Details Property], and sends an [Email Message][Email Message Property].

[Close Session][Close Session Property] can be specified to choose whether the connection to the [SMTP][] server is closed or is kept open for use on subsequent Send Email Using SMTP Server blocks.

## Examples

### Sending an email to a single recipient

This example will send an email from `sender@gmail.com` to `recipient@outlook.com`. The example uses the [SMTP][] server hosted at `smtp.gmail.com` on [Port][] `465` which requires [UseSsl][] to be to set to `true` within the [Basic Email Session Details][Basic Email Session Details Property].

For more information about when [UseSsl][] should be set to `true` or `false`, see [Setting UseSsl][].

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Email Message][Email Message Property] | `($)EmailMessage` with value `{"To":  [{"Name":  null,  "Address":  "recipient@outlook.com"}], "From": {"Name": null, "Address": "sender@gmail.com"}, "Cc": [], "Bcc": [], "Priority": null, "Subject": "Example email subject", "BodyFormat": null, "Body": "Example email body", "Attachments": []}`<br><br>In this example `($)EmailMessage` has been set up using the following [Expression][]:<br><br>`new EmailMessage(to: new List<EmailAddress>(){ new EmailAddress("recipient@outlook.com") }, from: new EmailAddress("sender@gmail.com"), cc: null, bcc: null, priority: null, subject: "Example email subject", bodyFormat: null, body: "Example email body", attachments: null)` | `($)EmailMessage` is a variable of type [EmailMessage][]<br><br>As [Priority][] and [BodyFormat][] are `null`, the email will be sent with a [Text][] body and [Normal][] priority.|
| [Basic Email Session Details][Basic Email Session Details Property] | `($)BasicEmailSessionDetails` with value `{"ServerDetails": {"Host": "smtp.gmail.com", "Port": 465, "UseSsl": true}, "Credentials": {"Domain": null, "Username": "sender@gmail.com", "Password": "encryptedPassword"}}`<br><br>In this example `($)BasicEmailSessionDetails` has been set up using the following [Expression][]:<br><br> `new BasicEmailSessionDetails(serverDetails: new ServerDetails("smtp.gmail.com", 465, true), credentials: new UserCredentials("sender@gmail.com", "encryptedPassword"))` | `($)BasicEmailSessionDetails` is a variable of type [BasicEmailSessionDetails][]<br><br>The [Password][] property in the [UserCredentials][] must be encrypted, for more information on how to encrypt the password, see [EncryptedText][]. |
| [Close Session][Close Session Property] | `($)CloseSession` with value `true` |`($)CloseSession` is a variable of type [Boolean][] |

#### Result

An email with [Normal][] priority is sent from `sender@gmail.com` to `recipient@outlook.com` with a subject of `"Example email subject"` and a [Text][] body of `"Example email body"`, and then the session is closed.

***

### Sending an email to multiple recipients

This example will send an email from `sender@gmail.com` to `recipient1@outlook.com`, `recipient2@outlook.com` and `recipient3@outlook.com`. The example uses the [SMTP][] server hosted at `smtp.gmail.com` on [Port][] `465` which requires [UseSsl][] to be set to `true` within the [Basic Email Session Details][Basic Email Session Details Property].

For more information about when [UseSsl][] should be set to `true` or `false`, see [Setting UseSsl][].

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Email Message][Email Message Property] | `($)EmailMessage` with value `{"To":  [{"Name":  null,  "Address":  "recipient1@outlook.com"},  {"Name":  null,  "Address":  "recipient2@outlook.com"}, {"Name": null, "Address": "recipient3@outlook.com"}], "From": {"Name": null, "Address": "sender@gmail.com"}, "Cc": [], "Bcc": [], "Priority": null, "Subject": "Example email subject", "BodyFormat": null, "Body": "Example email body", "Attachments": []}`<br><br>In this example `($)EmailMessage` has been set up using the following [Expression][]:<br><br> `new EmailMessage(to: new List<EmailAddress>(){ new EmailAddress("recipient1@outlook.com"), new EmailAddress("recipient2@outlook.com"), new EmailAddress("recipient3@outlook.com") }, from: new EmailAddress("sender@gmail.com"), cc: null, bcc: null, priority: null, subject: "Example email subject", bodyFormat: null, body: "Example email body", attachments: null)` | `($)EmailMessage` is a variable of type [EmailMessage][]<br><br>As [Priority][] and [BodyFormat][] are `null`, the email will be sent with a [Text][] body and [Normal][] priority. |
| [Basic Email Session Details][Basic Email Session Details Property] | `($)BasicEmailSessionDetails` with value `{"ServerDetails": {"Host": "smtp.gmail.com", "Port": 465, "UseSsl": true}, "Credentials": {"Domain": null, "Username": "sender@gmail.com", "Password": "encryptedPassword"}}`<br><br>In this example `($)BasicEmailSessionDetails` has been set up using the following [Expression][]:<br><br> `new BasicEmailSessionDetails(serverDetails: new ServerDetails("smtp.gmail.com", 465, true), credentials: new UserCredentials("sender@gmail.com", "encryptedPassword"))` | `($)BasicEmailSessionDetails` is a variable of type [BasicEmailSessionDetails][]<br><br>The [Password][] property in the [UserCredentials][] must be encrypted, for more information on how to encrypt the password, see [EncryptedText][]. |
| [Close Session][Close Session Property] | `($)CloseSession` with value `true` |`($)CloseSession` is a variable of type [Boolean][] |

#### Result

An email with [Normal][] priority is sent from `sender@gmail.com` to `recipient1@outlook.com`, `recipient2@outlook.com` and `recipient3@outlook.com` with a subject of `"Example email subject"` and a [Text][] body of `"Example email body"`, and then the session is closed.

***

### Sending an email with a CC or BCC recipient

This example will send an email from `sender@gmail.com` to `recipient@outlook.com` with `cc@outlook.com` and `bcc@outlook.com` as the [CC][CC Glossary] and [BCC][BCC Glossary] recipients for the email respectively. The example uses the [SMTP][] server hosted at `smtp.gmail.com` on [Port][] `465` which requires [UseSsl][] to be set to `true` within the [Basic Email Session Details][Basic Email Session Details Property].

For more information about when [UseSsl][] should be set to `true` or `false`, see [Setting UseSsl][].

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Email Message][Email Message Property] | `($)EmailMessage` with value `{"To": [{"Name": null, "Address": "recipient@outlook.com"}], "From": {"Name": null, "Address": "sender@gmail.com"}, "Cc": [{"Name": null, "Address": "cc@outlook.com"}], "Bcc": [{"Name": null, "Address": "bcc@outlook.com"}], "Priority": null, "Subject": "Example email subject", "BodyFormat": null, "Body": "Example email body", "Attachments": []}`<br><br>In this example `($)EmailMessage` has been set up using the following [Expression][]:<br><br> `new EmailMessage(to: new List<EmailAddress>(){ new EmailAddress("recipient@outlook.com") }, from: new EmailAddress("sender@gmail.com"), cc: new List<EmailAddress>(){ new EmailAddress("cc@outlook.com") }, bcc: new List<EmailAddress>(){ new EmailAddress("bcc@outlook.com") }, priority: null, subject: "Example email subject", bodyFormat: null, body: "Example email body", attachments: null)` | `($)EmailMessage` is a variable of type [EmailMessage][]<br><br>As [Priority][] and [BodyFormat][] are `null`, the email will be sent with a [Text][] body and [Normal][] priority. |
| [Basic Email Session Details][Basic Email Session Details Property] | `($)BasicEmailSessionDetails` with value `{"ServerDetails": {"Host": "smtp.gmail.com", "Port": 465, "UseSsl": true}, "Credentials": {"Domain": null, "Username": "sender@gmail.com", "Password": "encryptedPassword"}}`<br><br>In this example `($)BasicEmailSessionDetails` has been set up using the following [Expression][]:<br><br> `new BasicEmailSessionDetails(serverDetails: new ServerDetails("smtp.gmail.com", 465, true), credentials: new UserCredentials("sender@gmail.com", "encryptedPassword"))` | `($)BasicEmailSessionDetails` is a variable of type [BasicEmailSessionDetails][]<br><br>The [Password][] property in the [UserCredentials][] must be encrypted, for more information on how to encrypt the password, see [EncryptedText][]. |
| [Close Session][Close Session Property] | `($)CloseSession` with value `true` |`($)CloseSession` is a variable of type [Boolean][] |

#### Result

An email with [Normal][] priority is sent from `sender@gmail.com` to `recipient@outlook.com` with a subject of `"Example email subject"` and a [Text][] body of `"Example email body"`. Both `cc@outlook.com` and `bcc@outlook.com` will also recieve copies of the email as they are listed as [CC][CC Glossary] and [BCC][BCC Glossary] recipients, and then the session is closed.

***

### Sending an email with multiple CC or BCC recipients

This example will send an email from `sender@gmail.com` to `recipient@outlook.com` with `cc1@outlook.com` and `cc2@outlook.com` as the [CC][CC Glossary] recipients and `bcc1@outlook.com` and `bcc2@outlook.com` as the [BCC][BCC Glossary] recipients for the email. The example uses the [SMTP][] server hosted at `smtp.gmail.com` on [Port][] `465` which requires [UseSsl][] to be set to `true` within the [Basic Email Session Details][Basic Email Session Details Property].

For more information about when [UseSsl][] should be set to `true` or `false`, see [Setting UseSsl][].

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Email Message][Email Message Property] | `($)EmailMessage` with value `{"To": [{"Name": null, "Address": "recipient@outlook.com"}], "From": {"Name": null, "Address": "sender@gmail.com"}, "Cc": [{"Name": null, "Address": "cc1@outlook.com"}, {"Name": null, "Address": "cc2@outlook.com"}], "Bcc": [{"Name": null, "Address": "bcc1@outlook.com"}, {"Name": null, "Address": "bcc2@outlook.com"}], "Priority": null, "Subject": "Example email subject", "BodyFormat": null, "Body": "Example email body", "Attachments": []}`<br><br>In this example `($)EmailMessage` has been set up using the following [Expression][]:<br><br> `new EmailMessage(to: new List<EmailAddress>(){ new EmailAddress("recipient@outlook.com") }, from: new EmailAddress("sender@gmail.com"), cc: new List<EmailAddress>(){ new EmailAddress("cc1@outlook.com"), new EmailAddress("cc2@outlook.com") }, bcc: new List<EmailAddress>(){ new EmailAddress("bcc1@outlook.com"), new EmailAddress("bcc2@outlook.com") }, priority: null, subject: "Example email subject", bodyFormat: null, body: "Example email body", attachments: null)` | `($)EmailMessage` is a variable of type [EmailMessage][]<br><br>As [Priority][] and [BodyFormat][] are `null`, the email will be sent with a [Text][] body and [Normal][] priority. |
| [Basic Email Session Details][Basic Email Session Details Property] | `($)BasicEmailSessionDetails` with value `{"ServerDetails": {"Host": "smtp.gmail.com", "Port": 465, "UseSsl": true}, "Credentials": {"Domain": null, "Username": "sender@gmail.com", "Password": "encryptedPassword"}}`<br><br>In this example `($)BasicEmailSessionDetails` has been set up using the following [Expression][]:<br><br> `new BasicEmailSessionDetails(serverDetails: new ServerDetails("smtp.gmail.com", 465, true), credentials: new UserCredentials("sender@gmail.com", "encryptedPassword"))` | `($)BasicEmailSessionDetails` is a variable of type [BasicEmailSessionDetails][]<br><br>The [Password][] property in the [UserCredentials][] must be encrypted, for more information on how to encrypt the password, see [EncryptedText][]. |
| [Close Session][Close Session Property] | `($)CloseSession` with value `true` |`($)CloseSession` is a variable of type [Boolean][] |

#### Result

An email with [Normal][] priority is sent from `sender@gmail.com` to `recipient@outlook.com` with a subject of `"Example email subject"` and a [Text][] body of `"Example email body"`. Both `cc1@outlook.com` and `cc2@outlook.com` will also recieve copies of the email as they are listed as [CC][CC Glossary] recipients, and both `bcc1@outlook.com` and `bcc2@outlook.com` will recieve copies of the email as they are listed as [BCC][BCC Glossary] recipients. Finally, the session is closed.

***

### Sending an email with a different priority

This example will send an email with [Urgent][] priority from `sender@gmail.com` to `recipient@outlook.com`. The example uses the [SMTP][] server hosted at `smtp.gmail.com` on [Port][] `465` which requires [UseSsl][] to be set to `true` within the [Basic Email Session Details][Basic Email Session Details Property].

For more information on:

- What priorities an email can be sent as, see [EmailMessagePriority][]
- The effect of changing the [Priority][] of the [Email Message][Email Message Property], see [How does Priority affect sending an email?][]
- When [UseSsl][] should be set to `true` or `false`, see [Setting UseSsl][].

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Email Message][Email Message Property] | `($)EmailMessage` with value `{"To": [{"Name": null, "Address": "recipient@outlook.com"}], "From": {"Name": null, "Address": "sender@gmail.com"}, "Cc": [], "Bcc": [], "Priority": "EmailMessagePriority.Urgent", "Subject": "Example email subject", "BodyFormat": null, "Body": "Example email body", "Attachments": []}`<br><br>In this example `($)EmailMessage` has been set up using the following [Expression][]:<br><br> `new EmailMessage(to: new List<EmailAddress>(){ new EmailAddress("recipient@outlook.com") }, from: new EmailAddress("sender@gmail.com"), cc: null, bcc: null, priority: EmailMessagePriority.Urgent, subject: "Example email subject", bodyFormat: null, body: "Example email body", attachments: null)` | `($)EmailMessage` is a variable of type [EmailMessage][]<br><br>As [BodyFormat][] is `null`, the email will be sent with a [Text][] body.|
| [Basic Email Session Details][Basic Email Session Details Property] | `($)BasicEmailSessionDetails` with value `{"ServerDetails": {"Host": "smtp.gmail.com", "Port": 465, "UseSsl": true}, "Credentials": {"Domain": null, "Username": "sender@gmail.com", "Password": "encryptedPassword"}}`<br><br>In this example `($)BasicEmailSessionDetails` has been set up using the following [Expression][]:<br><br> `new BasicEmailSessionDetails(serverDetails: new ServerDetails("smtp.gmail.com", 465, true), credentials: new UserCredentials("sender@gmail.com", "encryptedPassword"))` | `($)BasicEmailSessionDetails` is a variable of type [BasicEmailSessionDetails][]<br><br>The [Password][] property in the [UserCredentials][] must be encrypted, for more information on how to encrypt the password, see [EncryptedText][]. |
| [Close Session][Close Session Property] | `($)CloseSession` with value `true` |`($)CloseSession` is a variable of type [Boolean][] |

#### Result

An email with [Urgent][] priority is sent from `sender@gmail.com` to `recipient@outlook.com` with a subject of `"Example email subject"` and a [Text][] body of `"Example email body"`, and then the session is closed.

***

### Sending an email with an HTML body

This example will send an email with an [HTML][] body from `sender@gmail.com` to `recipient@outlook.com`. The example uses the [SMTP][] server hosted at `smtp.gmail.com` on [Port][] `465` which requires [UseSsl][] to be set to `true` within the [Basic Email Session Details][Basic Email Session Details Property].

For more information on:

- What other body formats an email can be sent with, see [EmailMessageBodyFormat][]
- The effect of changing the [BodyFormat][] of the [Email Message][Email Message Property], see [How does BodyFormat affect sending an email?][]
- When [UseSsl][] should be set to `true` or `false`, see [Setting UseSsl][].

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Email Message][Email Message Property] | `($)EmailMessage` with value `{"To": [{"Name": null, "Address": "recipient@outlook.com"}], "From": {"Name": null, "Address": "sender@gmail.com"}, "Cc": [], "Bcc": [], "Priority": null, "Subject": "Example email subject", "BodyFormat": "EmailMessageBodyFormat.Html", "Body": "<h1>Example email body</h1>", "Attachments": []}`<br><br>In this example `($)EmailMessage` has been set up using the following [Expression][]:<br><br> `new EmailMessage(to: new List<EmailAddress>(){ new EmailAddress("recipient@outlook.com") }, from: new EmailAddress("sender@gmail.com"), cc: null, bcc: null, priority: null, subject: "Example email subject", bodyFormat: EmailMessageBodyFormat.Html, body: "<h1>Example email body</h1>", attachments: null)` | `($)EmailMessage` is a variable of type [EmailMessage][]<br><br> As [Priority][] is `null`, the email will be sent with [Normal][] priority. |
| [Basic Email Session Details][Basic Email Session Details Property] | `($)BasicEmailSessionDetails` with value `{"ServerDetails": {"Host": "smtp.gmail.com", "Port": 465, "UseSsl": true}, "Credentials": {"Domain": null, "Username": "sender@gmail.com", "Password": "encryptedPassword"}}`<br><br>In this example `($)BasicEmailSessionDetails` has been set up using the following [Expression][]:<br><br> `new BasicEmailSessionDetails(serverDetails: new ServerDetails("smtp.gmail.com", 465, true), credentials: new UserCredentials("sender@gmail.com", "encryptedPassword"))` | `($)BasicEmailSessionDetails` is a variable of type [BasicEmailSessionDetails][]<br><br>The [Password][] property in the [UserCredentials][] must be encrypted, for more information on how to encrypt the password, see [EncryptedText][]. |
| [Close Session][Close Session Property] | `($)CloseSession` with value `true` |`($)CloseSession` is a variable of type [Boolean][] |

#### Result

An email with [Normal][] priority is sent from `sender@gmail.com` to `recipient@outlook.com` with a subject of `"Example email subject"` and an [HTML][] body of `"<h1>Example email body</h1>"`, and then the session is closed.

***

### Sending an email with a single attachment

This example will send an email with a single attachment, `attachment.txt`, from `sender@gmail.com` to `recipient@outlook.com`. The attachment is located at `C:\attachment.txt` on the server executing the flow. The example uses the [SMTP][] server hosted at `smtp.gmail.com` on [Port][] `465` which requires [UseSsl][] to be set to `true` within the [Basic Email Session Details][Basic Email Session Details Property].

For more information on:

- Email attachments, see [Attachments][Attachments Remarks]
- When [UseSsl][] should be set to `true` or `false`, see [Setting UseSsl][].

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Email Message][Email Message Property] | `($)EmailMessage` with value `{"To": [{"Name": null, "Address": "recipient@outlook.com"}], "From": {"Name": null, "Address": "sender@gmail.com"}, "Cc": [], "Bcc": [], "Priority": null, "Subject": "Example email subject", "BodyFormat": null, "Body": "Example email body", "Attachments": ["C:\\attachment.txt"]}`<br><br>In this example `($)EmailMessage` has been set up using the following [Expression][]:<br><br> `new EmailMessage(to: new List<EmailAddress>(){ new EmailAddress("recipient@outlook.com") }, from: new EmailAddress("sender@gmail.com"), cc: null, bcc: null, priority: null, subject: "Example email subject", bodyFormat: null, body: "Example email body", attachments: new List<string>(){ @"C:\attachment.txt" })` | `($)EmailMessage` is a variable of type [EmailMessage][]<br><br>As [Priority][] and [BodyFormat][] are `null`, the email will be sent with a [Text][] body and [Normal][] priority.<br><br>The [Attachments][Attachments Remarks] are added to the email by providing file paths pointing to the files to be attached to the email. |
| [Basic Email Session Details][Basic Email Session Details Property] | `($)BasicEmailSessionDetails` with value `{"ServerDetails": {"Host": "smtp.gmail.com", "Port": 465, "UseSsl": true}, "Credentials": {"Domain": null, "Username": "sender@gmail.com", "Password": "encryptedPassword"}}`<br><br>In this example `($)BasicEmailSessionDetails` has been set up using the following [Expression][]:<br><br> `new BasicEmailSessionDetails(serverDetails: new ServerDetails("smtp.gmail.com", 465, true), credentials: new UserCredentials("sender@gmail.com", "encryptedPassword"))` | `($)BasicEmailSessionDetails` is a variable of type [BasicEmailSessionDetails][]<br><br>The [Password][] property in the [UserCredentials][] must be encrypted, for more information on how to encrypt the password, see [EncryptedText][]. |
| [Close Session][Close Session Property] | `($)CloseSession` with value `true` |`($)CloseSession` is a variable of type [Boolean][] |

#### Result

An email with [Normal][] priority containing a text file attachment, `attachment.txt`, is sent from `sender@gmail.com` to `recipient@outlook.com` with a subject of `"Example email subject"` and a [Text][] body of `"Example email body"`, and then the session is closed.

***

### Sending an email with multiple attachments

This example will send an email with mutiple attachments, `attachment1.txt` and `attachment2.txt` from `sender@gmail.com` to `recipient@outlook.com`.  The attachments are located at the paths `C:\attachment1.txt` and `C:\attachment2.txt` on the server executing the flow. The example uses the [SMTP][] server hosted at `smtp.gmail.com` on [Port][] `465` which requires [UseSsl][] to be set to `true` within the [Basic Email Session Details][Basic Email Session Details Property].

For more information on:

- Email attachments, see [Attachments][Attachments Remarks]
- When [UseSsl][] should be set to `true` or `false`, see [Setting UseSsl][].

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Email Message][Email Message Property] | `($)EmailMessage` with value `{"To": [{"Name": null, "Address": "recipient@outlook.com"}], "From": {"Name": null, "Address": "sender@gmail.com"}, "Cc": [], "Bcc": [], "Priority": null, "Subject": "Example email subject", "BodyFormat": null, "Body": "Example email body", "Attachments": ["C:\\attachment1.txt", "C:\\attachment2.txt"]}`<br><br>In this example `($)EmailMessage` has been set up using the following [Expression][]:<br><br> `new EmailMessage(to: new List<EmailAddress>(){ new EmailAddress("recipient@outlook.com") }, from: new EmailAddress("sender@gmail.com"), cc: null, bcc: null, priority: null, subject: "Example email subject", bodyFormat: null, body: "Example email body", attachments: new List<string>(){ @"C:\attachment1.txt", @"C:\attachment2.txt" })` | `($)EmailMessage` is a variable of type [EmailMessage][]<br><br>As [Priority][] and [BodyFormat][] are `null`, the email will be sent with a [Text][] body and [Normal][] priority.<br><br>The [Attachments][Attachments Remarks] are added to the email by providing file paths pointing to the files to be attached to the email. |
| [Basic Email Session Details][Basic Email Session Details Property] | `($)BasicEmailSessionDetails` with value `{"ServerDetails": {"Host": "smtp.gmail.com", "Port": 465, "UseSsl": true}, "Credentials": {"Domain": null, "Username": "sender@gmail.com", "Password": "encryptedPassword"}}`<br><br>In this example `($)BasicEmailSessionDetails` has been set up using the following [Expression][]:<br><br> `new BasicEmailSessionDetails(serverDetails: new ServerDetails("smtp.gmail.com", 465, true), credentials: new UserCredentials("sender@gmail.com", "encryptedPassword"))` | `($)BasicEmailSessionDetails` is a variable of type [BasicEmailSessionDetails][]<br><br>The [Password][] property in the [UserCredentials][] must be encrypted, for more information on how to encrypt the password, see [EncryptedText][]. |
| [Close Session][Close Session Property] | `($)CloseSession` with value `true` |`($)CloseSession` is a variable of type [Boolean][] |

#### Result

An email with [Normal][] priority containing two text file attachments, `attachment1.txt` and `attachment2.txt`, is sent from `sender@gmail.com` to `recipient@outlook.com` with a subject of `"Example email subject"` and a [Text][] body of `"Example email body"`, and then the session is closed.

***

### Sending an email with UseSsl set to false

This example will send an email from `sender@outlook.com` to `recipient@outlook.com`. The example uses the [SMTP][] server hosted at `smtp-mail.outlook.com` on [Port][] `587` which requires [UseSsl][] to be set to `false` within the [Basic Email Session Details][Basic Email Session Details Property].

For more information on when [UseSsl][] should be set to `true` or `false`, see [Setting UseSsl][].

#### Properties

| Property           | Value                     | Notes                                    |
|--------------------|---------------------------|------------------------------------------|
| [Email Message][Email Message Property] | `($)EmailMessage` with value `{"To":  [{"Name":  null,  "Address":  "recipient@outlook.com"}], "From": {"Name": null, "Address": "sender@outlook.com"}, "Cc": [], "Bcc": [], "Priority": null, "Subject": "Example email subject", "BodyFormat": null, "Body": "Example email body", "Attachments": []}`<br><br>In this example `($)EmailMessage` has been set up using the following [Expression][]:<br><br>`new EmailMessage(to: new List<EmailAddress>(){ new EmailAddress("recipient@outlook.com") }, from: new EmailAddress("sender@outlook.com"), cc: null, bcc: null, priority: null, subject: "Example email subject", bodyFormat: null, body: "Example email body", attachments: null)` | `($)EmailMessage` is a variable of type [EmailMessage][]<br><br>As [Priority][] and [BodyFormat][] are `null`, the email will be sent with a [Text][] body and [Normal][] priority.|
| [Basic Email Session Details][Basic Email Session Details Property] | `($)BasicEmailSessionDetails` with value `{"ServerDetails": {"Host": "smtp-mail.outlook.com", "Port": 587, "UseSsl": false}, "Credentials": {"Domain": null, "Username": "sender@outlook.com", "Password": "encryptedPassword"}}`<br><br>In this example `($)BasicEmailSessionDetails` has been set up using the following [Expression][]:<br><br> `new BasicEmailSessionDetails(serverDetails: new ServerDetails("smtp-mail.outlook.com", 587, false), credentials: new UserCredentials("sender@outlook.com", "encryptedPassword"))` | `($)BasicEmailSessionDetails` is a variable of type [BasicEmailSessionDetails][]<br><br>The [Password][] property in the [UserCredentials][] must be encrypted, for more information on how to encrypt the password, see [EncryptedText][]. |
| [Close Session][Close Session Property] | `($)CloseSession` with value `true` |`($)CloseSession` is a variable of type [Boolean][] |

#### Result

An email with [Normal][] priority is sent from `sender@outlook.com` to `recipient@outlook.com` with a subject of `"Example email subject"` and a [Text][] body of `"Example email body"`, and then the session is closed.

***

## Properties

### Email Message

The [Email Message][Email Message Property] to send via the [SMTP][] server specified in the [Basic Email Session Details][Basic Email Session Details Property]. This property contains all of the information in relation to the email to be sent, these are:

- [To][]
- [From][]
- [Cc][]
- [Bcc][]
- [Priority][]
- [Subject][]
- [BodyFormat][]
- [Body][]
- [Attachments][]

Note that if the properties [Priority][] and [BodyFormat][] are set to `null` when [creating an EmailMessage using a constructor][], the email will be sent with [Normal][] priority and with a text body.

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

### Basic Email Session Details

The [Basic Email Session Details][Basic Email Session Details Property] object that includes all of the information required to open and maintain a session with an [SMTP][] server, including:

- [ServerDetails][ServerDetails Property] - must be provided in order to connect to an [SMTP][] server. This object contains the properties [Host][], [Port][] and [UseSsl][]. For more information on:
  - Supported server address formats, see [Supported formats for ServerDetails.Host][].
  - When [UseSsl][] should be set to `true` or `false`, see [Setting UseSsl][].
- [Credentials][Credentials Property] - must be provided in order to connect to an [SMTP][] server. This object contains the properties [Username][] and [Password][] to be used for authentication. For more information, see [Setting Credentials][].

If the [Close Session][Close Session Property] property is set to `false`, then the session will be kept open and can be used in subsequent Send Email Using SMTP Server blocks which improves performance, see [Opening Sessions][] for more information.

For more detailed information on each of the properties, see [BasicEmailSessionDetails][].

|||
|----------|----------|
| Data Type | [BasicEmailSessionDetails][] |
| Property Type | [InputOutput][] |
| Is [Advanced][] | `false` |
| Default Editor | [Variable][] |
| Default Value | `($)BasicEmailSessionDetails` with no value |

### Close Session

[Close Session][Close Session Property] can be specified to choose whether the session is closed or is kept open for use on subsequent Send Email Using SMTP Server blocks, this defaults to `false` if left blank, please see [Closing Sessions][Closing Sessions] for more information.

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
| [EmailSessionException][]            |Thrown when an invalid [Port][] is provided in the [ServerDetails][] within the [Basic Email Session Details][Basic Email Session Details Property]. For more information, see [Invalid Port][].|
| |Thrown when an invalid [Host][] is provided in the [ServerDetails][] within the [Basic Email Session Details][Basic Email Session Details Property]. For more information, see [Invalid Host][].|
| |Thrown when a connection cannot be established; this typically occurs when [UseSsl][] within [Basic Email Session Details][Basic Email Session Details Property] is set to `false` with a [Port][] which requires it to be set to `true`. For more information, see [SSL Required][]. |
| |Thrown when a connection cannot be established; this typically occurs when [UseSsl][] within [Basic Email Session Details][Basic Email Session Details Property] is set to `true` with a [Port][] which requires it to be set to `false`. For more information, see [SSL Unsupported][]. |
| |Thrown when the [TLS][]/[SSL][] certificate has expired on the [Host][] or is untrusted or invalid. For more information, see [SSL Unsupported][]. Note that this exception has the same category and error code as the above row, this is a known limitation, see [EmailSessionErrorCode Limitations][]. |
| |Thrown when a locally installed anti-virus software replaces the [TLS][]/[SSL][] certificate in order to scan web traffic. For more information, see [SSL Unsupported][]. Note that this exception has the same category and error code as the above row, this is a known limitation, see [EmailSessionErrorCode Limitations][]. |
| |Thrown when the [CRL][] (Certificate Revocation List) server for the [TLS][]/[SSL][] certificate is down. For more information, see [SSL Unsupported][]. Note that this exception has the same category and error code as the above row, this is a known limitation, see [EmailSessionErrorCode Limitations][]. |
| |Thrown when the [Username][] and [Password][] in the [UserCredentials][] within [Basic Email Session Details][Basic Email Session Details Property] is incorrect. For more information, see [Invalid User Credentials][]. |
| [FileNotFoundException][]            |Thrown when a non-existent file path is provided in [Attachments][] within [Email Message][Email Message Property]. |
| [IOException][]                      |Thrown when the desired socket is held by another process; re-running the flow typically solves this. |
| |Thrown when a file path within [Attachments][] within the [Email Message][Email Message Property] contains leading spaces.|
| |Thrown when a file path within [Attachments][] within the [Email Message][Email Message Property] contains invalid characters (i.e. `"`, `*`, `?`, `\|`, `<`, `>`, `:`, `\`, `/`).|
| [PathTooLongException][]             |Thrown when a file path provided in the [Attachments][] within the [Email Message][Email Message Property] exceeds the system-defined maximum length (typically 32,767).|
| [PropertyNullException][]            |Thrown when the [Basic Email Session Details][Basic Email Session Details Property] is `null`. |
| |Thrown when the [UserCredentials][] within [Basic Email Session Details][Basic Email Session Details Property] is `null`. |
| |Thrown when the [ServerDetails][] within [Basic Email Session Details][Basic Email Session Details Property] is `null`. |
| |Thrown when the [Host][] in [ServerDetails][] within [Basic Email Session Details][Basic Email Session Details Property] is `null`. |
| |Thrown when the [Email Message][Email Message Property] is `null`. |
| |Thrown when the [To][] within [Email Message][Email Message Property] is `null`. |
| |Thrown when the [From][] within [Email Message][Email Message Property] is `null`. |
| |Thrown when the [Address][] in an [EmailAddress][] within [Email Message][Email Message Property] is `null`. |
| [PropertyEmptyException][]           |Thrown when the [Host][] in [ServerDetails][] within [Basic Email Session Details][Basic Email Session Details Property] is empty (i.e. `""`). |
| |Thrown when the [To][] within [Email Message][Email Message Property] is empty (i.e. `[]`). |
| |Thrown when the [Address][] in an [EmailAddress][] within [Email Message][Email Message Property] is empty (i.e. `""`). |
| [PropertyValueOutOfRangeException][] |Thrown when the [Port][] in the [ServerDetails][] within [Basic Email Session Details][Basic Email Session Details Property] is below `1` or above `65535`. For more information, see [Property Is Invalid][]. |
| [SmtpCommandException][]             |Thrown when the [Address][] in an [EmailAddress][] within [Email Message][Email Message Property] is not of the correct format ([RFC 5321][]).|
| |Thrown when the combined size of all of the attachments in the list of [Attachments][] within the [Email Message][Email Message Property] is greater than the limit specified by the email service provider; for [Outlook][] this is `20 MB` and for [Gmail][] this is `25 MB`.|
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

If an empty string is provided as a file path in the the [Attachments][] within the [Email Message][Email Message Property], an [ArgumentException][] is thrown.

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
- Machine name (e.g. `"mail-server1"`)
- IP address (e.g. `"127.0.0.1"`)
- Localhost (e.g. `"localhost"`)

### Setting UseSsl

The [ServerDetails][] within the [Basic Email Session Details][Basic Email Session Details Property] specifies which [SMTP][] server to connect to. The value of the [UseSsl][] property inside this object depends on the [Host][] and [Port][] being connected to. There are two types of [SSL][]/[TLS][] connections that can occur:

- [SSL][]/[TLS][] is used as soon as a connection is established
- [SSL][]/[TLS][] is used via the STARTTLS command if it is available

The above two points correspond to the [UseSsl][] property being set to `true` and `false` respectively. As such, generally the following rules can be followed to determine whether [UseSsl][] should be set to `true` or `false`:

- If the [Port][] being connected to is `465` then [UseSsl][] should be set to `true`
- If the [Port][] being connected to is `25` or `587` then [UseSsl][] should be set to `false`

### Setting Credentials

The [UserCredentials][] within the [Basic Email Session Details][Basic Email Session Details Property] specifies what user to connect as on the [SMTP][] server. The value of the [Username][] property may optionally be encrypted, however the [Password][] should be encrypted. For more information on how to encrypt the password, see [EncryptedText][].

Note that the [UserCredentials][] object also contains a [Domain][] property which is ignored by this block.

### Opening Sessions

The Send Email Using SMTP Server block automatically handles creating and opening sessions for the specified [Basic Email Session Details][Basic Email Session Details Property] using the following rules:

- If a session does not exist, a new session will be created, opened and used when the block runs.
- If a session already exists but is closed, the session will be opened and used when the block runs.
- If a session already exists and is open, the session will be used when the block runs.

[Basic Email Session Details][Basic Email Session Details Property] will keep the session open across multiple Send Email Using SMTP Server blocks as long as [Close Session][Close Session Property] is set to `false`. Keeping the session open helps increase the performance of the block due to the subsequent blocks not having to spend resources creating and opening sessions for each execution.

Note that for all [SSL][] connections, the protocol to be used will be negotiated with the server depending on which protocols are available. Similarly, the [SASL][] mechanism to be used will be negotiated with the mail server based on the available mechanisms.

For information on how to explicitly close a session, please see [Closing Sessions][].

### Closing Sessions

Sessions can be explicitly closed by setting [Close Session][Close Session Property] to `true`. This causes the session to be closed after the [Email Message][Email Message Property] has been sent.

If [Close Session][Close Session Property] is set to `false` the session will be closed when the [Variable][] that [Basic Email Session Details][Basic Email Session Details Property] is set to goes out of scope or the flow ends, whichever happens first. For more information about variables and scope, please see [Variables][].

For information on how to open a session, please see [Opening Sessions][].

### Known Limitations

Currently unauthenticated [SMTP][] servers are not supported.

This limitation may be removed in the future.

[Email Message Property]: {{< ref "#email-message" >}}
[Basic Email Session Details Property]: {{< ref "#basic-email-session-details" >}}
[Close Session Property]: {{< ref "#close-session" >}}

[How does Priority affect sending an email?]: {{< ref "#how-does-priority-affect-sending-an-email" >}}
[How does BodyFormat affect sending an email?]: {{< ref "#how-does-bodyformat-affect-sending-an-email" >}}
[Setting UseSsl]: {{< ref "#setting-usessl" >}}
[Setting Credentials]: {{< ref "#setting-credentials" >}}
[Opening Sessions]: {{< ref "#opening-sessions" >}}
[Closing Sessions]: {{< ref "#closing-sessions" >}}
[Attachments Remarks]: {{< ref "#attachments" >}}
[Supported formats for ServerDetails.Host]: {{< ref "#supported-formats-for-serverdetailshost" >}}

[Input]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.Input" >}}
[InputOutput]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.WhatIsABlockProperty.InputOutput" >}}

[EmailSessionException]: {{< url path="Cortex.Reference.Exceptions.Email.EmailSessionException.MainDoc" >}}
[Invalid Port]: {{< url path="Cortex.Reference.Exceptions.Email.EmailSessionException.InvalidPort" >}}
[Invalid Host]: {{< url path="Cortex.Reference.Exceptions.Email.EmailSessionException.InvalidHost" >}}
[SSL Required]: {{< url path="Cortex.Reference.Exceptions.Email.EmailSessionException.SslRequired" >}}
[SSL Unsupported]: {{< url path="Cortex.Reference.Exceptions.Email.EmailSessionException.SslUnsupported" >}}
[Invalid User Credentials]: {{< url path="Cortex.Reference.Exceptions.Email.EmailSessionException.InvalidUserCredentials" >}}
[creating an EmailMessage using a constructor]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessage.CreateAnEmailMessage" >}}

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

[EmailAddress]: {{< url path="Cortex.Reference.DataTypes.Email.EmailAddress.MainDoc" >}}
[Address]: {{< url path="Cortex.Reference.DataTypes.Email.EmailAddress.Address" >}}

[EmailMessagePriority]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessagePriority.MainDoc" >}}
[Normal]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessagePriority.Normal" >}}
[Urgent]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessagePriority.Urgent" >}}
[NonUrgent]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessagePriority.NonUrgent" >}}

[EmailMessageBodyFormat]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessageBodyFormat.MainDoc" >}}
[HTML]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessageBodyFormat.HTML" >}}
[Text]: {{< url path="Cortex.Reference.DataTypes.Email.EmailMessageBodyFormat.Text" >}}

[BasicEmailSessionDetails]: {{< url path="Cortex.Reference.DataTypes.Email.BasicEmailSessionDetails.MainDoc" >}}
[Credentials Property]: {{< url path="Cortex.Reference.DataTypes.Email.BasicEmailSessionDetails.Credentials" >}}
[ServerDetails Property]: {{< url path="Cortex.Reference.DataTypes.Email.BasicEmailSessionDetails.ServerDetails" >}}

[UserCredentials]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.MainDoc" >}}
[Domain]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.Domain" >}}
[Username]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.Username" >}}
[Password]: {{< url path="Cortex.Reference.DataTypes.Credentials.UserCredentials.Password" >}}

[ServerDetails]: {{< url path="Cortex.Reference.DataTypes.SessionDetails.ServerDetails.MainDoc" >}}
[Host]: {{< url path="Cortex.Reference.DataTypes.SessionDetails.ServerDetails.Host" >}}
[Port]: {{< url path="Cortex.Reference.DataTypes.SessionDetails.ServerDetails.Port" >}}
[UseSsl]: {{< url path="Cortex.Reference.DataTypes.SessionDetails.ServerDetails.UseSsl" >}}

[Boolean]: {{< url path="Cortex.Reference.DataTypes.ConditionalLogic.Boolean.MainDoc" >}}
[EncryptedText]: {{< url path="Cortex.Reference.DataTypes.Text.EncryptedText.MainDoc" >}}

[Expression]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.ExpressionEditor.MainDoc" >}}
[Variable]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Variables.UsingVariables.MainDoc" >}}
[Literal]: {{< url path="Cortex.Reference.Concepts.Fundamentals.Blocks.BlockProperties.PropertyEditors.LiteralEditor.MainDoc" >}}

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
[RFC 5321]: {{< url path="IETF.Email.RFC5321" >}}
