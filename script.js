Vue.createApp({
    data() {
        return {
            showRequest: false,
            number:'',
            profiles: [],

        }
    },
    methods: {
        async fetchAPI() {
            await axios.get('https://randomuser.me/api/?results=5')
                .then((response) => {
                    for (const key in response.data.results) {
                        response.data.results[key].id = key;
                        let data = response.data.results[key]
                        this.profiles.push(data)
                        this.number = this.profiles.length
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        },

        async refresh() {
            await axios.get('https://randomuser.me/api/?results=5')
                .then((response) => {
                    for (const key in response.data.results) {
                        response.data.results[key].id = key;
                        let data = response.data.results[key]
                        this.profiles.push(data)
                        this.number = this.profiles.length
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        show() {
            this.showRequest = !this.showRequest
        },
    },
    mounted() {
        this.fetchAPI()
    }
}).mount("#app")

