<template>
  <div class="text-white">
    <h1>Detail</h1>
    <div class="text-start">
      <div class="mb-1">
        <p><span class="fw-bold">Company Name:</span>{{ clientData.name }}</p>
      </div>
      <div class="mb-1">
        <p><span class="fw-bold">Company Activity: </span>{{ clientData.activity }}</p>
      </div>
      <div class="mb-1">
        <p><span class="fw-bold">CIN: </span>{{ clientData.cin }}</p>
      </div>
      <div class="mb-1">
        <p><span class="fw-bold">Registration Date: </span>{{ clientData.registration_date }}</p>
      </div>
      <div class="mb-1">
        <p><span class="fw-bold">Email: </span>{{ clientData.email }}</p>
      </div>
      <div class="mb-1">
        <p><span class="fw-bold">Address: </span>{{ clientData.address }}</p>
      </div>
      <div class="mb-1">
        <p><span class="fw-bold">Pin Code: </span>{{ clientData.pin_code }}</p>
      </div>
      <div class="mb-1">
        <p><span class="fw-bold">Authorised Capital: </span>{{ clientData.authorised_capital }}</p>
      </div>
      <div class="mb-1">
        <p><span class="fw-bold">Paid Up Capital: </span>{{ clientData.paid_up_capital }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'client-detail',
  props: {
    clientData: { type: Object, default: () => {} }
  },
}
</script>

<style scoped></style>
