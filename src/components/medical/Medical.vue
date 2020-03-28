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
                              deaths:108,
                              details: "https://www.nj.gov/health/cd/topics/covid2019_dashboard.shtml"
                        },
                          {
                              id:2, 
                              name: 'PA',
                              infected: 2218,
                              deaths:22,
                              details: "https://www.health.pa.gov/topics/disease/coronavirus/Pages/Cases.aspx"
                        },
                  ]
                  }

            },
            components: {
                  appState: State
            }
      }

</script>    