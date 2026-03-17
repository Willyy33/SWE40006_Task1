/// <reference types="vite/client" />

export interface Api {
  onUpdateAvailable: (callback: () => void) => void
  onUpdateDownloaded: (callback: () => void) => void
  installUpdate: () => Promise<void>
}

declare global {
  interface Window {
    electron?: ElectronAPI
    api?: Api
  }
}