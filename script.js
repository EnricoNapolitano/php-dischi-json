console.log('ok', Vue);

const app = Vue.createApp({
    name: "App",
    data() {
        return {
            apiUri: 'http://localhost/php-dischi-json/discs.php',
            songs: [],
        }
    },
    mounted() {
        axios.get(this.apiUri).then(res => {
            this.songs = res.data; //saving datas in songs array
        })
    }
});

app.mount('#app');