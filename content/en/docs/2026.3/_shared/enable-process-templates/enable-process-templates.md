---
---
{{% alert title="Note" %}}A key must be purchased from {{< ahref path="OpenAI.MainDoc" title="OpenAI" >}} in order to enable the Process Templates.{{% /alert %}}

On the Web Application Server:

1. Open a File Explorer.
1. Navigate to the `gateway` IIS folder (typically `%SystemDrive%\inetpub\wwwroot\Cortex\gateway`, e.g. `C:\inetpub\wwwroot\Cortex\gateway`)
1. Open the `web.config` file.
1. Add an OpenAI key as a value associated with the setting `<setting name="OpenAI_Key" serializeAs="String">`. E.g.

    ``` txt
        <setting name="OpenAI_Key" serializeAs="String">
            <value>sk-svcDt-p5OiXFXcBtq-q5t9D95nfnfC8dd61i8_2XhIB9Dd—jbF5WoeapK1RszAB</value>
        </setting>
    ```

1. If required, the OpenAI model can be changed by replacing the existing value associated with the setting `<setting name="OpenAI_Model" serializeAs="String">` E.g.

    ``` txt
        <setting name="OpenAI_Model" serializeAs="String">
            <value>gpt-5</value>
        </setting>
    ```

1. Save and close the file.
