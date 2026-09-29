---
---
{{% alert title="Note" %}}A key must be purchased from {{< ahref path="OpenAI.ApiKey" title="OpenAI" >}} in order to enable the Process Templates.{{% /alert %}}

On the Web Application Server:

1. Open a File Explorer.
1. Navigate to the `gateway` IIS folder (typically `%SystemDrive%\inetpub\wwwroot\Cortex\gateway`, e.g. `C:\inetpub\wwwroot\Cortex\gateway`)
1. Open the `web.config` file.
1. Add an OpenAI key as a value associated with the setting `<setting name="OpenAI_Key" serializeAs="String">`. E.g.

    ``` txt
        <setting name="OpenAI_Key" serializeAs="String">
            <value>tl-twdEu-q5PjYGYdCur-r5u9E95ogogD8ee61j8_2YiJC9Ee—kcG5XpfbqL1StaBC</value>
        </setting>
    ```

1. If required, the OpenAI model can be changed by replacing the existing value associated with the setting `<setting name="OpenAI_Model" serializeAs="String">` E.g.

    ``` txt
        <setting name="OpenAI_Model" serializeAs="String">
            <value>gpt-5</value>
        </setting>
    ```

    See [Open AI Models][] for a list of available models that can be used. Click on the model required and scroll down to `Snapshots` to find the Alias to use.

1. Save and close the file.

[Open AI Models]: {{< url path="OpenAI.Models" >}}
