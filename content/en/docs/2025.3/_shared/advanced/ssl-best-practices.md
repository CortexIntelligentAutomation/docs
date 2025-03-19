These are non-compulsory security measures, recommended to be applied to the servers, in order to prevent potential attacks that exploit known industry security vulnerabilities.

Applying these measures may impact other applications running on your server. Therefore, it is your responsibility to ensure that other applications and their clients will not be affected by the changes.

A collection of registry settings can be applied during installation to guarantee your server is only using the recommended encryption algorithms and TLS protocols:

| Type                  |   Name                                  |   Enabled   |
| --------------------- | ----------------------------------------| ----------- |
| Ciphers               | AES 128/128                             | ✓           |
|                       | AES 256/256                             | ✓           |
|                       | Triple DES 168                          | ✓           |
|                       | DES 56/56                               | ✕           |
|                       | NULL                                    | ✕           |
|                       | RC2 128/128                             | ✕           |
|                       | RC2 40/128                              | ✕           |
|                       | RC2 56/128                              | ✕           |
|                       | RC4 128/128                             | ✕           |
|                       | RC4 40/128                              | ✕           |
|                       | RC4 56/128                              | ✕           |
|                       | RC4 64/128                              | ✕           |
|                       |                                         |             |
| Hashes                | MD5                                     | ✕           |
|                       | SHA                                     | ✓           |
|                       | SHA256                                  | ✓           |
|                       | SHA384                                  | ✓           |
|                       | SHA512                                  | ✓           |
|                       |                                         |             |
| KeyExchangeAlgorithms | Diffie-Hellman                          | ✓           |
|                       | ECDH                                    | ✓           |
|                       | PKCS                                    | ✓           |
|                       |                                         |             |
| Protocols             | Multi-Protocol Unified Hello            | ✕           |
|                       | PCT 1.0                                 | ✕           |
|                       | SSL 2.0                                 | ✕           |
|                       | SSL 3.0                                 | ✕           |
|                       | TLS 1.0                                 | ✕           |
|                       | TLS 1.1                                 | ✕           |
|                       | TLS 1.2                                 | ✓           |
|                       |                                         |             |
| Cipher Suites         | TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384   | ✓            |
|                       | TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256   | ✓            |
|                       | TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384 | ✕            |
|                       | TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA25  | ✕            |
|                       | TLS_DHE_RSA_WITH_AES_256_GCM_SHA384     | ✕            |
|                       | TLS_DHE_RSA_WITH_AES_128_GCM_SHA256     | ✕            |
|                       | TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384 | ✕            |
|                       | TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256 | ✕            |
|                       | TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384   | ✕            |
|                       | TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256   | ✕            |
|                       | TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA    | ✕            |
|                       | TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA    | ✕            |
|                       | TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA      | ✕            |
|                       | TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA      | ✕            |
|                       | TLS_DHE_RSA_WITH_AES_256_CBC_SHA        | ✕            |
|                       | TLS_DHE_RSA_WITH_AES_128_CBC_SHA        | ✕            |
|                       | TLS_RSA_WITH_AES_256_GCM_SHA384         | ✕            |
|                       | TLS_RSA_WITH_AES_128_GCM_SHA256         | ✕            |
|                       | TLS_RSA_WITH_AES_256_CBC_SHA256         | ✕            |
|                       | TLS_RSA_WITH_AES_128_CBC_SHA256         | ✕            |
|                       | TLS_RSA_WITH_AES_256_CBC_SHA            | ✕            |
|                       | TLS_RSA_WITH_AES_128_CBC_SHA            | ✕            |
|                       | TLS_RSA_WITH_3DES_EDE_CBC_SHA           | ✕            |
|                       | TLS_DHE_DSS_WITH_AES_256_CBC_SHA256     | ✕            |
|                       | TLS_DHE_DSS_WITH_AES_128_CBC_SHA256     | ✕            |
|                       | TLS_DHE_DSS_WITH_AES_256_CBC_SHA        | ✕            |
|                       | TLS_DHE_DSS_WITH_AES_128_CBC_SHA        | ✕            |
|                       | TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA       | ✕            |
|                       | TLS_RSA_WITH_RC4_128_SHA                | ✕            |
|                       | TLS_RSA_WITH_RC4_128_MD5                | ✕            |
|                       | TLS_RSA_WITH_NULL_SHA256                | ✕            |
|                       | TLS_RSA_WITH_NULL_SHA                   | ✕            |
|                       | TLS_PSK_WITH_AES_256_GCM_SHA384         | ✕            |
|                       | TLS_PSK_WITH_AES_128_GCM_SHA256         | ✕            |
|                       | TLS_PSK_WITH_AES_256_CBC_SHA384         | ✕            |
|                       | TLS_PSK_WITH_AES_128_CBC_SHA256         | ✕            |
|                       | TLS_PSK_WITH_NULL_SHA384                | ✕            |
|                       | TLS_PSK_WITH_NULL_SHA256                | ✕            |

{{% alert type="warning" title="Warning" %}}Disabling specific TLS versions or specific Cipher Suites can have impact on {{% ctx %}} components themselves as well as their communication capabilities with third party systems and services, e.g. Execution Service executing flows with blocks which communicate with 3rd parties via PowerShell or REST. All parties communicating together must support a shared protocol version and cipher suite, otherwise they will not be able to establish a secure communication link between each other.{{% /alert %}}
