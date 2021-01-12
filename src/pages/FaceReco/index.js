import React , {Fragment} from 'react'
import { NoPhoto } from '../../assets';
import { Button, Gap, Input } from '../../components';
import {Header} from "../../components";
import "./face.css";
import Clarifai from 'clarifai';
import {useHistory} from "react-router-dom";

const app = new Clarifai.App({
    apiKey: "9455fbddd9944dd183fbf8774ad5fa3e"
});

const FaceReco = () => {
    const history = useHistory();
    return (
        <Fragment>
            <Header labelHeader="RecoViso" bgColor="red" labelBtn="Logout" onClick={() => history.push('/')} />
            <div className="facereco">
                <div className="container">
                    <h1>Hi , Kamu</h1>
                    <h3>Silahkan masukkan link gambar</h3>

                    <div className="divInputLink">
                        <Input className="inputLink" width={400} height={40} />
                        {/* <Button label="Detect" height={50} width={150} backgroundColor="#E9E9E9" className="detectLink" onClick={ambilNilai} /> */}
                        <Button label="Detect" height={50} width={150} backgroundColor="#E9E9E9" className="detectLink" onClick={onClickRes} />
                    </div>
                    
                    <div className="divInputFile">
                        <p>Atau pilih file dibawah ini</p>
                        <Input className="inputFile" type="file" onChange={onImageChange} height={20} />
                    </div>

                    <Gap height={30}/>
                    
                    <img src={NoPhoto} className="showImg" alt="image"/>
                    
                </div>
            </div>
        </Fragment>
    )
}

const onClickRes = (event) => {
    event.preventDefault();
    const img = document.querySelector('.showImg');
    const input = document.querySelector('.inputLink');
    img.setAttribute('src' , input.value);

    app.models.predict(
        Clarifai.COLOR_MODEL ,
        input.value
    ).then((response) => {
        console.log(response.outputs[0].data.colors);
    }, 
    (err) => {
        console.log(err);
    })  
}

// function ambilNilai(event) {
//     event.preventDefault();
//     const img = document.querySelector('.showImg');
//     const input = document.querySelector('.inputLink');
//     img.setAttribute('src' , input.value);
// }

function onImageChange(event) {
    if (event.target.files && event.target.files[0]) {
        let imgLocal = event.target.files[0];
        let imageLocal = URL.createObjectURL(imgLocal);
        const img = document.querySelector('.showImg');
        img.setAttribute('src' , imageLocal);
        console.log(imageLocal);
    }
}

export default FaceReco
