/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  // Weitere Umgebungsvariablen hier hinzufügen, falls erforderlich
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
