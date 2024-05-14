<template>
  <div>
    <h1 class="text-white">{{ clientData?.id ? 'Edit' : 'Create' }}</h1>
    <form @submit="handleSubmit">
      <div class="mb-2">
        <label for="name">Company Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="Company Name"
          v-model="form.name"
          required=""
        />
      </div>
      <div class="mb-2">
        <label for="activity">Company Activity</label>
        <input
          type="text"
          class="form-control"
          id="activity"
          placeholder="Activity"
          v-model="form.activity"
          required=""
        />
      </div>

      <div class="mb-2">
        <label for="cin">CIN</label>
        <input
          type="string"
          class="form-control"
          id="cin"
          placeholder="CIN"
          maxlength="21"
          minlength="21"
          v-model="form.cin"
          required=""
        />
      </div>

      <div class="mb-2">
        <label for="registration">Registration Date</label>
        <input
          type="date"
          class="form-control"
          id="registration"
          placeholder=""
          v-model="form.registration_date"
          required=""
        />
      </div>

      <div class="mb-2">
        <label for="email">Email</label>
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="you@example.com"
          v-model="form.email"
          required=""
        />
      </div>

      <div class="mb-2">
        <label for="address">Address</label>
        <input
          type="text"
          class="form-control"
          id="address"
          placeholder="1234 Main St"
          v-model="form.address"
          required=""
        />
      </div>

      <div class="mb-2">
        <label for="pin-code">Pin Code</label>
        <input
          type="number"
          class="form-control"
          id="pin-code"
          placeholder="123456"
          v-model.number="form.pin_code"
          required=""
        />
      </div>

      <div class="mb-2">
        <label for="authrised">Authorised Capital</label>
        <input
          type="number"
          class="form-control"
          id="authrised"
          placeholder="123"
          v-model.number="form.authorised_capital"
          required=""
        />
      </div>

      <div class="mb-2">
        <label for="paid-up">Paid Up Capital</label>
        <input
          type="number"
          class="form-control"
          id="paid-up"
          placeholder="123"
          v-model.number="form.paid_up_capital"
          required=""
        />
      </div>

      <hr class="mb-2" />
      <button class="btn btn-primary btn-lg btn-block w-full" type="submit">
        {{ clientData?.id ? 'Update' : 'Save' }}
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'client-create',
  props: {
    clientData: { type: Object, default: () => {} }
  },
  data() {
    return {
      form: {
        name: '',
        activity: '',
        cin: '',
        registration_date: '',
        roc: '',
        status: '',
        authorised_capital: null,
        paid_up_capital: null,
        link: '',
        state: '',
        pin_code: null,
        country: '',
        address: '',
        email: ''
      }
    }
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault()
      try {
        const { data } = await this.$http.post(
          `/${this.clientData?.id || ''}`,
          this.form
        )
        this.$emit('update', {
          data: data.data.client,
          update: Boolean(this.clientData.id)
        })
        this.$emit('error', [])
      } catch (error) {
        console.log('Error : ', error, error.response)
        if (error.response.data) {
          const errorData = error.response?.data
          let errors = errorData?.message
          if (error.response.data.message === 'Validation Error')
            errors = errorData.errors
          this.$emit('error', errors)
        }
      }
    },
    emptyForm() {
      this.form = {
        name: '',
        activity: '',
        cin: '',
        registration_date: '',
        roc: '',
        status: '',
        authorised_capital: null,
        paid_up_capital: null,
        link: '',
        state: '',
        pin_code: null,
        country: '',
        address: '',
        email: ''
      }
    }
  },
  watch: {
    clientData: {
      immediate: true,
      handler(val) {
        if (val?.id) this.form = { ...val }
        else this.emptyForm()
      }
    }
  }
}
</script>

<style scoped>
label {
  color: azure;
}
form,
input {
  font-size: smaller;
}
</style>
