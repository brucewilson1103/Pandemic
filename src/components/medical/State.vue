<template>
  <div class="col-sm-6 col-md-3">
    <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
      <div class="card-header">
        <h4 class="card-header success">
          {{ state.name }}
          <br />
          <small>Infected: {{ state.infected }}</small>
          <br />
          <small>Deaths: {{ state.deaths }}</small>
        </h4>
      </div>
      <div class="card-body">
        <h5 class="card-title">Info card title</h5>
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
            <button class="btn btn-success">Snapshot</button>
          </div>
        </div>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
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
  props: ["state"]
};
</script>
