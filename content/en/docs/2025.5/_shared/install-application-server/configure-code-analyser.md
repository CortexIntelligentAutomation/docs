A Code Analyser used to restrict what C# code can be executed from flows within {{% ctx %}} has been installed. It is enabled and secure by default, restricting all C# data types and namespaces other than those required to run an empty flow.

{{% alert title="Warning" color="warning" %}}This security feature WILL prevent any flows, other than an empty flow, from running.{{< /alert >}}

It can either be [disabled][Disable Code Analyser], or it's configured Allowed list can be [updated][Update Code Analyser] to allow the required C# data types and namespaces.

[Update Code Analyser]: {{< ref "#update-code-analyser-allowed-list" >}}
[Disable Code Analyser]: {{< ref "#disable-code-analyser" >}}
