Vue.component('modal', {
    props: ['title'],

    methods: {
        close() {
            this.$emit('close')
        }
    },

    template: `
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div id="myModal" class="modal-container">
            <h3>{{ title }}</h3>
            <div>
              <slot name="body"></slot>
            </div>
            <footer>
              <button v-on:click="close">
                  Cerrar
              </button>
            </footer>
          </div>
        </div>
      </div>`
})

new Vue({
    el: '#app',
    data() {
        return {

            showModal: false,
            title: 'Modal con Vuejs',

        }
    },
    methods: {

        toggleModal() {
            this.showModal = !this.showModal
        }
    },
})