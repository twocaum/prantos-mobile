import axios from 'axios';
import * as FileSystem from 'expo-file-system'

export const postImage = async (image, tempo = 100) => {
    const header = 'data:image/png;base64';
    const data = header.concat(',', image.base64)

    axios.post("https://4c08-157-159-39-17.ngrok-free.app/photo", {
        photo: data,
        tempo: tempo
    }).then(() => {
        axios.get('https://4c08-157-159-39-17.ngrok-free.app/getMid')
            .then((response) => {
                let blob = new Blob([response.data], { type: "audio/wav" });
                console.log('blob', JSON.stringify(blob))
            }

            )
    })
        .catch(error => console.log(error));
}

export const getAudio = async (filename) => {
}   
