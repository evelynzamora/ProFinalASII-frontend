<template>
    <div>
        <h1>Employees</h1>
        <b-button v-b-modal.modal-1 variant="success">Add</b-button>
		<b-button v-b-modal.modal-2 variant="primary">Update</b-button>
		<b-button v-b-modal.modal-3 variant="danger">Delete</b-button>

        
        <b-modal id="modal-1" title="Add Employees">
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <b-form-group
                    id="input-group-id_employee"
                    label="ID Employee:"
                    label-for="input-id_employee">
                        <b-form-input
                            id="input-id_employee"
                            v-model="form.id_employee"
                            type="text"
                            required
                            placeholder="Enter ID Employee">
                        </b-form-input>
                </b-form-group>
                <b-form-group
                    id="input-group-id_job"
                    label="ID Job:"
                    label-for="input-id_job">
                        <b-form-input
                            id="input-id_job"
                            v-model="form.id_job"
                            type="text"
                            required
                            placeholder="Enter ID Job">
                        </b-form-input>
                </b-form-group>
                <b-form-group
                    id="input-group-name"
                    label="Name:"
                    label-for="input-name">
                        <b-form-input
                            id="input-name"
                            v-model="form.name"
                            type="text"
                            required
                            placeholder="Enter Name">
                        </b-form-input>
                </b-form-group>
                <b-form-group
                    id="input-group-lastname"
                    label="Last Name:"
                    label-for="input-lastname">
                        <b-form-input
                            id="input-lastname"
                            v-model="form.lastname"
                            type="text"
                            required
                            placeholder="Enter Last Name">
                        </b-form-input>
                </b-form-group>
                <b-form-group
                    id="input-group-dpi"
                    label="DPI:"
                    label-for="input-dpi">
                        <b-form-input
                            id="input-dpi"
                            v-model="form.dpi"
                            type="text"
                            required
                            placeholder="Enter DPI">
                        </b-form-input>
                </b-form-group>
                <b-form-group
                    id="input-group-address"
                    label="Address:"
                    label-for="input-address">
                        <b-form-input
                            id="input-address"
                            v-model="form.address"
                            type="text"
                            required
                            placeholder="Enter Address">
                        </b-form-input>
                </b-form-group>
                <b-form-group
                    id="input-group-phone"
                    label="Phone:"
                    label-for="input-phone">
                        <b-form-input
                            id="input-phone"
                            v-model="form.phone"
                            type="text"
                            required
                            placeholder="Enter Phone">
                        </b-form-input>
                </b-form-group>
                <b-form-group
                    id="input-group-contact_phone"
                    label="Contact Phone:"
                    label-for="input-contact_phone">
                        <b-form-input
                            id="input-contact_phone"
                            v-model="form.contact_phone"
                            type="text"
                            required
                            placeholder="Enter Contact phone">
                        </b-form-input>
                </b-form-group>
                <b-form-group
                    id="input-group-birthdate"
                    label="Birthdate:"
                    label-for="input-birthdate">
                        <b-form-input
                            id="input-birthdate"
                            v-model="form.birthdate"
                            type="date"
                            required
                            placeholder="Enter Birthdate">
                        </b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary">Save</b-button>
                <b-button type="reset" variant="danger">Cancel</b-button>
            </b-form>
        </b-modal>


        <b-modal id="modal-2" title="Update Employees">
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <b-form-group
                    id="input-group-id_employee"
                    label="ID Employee:"
                    label-for="input-id_employee">
                        <b-form-input
                            id="input-id_employee"
                            v-model="form.id_employee"
                            type="text"
                            required
                            placeholder="Enter ID Employee">
                        </b-form-input>
                </b-form-group>
                <b-form-group
                    id="input-group-id_job"
                    label="ID Job:"
                    label-for="input-id_job">
                        <b-form-input
                            id="input-id_job"
                            v-model="form.id_job"
                            type="text"
                            required
                            placeholder="Enter ID Job">
                        </b-form-input>
                </b-form-group>
                <b-form-group
                    id="input-group-name"
                    label="Name:"
                    label-for="input-name">
                        <b-form-input
                            id="input-name"
                            v-model="form.name"
                            type="text"
                            required
                            placeholder="Enter Name">
                        </b-form-input>
                </b-form-group>
                <b-form-group
                    id="input-group-lastname"
                    label="Last Name:"
                    label-for="input-lastname">
                        <b-form-input
                            id="input-lastname"
                            v-model="form.lastname"
                            type="text"
                            required
                            placeholder="Enter Last Name">
                        </b-form-input>
                </b-form-group>
                <b-form-group
                    id="input-group-dpi"
                    label="DPI:"
                    label-for="input-dpi">
                        <b-form-input
                            id="input-dpi"
                            v-model="form.dpi"
                            type="text"
                            required
                            placeholder="Enter DPI">
                        </b-form-input>
                </b-form-group>
                <b-form-group
                    id="input-group-address"
                    label="Address:"
                    label-for="input-address">
                        <b-form-input
                            id="input-address"
                            v-model="form.address"
                            type="text"
                            required
                            placeholder="Enter Address">
                        </b-form-input>
                </b-form-group>
                <b-form-group
                    id="input-group-phone"
                    label="Phone:"
                    label-for="input-phone">
                        <b-form-input
                            id="input-phone"
                            v-model="form.phone"
                            type="text"
                            required
                            placeholder="Enter Phone">
                        </b-form-input>
                </b-form-group>
                <b-form-group
                    id="input-group-contact_phone"
                    label="Contact Phone:"
                    label-for="input-contact_phone">
                        <b-form-input
                            id="input-contact_phone"
                            v-model="form.contact_phone"
                            type="text"
                            required
                            placeholder="Enter Contact phone">
                        </b-form-input>
                </b-form-group>
                <b-form-group
                    id="input-group-birthdate"
                    label="Birthdate:"
                    label-for="input-birthdate">
                        <b-form-input
                            id="input-birthdate"
                            v-model="form.birthdate"
                            type="date"
                            required
                            placeholder="Enter Birthdate">
                        </b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary">Save</b-button>
                <b-button type="reset" variant="danger">Cancel</b-button>
            </b-form>
        </b-modal>


        <b-modal id="modal-3" title="Delete Employees">
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <b-form-group
                    id="input-group-id_employee"
                    label="ID Employee:"
                    label-for="input-id_employee">
                        <b-form-input
                            id="input-id_employee"
                            v-model="form.id_employee"
                            type="text"
                            required
                            placeholder="Enter ID Employee">
                        </b-form-input>
                </b-form-group>
                
                <b-button type="submit" variant="primary">Save</b-button>
                <b-button type="reset" variant="danger">Cancel</b-button>
            </b-form>
        </b-modal>


        <b-table striped hover :items="patient" :fields="fields"></b-table>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return {
                employee:null,

                fields: [
                    {key: 'idEmployee', label: 'ID'},
					{key: 'idJob', label: 'Job'},
                    {key: 'name', label: 'Name'},
                    {key: 'surname', label: 'Last Name'},
                    {key: 'dpi', label: 'DPI'},
                    {key: 'address', label: 'Address'},
                    {key: 'phone', label: 'Phone'},
                    {key: 'contactphone', label: 'Contact Phone'},
                    {key: 'birthdate', label: 'Birthdate'}

                ],
                form: {
					idEmployee: '',
					idJob: '',
                    name: '',
                    lastname: '',
                    dpi: '',
                    address: '',
                    phone: '',
                    contact_phone: '',
                    birthdate: '',
                    },
                    show: true

            }
        },
        mounted(){
            this.getEmployee();
        },
        methods: {
            getEmployee(){
                axios.get('/ClinicaWeb-1.0-SNAPSHOT/crudemployee')
                    .then( response => {
                        this.employee = response.data
                    })
                    .catch( e => console.log(e))
            },
            onSubmit(evt) {
                evt.preventDefault()
                //alert(JSON.stringify(this.form))
                axios.post('/ClinicaWeb-1.0-SNAPSHOT/crudemployee', this.form)
            },
            onReset(evt) {
                evt.preventDefault()
                // Reset our form values
                // Trick to reset/clear native browser form validation state
                this.show = false
                this.$nextTick(() => {
                this.show = true
                })
            }
        }
    }
</script>

<style scoped>