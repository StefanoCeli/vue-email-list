const app = new Vue({

    el: '#app',
    data: {

       mails:[],
       error: false,
       result: ""
      
    },
    mounted(){

        this.callApi('https://flynn.boolean.careers/exercises/api/random/mail')

    },
    methods:{
      
        callApi(url){
            axios.get(url)
            .then( resp =>{
                this.mails.push(resp.data.response);
                if( this.mails.length < 10) this.callApi(url);
            })
            .catch( err => {
                console.log(err);
                this.error = true;
                this.result="404 Page not found"
            })
        }
       
    }

})
