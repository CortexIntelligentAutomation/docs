---
name: edit-versioned-images
description: Add or update versioned diagrams and screenshots under content/static. Use for figures, architecture diagrams, or draw.io editable assets.
paths: content/static/**/*
---

# Versioned images

## When to use

- New/updated `{{< figure >}}` or diagram in docs
- User mentions draw.io, editable folder, or architecture screenshots

## Steps

1. Confirm doc version → static folder `content/static/{version}/images/`.
2. Editable diagrams: `images/editable/` (see `content/static/2026.3/images/_ReadMe.md`).
3. Reference in markdown: `{{< figure src="/images/editable/....png" class="centre" title="..." >}}`.
4. Ensure file exists on disk before referencing (figure shortcode checks `content/static/{version}/...`).
5. For new versions, mirror structure from the latest version's `images/` tree when appropriate.

## Screenshot conventions (from _ReadMe)

- Service Fabric screenshots: 1500×700, device emulation, refresh off where noted.
