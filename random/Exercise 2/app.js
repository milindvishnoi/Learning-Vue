new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            alertMessage : function(){
                alert("Alert!");
            },
            setValue : function(event){
                this.value = event.target.value;
            }
        }
    });