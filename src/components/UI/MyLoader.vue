<template>
  <div id="app">
    <half-circle-spinner
      :animation-duration="1000"
      :size="30"
      :color=color
    />
  </div>
</template>

<script>
import { HalfCircleSpinner } from "epic-spinners";

export default {
  components: {
    HalfCircleSpinner,
  },
  props : {
    color : {
      type : String,
      default : '#59BBE4'
    }
  }
};
</script>
