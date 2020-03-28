<template>
  <div class="col-sm-6 col-md-3">
    <div class="card text-white bg-info mb-3 center" style="max-width: 18rem;">
      <div class="card-title">
        <h4 class="card-title success">
          {{ state.name }}
        
         
        </h4>
      </div>
      <div class="card-body">
        <h5 class="card-title"><a :href="state.details">Details</a></h5>
         <small>Infected: {{ state.infected }}</small>
         
          <small>Deaths: {{ state.deaths }}</small>
        <div class="pull-left">
          <input
            class="form-control"
            type="number"
            placeholder="Quantity"
            v-model="quantity"
          />
        </div>
        <div class="card-body">
          <div class="pull-right">
            <button class="btn btn-success"
            @click="saveSnapshot()">Snapshot</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: 0
    };
  },
  methods:{
        saveSnapshot(){
              let snapShot= {
                    stateId: this.state.id,
                    deaths : this.state.deaths,
                    infected : this.state.infected,
                    date: Date.now()
              }
              console.log('snapShot :', snapShot);
              
        }
  },
  props: ["state"]
};
</script>
