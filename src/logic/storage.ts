import { useWebExtensionStorage } from '~/composables/useWebExtensionStorage'

function getDefaultConfig() {
  return {
    isCustomService: false,
    customService: '',
  }
}

export const storageConfig = useWebExtensionStorage('github-activity-config', getDefaultConfig())
