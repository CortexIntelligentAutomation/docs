The installation script starts the `Cortex AI Model Server` Windows service and waits until the AI model server is listening, so no further steps are needed to start it. To check it:

1. Open the `llama-server.log` file in the `C:\ProgramData\Cortex\AI Model Server\Logs` folder. The AI model server writes all of its log to this file. The last lines should state that the model has loaded and that the server is listening on the address and port it was installed with, e.g.:

    ```text
    llama_server: model loaded
    llama_server: listening on http://127.0.0.1:8080
    ```

1. When a GPU is used, check that the model has been loaded on to the GPU. Run the following command on the server, and check that `memory.used` is approximately 15-16 GB (16,000 MiB). This is the model (approximately 5.5 GB) and its working memory for the context, which the AI model server keeps on the GPU:

    ```powershell
    nvidia-smi --query-gpu=memory.used --format=csv
    ```

    If the AI model server has been set to unload the model after a number of minutes without a request (`IdleSleepMinutes`), run this check before that time has passed. If the memory used is much lower, the model is not loaded on to the GPU; see {{< ahref path="Cortex.GettingStarted.OnPremise.AddFlowDocumentationToInnovation.Advanced.TroubleshootingModelNotOnGPU" title="The Model Is Not Loaded on to the GPU" >}}.

The `Cortex AI Model Server` service starts automatically when the server starts.

If the AI model server has been set to unload the model after a period without requests, the log shows `server is entering sleeping state` when it does, and `server is exiting sleeping state` followed by the model loading again when the next documentation job starts. The first request of that job waits for the model to load, which can take from a few seconds to several minutes.
