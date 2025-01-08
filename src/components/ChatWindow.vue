<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="documents" class="messages" ref="messages">
      <div v-for="doc in documents" :key="doc.id" class="single">
        <span class="created-at">{{ timeago.format(doc.createdAt.toDate()) }}</span>
        <span class="name">{{ doc.name }}</span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { onUpdated } from 'vue';
import getCollection from '../composables/getCollection'
import { format } from 'timeago.js'
import { ref } from 'vue'
export default {
  setup() {
    const { error, documents } = getCollection('messages')
    const timeago = { format }

    
    //when a user enter the page for the first time, the chat will be scrolled to the bottom
    //when a new message is added, the chat will be scrolled to the bottom
    
    const messages = ref(null)
    onUpdated(() => {
      if (messages.value) {
        messages.value.scrollTop = messages.value.scrollHeight
      }
    })
    return { error, documents, timeago, messages }
  }
}
</script>

<style scoped>

  .chat-window {
    background: #fafafa;
    padding: 30px 20px;
  }
  .single {
    margin: 18px 0;
  }
  .created-at {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
  }
  .name {
    font-weight: bold;
    margin-right: 6px;
  }
  .messages {
    max-height: 400px;
    overflow: auto;
    scroll-behavior: smooth;
  }
</style>