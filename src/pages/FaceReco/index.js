import React , {Fragment} from 'react'
import { NoPhoto } from '../../assets';
import { Button, Input } from '../../components';
import {Header} from "../../components";
import "./face.css";
import Clarifai from 'clarifai';
import {useHistory} from "react-router-dom";

const app = new Clarifai.App({
    apiKey: "9455fbddd9944dd183fbf8774ad5fa3e"
});

let box = {};

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

                    <div className="bagianGambar">
                        <img src={NoPhoto} className="showImg" alt=""/>
                    </div>
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
        Clarifai.FACE_DETECT_MODEL ,
        input.value
    ).then((response) => {
        calculateFaceLoc(response , img);
    }, 
    (err) => {
        console.log(err);
    })  
}

const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
        // let imgLocal = event.target.files[0];
        // let imageLocal = URL.createObjectURL(imgLocal);
        // const img = document.querySelector('.showImg');
        // img.setAttribute('src' , imageLocal);
        let reader = new FileReader();
        console.log(reader.readAsDataURL(event.target.files[0]))
    }
}

const calculateFaceLoc = (data , img) => {
    const widthImg = Number(img.width);
    const heightImg = Number(img.height);
    const arrayDataBox = data.outputs[0].data.regions;
    const boundingParent = document.querySelector('.bagianGambar');

    arrayDataBox.forEach(dataBox => {
        let dataLoc = dataBox.region_info.bounding_box;
        box = {
            left_col: String((widthImg * dataLoc.left_col)),
            top_row: String((heightImg * dataLoc.top_row)),
            right_col: String((widthImg - dataLoc.right_col * widthImg)),
            bottom_row: String((heightImg - heightImg * dataLoc.bottom_row)),
        }
        const div = document.createElement('div');
        div.style.top = box.top_row + 'px';
        div.style.left = box.left_col + 'px';
        div.style.right = box.right_col + 'px';
        div.style.bottom = box.bottom_row + 'px';
        div.style.position = 'absolute';
        div.style.boxShadow = '0 0 0 3px #4896f2';
        div.style.display = 'flex';
        div.style.flexWrap = 'wrap';
        div.style.justifyContent = 'center';
        div.style.cursor = 'pointer';
        boundingParent.appendChild(div);
    })
}

export default FaceReco
