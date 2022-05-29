const baseUrl = "https://restbike.azurewebsites.net/api/bikes"

// app oprettes
const app = Vue.createApp({
    data() { // appens værdier defineres
        return {
            bikes: [], //tomot array der kan indeholde alle cykler
            
        }
    },
    methods: {
        getAllBikes(){ //hent alle cykler
          this.getAllBikesHelper(baseUrl)
        },
        //helper method: det er for ikke at gøre flere ting inde i metoden
        //bliver genbrugt ofte af andre metoder/dele af programmet
        async getAllBikesHelper(url){// helper-metode til at hente alle cykler
            try{ //fejlhåndtering
                const result = await axios.get(url) // axios laver http-request(get) til REST-service
                this.bikes = result.data // arrayet bliver fyldt ud med dataene
                console.log(this.bikes) // udskrift til konsollen
            } catch (ex) { //ex = exception
                alert(ex.message) //fejlmeddelelse i tilfælde af noget går galt
            }
        },
    }

}).mount("#app") //her bliver appen mounted