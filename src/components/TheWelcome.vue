<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <div class="welcome">
    <h1>Welcome to JC Blackjack</h1>
    <p>This is an application to help you learn and practice Blackjack strategies.</p>
    <div class="welcome-items">
      <WelcomeItem icon="documentation" title="Documentation" />
      <WelcomeItem icon="tooling" title="Tooling" />
      <WelcomeItem icon="ecosystem" title="Ecosystem" />
      <WelcomeItem icon="community" title="Community" />
      <WelcomeItem icon="support" title="Support" />
    </div>
  </div>
</template>
