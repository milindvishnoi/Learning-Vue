<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="seletedComponent='appQuote'">Quote</button>
                <button @click="seletedComponent='appAuthor'">Author</button>
                <button @click="seletedComponent='appNew'">New</button>
                <hr>
                <p> {{ seletedComponent }} </p>
                <keep-alive>
                    <component :is=" seletedComponent">
                        <p>Default Content</p>
                    </component>
                </keep-alive>
<!--               <app-quote>-->
<!--                   <h2 slot="title"> {{ quoteTitle }} </h2>-->
<!--                   <p>Wonderful Quotes</p>-->
<!--               </app-quote>-->
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from "./components/Quote.vue";
    import New from "./components/New.vue";
    import Author from "./components/Author.vue";

    export default {
        data: function() {
          return {
              quoteTitle: 'The Quote',
              seletedComponent: 'appQuote'
          }
        },
        components:{
            appQuote: Quote,
            appNew: New,
            appAuthor: Author
        }
    }
</script>

<style>
</style>
