import apiRoutes from "@/routes/api-routes";

export default {
    data:() => ({
        newFile: String
    }),
    methods:{
        async UploadFile(evt) {
            let SelectedFile = evt.target.files[0]
            const file = new FormData()
            file.append('file', SelectedFile, SelectedFile.name)
            let response = await axios.post(apiRoutes('image.upload'), file)
            this.newFile = response.data

        }
    }
}









