console.log('ok', Vue);

const app = Vue.createApp({
    name: "App",
    data() {
        return {
            apiUri: 'http://localhost/php-dischi-json/discs.php',
            songs: [],
            genre: ['-- --', 'Pop', 'Jazz', 'Rock', 'Metal'],
            chosenGenre: '',
        }
    },
    methods: {
        toggleActive(song) {
            song.isActive = !song.isActive;
        },
        filterByGenre() {
            const data = { chosen_genre: this.chosenGenre }
            const config = { headers: { 'Content-Type': 'multipart/form-data' } };

            axios.post(this.apiUri, data, config).then(res => {
                this.songs = res.data;
            })
        },
    },
    mounted() {
        axios.get(this.apiUri).then(res => {
            this.songs = res.data; //saving datas in songs array
        })
    }
});

app.mount('#app');