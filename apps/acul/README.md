# React + TypeScript + Vite

ACUL screen prompts

## Make sure you're using at least Node v 20

```
src/
  components/
    prompts/            // Majority of logic + ui code
      login-id/
      login-pwless-otp/
      signup-id/
    shared/       
      acul/             // Shared screen components
      components/       // Shared ui components
      utils/            // Helper functions
```

Example PATCH ACUL req:
```
curl --location --request PATCH 'https://t2vercel.mvbuilt.com/api/v2/prompts/login-id/screen/login-id/rendering' \
--header 'Content-Type: application/json' \
--header 'Authorization: ••••••' \
--data '{
    "rendering_mode": "advanced",
    "context_configuration": [
        "branding.themes.default",
        "client.logo_uri",
        "client.description",
        "client.metadata.google_tracking_id",
        "screen.texts",
        "tenant.enabled_locales",
        "untrusted_data.submitted_form_data",
        "untrusted_data.authorization_params.login_hint",
        "untrusted_data.authorization_params.screen_hint",
        "untrusted_data.authorization_params.ext-from"
    ],
    "head_tags": [
        {
            "tag": "script",
            "attributes": {
                "src": "http://localhost:8080/dist/prompts/login-id.js",
                "defer": true,
                "type":"module"
            }
        },
        {
            "tag": "link",
            "attributes": {
                "rel": "stylesheet",
                "href": "http://localhost:8080/dist/prompts/assets/style.css"
            }
        },
        {
            "tag":"script",
            "attributes": {
                "src":"http://localhost:8080/dist/prompts/shared/createLucideIcon-DaDaDLCb.js",
                "type":"module",
                "defer": true
            }
        },
        {
            "tag":"script",
            "attributes": {
                "src":"http://localhost:8080/dist/prompts/shared/index-DhC38K1g.js",
                "type":"module",
                "defer": true
            }
        },
        {
            "tag":"script",
            "attributes": {
                "src":"http://localhost:8080/dist/prompts/shared/index-Cm2FR-bJ.js",
                "type":"module",
                "defer": true
            }
        }
    ]
}'
```


## Currently being hosted in an empty proj in Vercel 
- https://ultest.vercel.app/prompts/login-id.js
- https://ultest.vercel.app/prompts/signup-id.js
- https://ultest.vercel.app/prompts/login-pwless-otp.js



