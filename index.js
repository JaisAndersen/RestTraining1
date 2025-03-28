const baseUri = "http://jsonplaceholder.typicode.com/posts";

VTTCue.createApp({
    data() {
        return{
            posts: [],
            error: null,
            userId: ""
        }
    },
    async created(){
        console.log("created method called")
        this.getPosts(baseUri)
    },
    methods: {
        async getPosts(uri) {
            try {
                const response = await axios.get(uri)
                this.posts = await response.data
                this.error = null
            } catch (ex){
                this.posts = []
                this.error = ex.message
            }
        },
        cleanList(){
            this.posts =[]
            this.userId = null
        },
        async getByUserId(uid) {
            if (uid == null || uid == "") {
                this.error = "Nu user id ...."
                this.posts =[]
            } else {
                const uri = baseUri + "?userId=" + uid
                console.log("getByUserId: " + uri)
                this.getPosts(uri)
            }
        }  
    }
}).mount("#app")