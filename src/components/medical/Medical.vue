 <template>
      <div>
       <h1>The States Medical Component</h1>
       <app-state v-for="state in states" :state="state"></app-state>
      </div>
</template>

<script>    
      import State from './State.vue'
      export default {
            data(){
             return{
                  states :[
                        {
                              id:1, 
                              name: 'NJ',
                              infected: 8825,
                              deaths:108
                        },
                          {
                              id:2, 
                              name: 'PA',
                              infected: 2218,
                              deaths:22
                        },
                  ]
                  }

            },
            components: {
                  appState: State
            }
      }

</script>    