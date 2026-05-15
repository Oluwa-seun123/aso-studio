/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SITE_URL: string;
  readonly SITE_TITLE: string;
  readonly SITE_DESCRIPTION: string;
  readonly CONTACT_EMAIL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}