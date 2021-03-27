new Vue({
    el: '#app',

    data() {
        return {
            name: 'Bitcoin',
            symbol: 'BTC',
            img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
            changePercent: 4,
            value: 0,
            color: 'f4f4f4',
            price: 7000,
            pricesWithDays: [
                { day: 'Lunes', value: 8400 },
                { day: 'Martes', value: 3000 },
                { day: 'Miércoles', value: 5400 },
                { day: 'Jueves', value: 4999 },
                { day: 'Viernes', value: 6011 },
                { day: 'Sábado', value: 7000 },
                { day: 'Domingo', value: 8525 },
            ],
            showPrices: false,
        }
    },
    computed: {
        title() {
            return `${this.name} - ${this.symbol}`
        },

        convertedValue() {
            if (!this.value) {
                return 0
            }
            return this.value / this.price
        },
    },

    watch: {
        showPrices(newVal, oldVal) {
            console.log(newVal, oldVal)
        }
    },
    methods: {
        toggleShowPrices() {
            this.showPrices = !this.showPrices

            this.color = this.color.split('').reverse().join('')
        }
    },
})