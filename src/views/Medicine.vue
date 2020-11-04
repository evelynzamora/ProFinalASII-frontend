<template>
    <div>
        <h1>Medicine</h1>
        <b-button v-b-modal.modal-1 variant="success">Add</b-button>
        <b-button variant="primary">Update</b-button>
        <b-button variant="danger">Delete</b-button>
        <b-table striped hover :items="medicine" :fields="fields" ></b-table>
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
                    {key: 'lots', label: 'Lots'}

                ]            
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
            }
        }
    }
</script>

<style scoped>