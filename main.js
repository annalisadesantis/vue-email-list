// Tramite l'API https://flynn.boolean.careers/exercises/api/random/mail generare una lista di 10 indirizzi email e stamparle in pagina con vue.

var app = new Vue({
    el: "#root",
    data: {
        email: [],
        titolo: " "
    },
    mounted() {

        for (var i = 0; i < 10; i++) {
            const self = this;
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(function(response) {
                    console.log(response.data);
                    self.email.push(response.data.response);

                    self.titolo = `Qui ${self.email.length} email scelte per te:`;
                });
        }



    }

});
