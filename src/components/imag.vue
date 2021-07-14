<template>
    <div>
       
        <img id="output" width="200" height="200" />
        <input type="file"  accept="image/*" name="image" id="file" @change="loadFile">	
        <p><label for="file" >Upload Image</label></p>
        
    </div>
</template>
<script>
export default {
    name:'imag',
    methods:
    {
        loadFile(event) {
        
        let image = document.getElementById('output');
        // console.log(event)
        console.log(event.target.files[0])
        image.src = URL.createObjectURL(event.target.files[0]);
        }
    }
}
</script>
<style scoped>
</style>