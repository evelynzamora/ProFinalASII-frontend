<template>
    <div>
        <h1>Medicine</h1>
        <b-button v-b-modal.modal-1 variant="success">Add</b-button>
		<b-button v-b-modal.modal-2 variant="primary">Update</b-button>
		<b-button v-b-modal.modal-3 variant="danger">Delete</b-button>

        
        <b-modal id="modal-1" title="Add Medicine">
            <b-form @submit="onSubmit_add" @reset="onReset" v-if="show">
                <b-form-group
                    id="input-group-idMedicine"
                    label="ID Medecine:"
                    label-for="input-idMedicine">
                        <b-form-input
                            id="input-idMedicine"
                            v-model="form.idMedicine"
                            type="text"
                            disabled
                            placeholder="Enter ID Medecine">
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
                    id="input-group-lab"
                    label="Laboratory:"
                    label-for="input-lab">
                        <b-form-input
                            id="input-lab"
                            v-model="form.lab"
                            type="text"
                            required
                            placeholder="Enter Laboratory">
                        </b-form-input>
                </b-form-group>
                <b-form-group
                    id="input-group-adminway"
                    label="Admin Way:"
                    label-for="input-adminway">
                        <b-form-input
                            id="input-adminway"
                            v-model="form.adminway"
                            type="text"
                            required
                            placeholder="Enter Admin Way">
                        </b-form-input>
                </b-form-group>
                <b-form-group
                    id="input-group-description"
                    label="Description:"
                    label-for="input-description">
                        <b-form-input
                            id="input-description"
                            v-model="form.description"
                            type="text"
                            required
                            placeholder="Enter Description">
                        </b-form-input>
                </b-form-group>
                <b-form-group
                    id="input-group-expirationdate"
                    label="Expiration Date:"
                    label-for="input-expirationdate">
                        <b-form-input
                            id="input-expirationdate"
                            v-model="form.expirationdate"
                            type="date"
                            required
                            placeholder="Enter Expiration Date">
                        </b-form-input>
                </b-form-group>
                <b-form-group
                    id="input-group-lots"
                    label="Lots:"
                    label-for="input-lots">
                        <b-form-input
                            id="input-lots"
                            v-model="form.lots"
                            type="text"
                            required
                            placeholder="Enter Lots">
                        </b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary">Save</b-button>
                <b-button type="reset" variant="danger">Cancel</b-button>
            </b-form>
        </b-modal>


        <b-modal id="modal-2" title="Update Medicine">
            <b-form @submit="onSubmit_update" @reset="onReset" v-if="show">
                <b-form-group
                    id="input-group-idMedicine"
                    label="ID Medecine:"
                    label-for="input-idMedicine">
                        <b-form-input
                            id="input-idMedicine"
                            v-model="form.idMedicine"
                            type="text"
                            required
                            placeholder="Enter ID Medecine">
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
                    id="input-group-lab"
                    label="Laboratory:"
                    label-for="input-lab">
                        <b-form-input
                            id="input-lab"
                            v-model="form.lab"
                            type="text"
                            required
                            placeholder="Enter Laboratory">
                        </b-form-input>
                </b-form-group>
                <b-form-group
                    id="input-group-adminway"
                    label="Admin Way:"
                    label-for="input-adminway">
                        <b-form-input
                            id="input-adminway"
                            v-model="form.adminway"
                            type="text"
                            required
                            placeholder="Enter Admin Way">
                        </b-form-input>
                </b-form-group>
                <b-form-group
                    id="input-group-description"
                    label="Description:"
                    label-for="input-description">
                        <b-form-input
                            id="input-description"
                            v-model="form.description"
                            type="text"
                            required
                            placeholder="Enter Description">
                        </b-form-input>
                </b-form-group>
                <b-form-group
                    id="input-group-expirationdate"
                    label="Expiration Date:"
                    label-for="input-expirationdate">
                        <b-form-input
                            id="input-expirationdate"
                            v-model="form.expirationdate"
                            type="date"
                            required
                            placeholder="Enter Expiration Date">
                        </b-form-input>
                </b-form-group>
                <b-form-group
                    id="input-group-lots"
                    label="Lots:"
                    label-for="input-lots">
                        <b-form-input
                            id="input-lots"
                            v-model="form.lots"
                            type="text"
                            required
                            placeholder="Enter Lots">
                        </b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary">Save</b-button>
                <b-button type="reset" variant="danger">Cancel</b-button>
            </b-form>
        </b-modal>


        <b-modal id="modal-3" title="Delete Medicine">
            <b-form @submit="onSubmit_delete" @reset="onReset" v-if="show">
                <b-form-group
                    id="input-group-idMedicine"
                    label="ID Medicine:"
                    label-for="input-idMedicine">
                        <b-form-input
                            id="input-idMedicine"
                            v-model="form.idMedicine"
                            type="text"
                            required
                            placeholder="Enter ID Medicine">
                        </b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary">Delete</b-button>
                <b-button type="reset" variant="danger">Cancel</b-button>
            </b-form>
        </b-modal>


        <b-table striped hover :items="medicine" :fields="fields"></b-table>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return {
                medicine:null,

                fields: [
                    {key: 'idMedicine', label: 'ID'},
                    {key: 'name', label: 'Name'},
                    {key: 'lab', label: 'Laboratory'},
                    {key: 'adminway', label: 'Admin Way'},
                    {key: 'description', label: 'Description'},
                    {key: 'expirationdate', label: 'Expiration Date'},
                    {key: 'lots', label: 'Lots'},

                ],
                form: {
					idMedicine: '',
                    name: '',
                    lab: '',
                    adminway: '',
                    description: '',
                    expirationdate: '',
                    lots: '',
                    },
                    show: true

            }
        },
        mounted(){
            this.getMedicine();
        },
        methods: {
            getMedicine(){
                axios.get('/ClinicaWeb-1.0-SNAPSHOT/crudmedicine')
                    .then( response => {
                        this.medicine = response.data
                    })
                    .catch( e => console.log(e))
            },
            onSubmit_add(evt) {
                evt.preventDefault()
                //alert(JSON.stringify(this.form))
                axios.post('/ClinicaWeb-1.0-SNAPSHOT/crudmedicine', this.form)
            },
            onSubmit_update(evt){
                evt.preventDefault()
                axios.put('/ClinicaWeb-1.0-SNAPSHOT/crudmedicine', this.form)
                alert(JSON.stringify('exito'))
            },
            onSubmit_delete(evt){
                evt.preventDefault()
                axios.delete('/ClinicaWeb-1.0-SNAPSHOT/crudmedicine', this.form)
                alert(JSON.stringify('exito'))
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