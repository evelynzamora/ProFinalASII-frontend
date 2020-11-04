<template>
    <div>
        <h1>employees</h1>
        <b-button v-b-modal.modal-1 variant="success">Add</b-button>
        <b-button variant="primary">Update</b-button>
        <b-button variant="danger">Delete</b-button>
        <b-table striped hover :items="employees" :fields="fields"></b-table>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return {
                employees:null,

                fields: [
                    {key: 'idEmpmloyee', label: 'ID'},
                    {key: 'idJob', label: 'Job'},
                    {key: 'name', label: 'Name'},
                    {key: 'surname', label: 'Last Name'},
                    {key: 'dpi', label: 'DPI'},
                    {key: 'address', label: 'Address'},
                    {key: 'phone', label: 'Phone'},
                    {key: 'contactphone', label: 'Contact Phone'},
                    {key: 'birthdate', label: 'Birthdate'}

                ]
            }
        },
        mounted(){
            this.getEmployees();
        },
        methods: {
            getEmployees(){
                axios.get('/ClinicaWeb-1.0-SNAPSHOT/crudemployee')
                    .then( response => {
                        this.employees = response.data
                    })
                    .catch( e => console.log(e))
            }
        }
    }
</script>

<style scoped>

</style>