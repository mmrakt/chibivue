import { createApp, defineComponent, ref } from 'chibivue'

const App = defineComponent({
  setup() {
    const inputText = ref('')

    const buffer = ref('')
    const handleInput = (e: Event) => {
      const target = e.target as HTMLInputElement
      buffer.value = target.value
    }
    const submit = () => {
      inputText.value = buffer.value
      buffer.value = ''
    }

    return { inputText, buffer, handleInput, submit }
  },

  template: `<div>
    <form @submit.prevent="submit">
      <input :value="buffer" @input="handleInput" />
      <button>submit</button>
    </form>
    <p>inputText: {{ inputText }}</p>
</div>`,
})

const app = createApp(App)

app.mount('#app')
