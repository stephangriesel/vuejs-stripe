<template>
  <section class="showcase">
    <div class="">
      <h3></h3>
      <div class="img"></div>
    </div>
  </section>
  <div class="">
    <form>
      <fieldset class="fields">
        <div class=""></div>
        <div class="">
          <label for="name_field">Name</label>
          <input
            placeholder="Jane Doe"
            type="text"
            name="name"
            id="name_field"
            class=""
          />
        </div>
        <div class="">
          <label for="email_field">Email</label>
          <input
            placeholder="jane.doe@example.com "
            type="email"
            name="email"
            id="email_field"
            class=""
          />
        </div>
        <div class="">
          <label for="address_field">Address</label>
          <input
            placeholder="1234 Sycamore Street"
            type="text"
            name="address"
            id="address_field"
            class=""
          />
        </div>
        <div class="">
          <label for="city_field">City</label>
          <input
            placeholder="Amsterdam"
            type="text"
            name="city"
            id="city_field"
            class=""
          />
        </div>
        <div class="">
          <label for="state_field">State</label>
          <input
            placeholder="Noord Holland"
            type="text"
            name="state"
            id="state_field"
            class=""
          />
        </div>
        <div class="">
          <label for="zip_field">Zip</label>
          <input
            placeholder="89523"
            type="text"
            name="zip"
            id="zip_field"
            class=""
          />
        </div>
        <div class="">
          <label for="email_field">Credit Card</label>
          <div id="stripe-element-mount-point" class="" />
        </div>
      </fieldset>
      <div class="">
        <button type="submit" class="btn is-primary" :class="{dis: loading}">
          {{ loading ? 'Loading...' : 'Pay 14' }}
        </button>
      </div>
    </form>
  </div>
  <h2></h2>
  <div class=" mt">
    <button type="button" class="btn is-success" @click="redirect"></button>
  </div>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
.checkout {
  border: 1px solid black;
  padding: 3px;
}
.fields {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 30px;
}
.img {
  display: flex;
  justify-content: center;
}
.showcase {
  margin-bottom: 20px;
}
.mt {
  margin-top: 20px;
}
.dis {
  opacity: 0.5;
  cursor: default;
  pointer-events: none;
}
button {
  margin-top: 30px;
}
</style>
