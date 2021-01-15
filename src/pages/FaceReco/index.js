import React , {Fragment} from 'react';
import "./face.css";
import Clarifai from "clarifai";
import {NoPhoto} from "../../assets";
import {Button , Input} from "../../components";
import {Header} from "../../components";
// import {useHistory} from "react-router-dom";
import { Link as LinkR } from "react-router-dom"; 

const app = new Clarifai.App({
    apiKey: "9455fbddd9944dd183fbf8774ad5fa3e"
});

// const history = useHistory();
class Face extends React.Component {
    constructor() {
        super();
        this.state = {
            input: '',
            imageUrl: '',
            box: {},
        }
    }

    onClickLink = (event) => {
        event.preventDefault();
        const img = document.querySelector('.showImg');
        const input = document.querySelector('.inputLink');
        img.setAttribute('src' , input.value);

        app.models.predict(
            Clarifai.FACE_DETECT_MODEL,
            input.value
        ).then((response) => {
            this.calculateFaceLoc(response , img);
        }).catch((err) => {
            console.log(err);
        })
    }

    calculateFaceLoc = (data , img) => {
        const widthImg = Number(img.width);
        const heightImg = Number(img.height);
        const arrayDataBox = data.outputs[0].data.regions;
        const boundingParent = document.querySelector('.bagianGambar');
        arrayDataBox.forEach(dataBox => {
            let dataLoc = dataBox.region_info.bounding_box;
            this.setState({
                box: {
                    left_col: String((widthImg * dataLoc.left_col)),
                    top_row: String((heightImg * dataLoc.top_row)),
                    right_col: String((widthImg - dataLoc.right_col * widthImg)),
                    bottom_row: String((heightImg - heightImg * dataLoc.bottom_row)),
                }
            })
            const div = document.createElement('div');
            div.style.top = this.state.box.top_row + 'px';
            div.style.left = this.state.box.left_col + 'px';
            div.style.right = this.state.box.right_col + 'px';
            div.style.bottom = this.state.box.bottom_row + 'px';
            div.style.position = 'absolute';
            div.style.boxShadow = '0 0 0 3px #4896f2';
            div.style.display = 'flex';
            div.style.flexWrap = 'wrap';
            div.style.justifyContent = 'center';
            div.style.cursor = 'pointer';
            boundingParent.appendChild(div);
    
            console.log(this.state.box)
        })
    }

    uploadImageOnChange = (event) => {
        if(event.target.files[0]){
            let reader = new FileReader();
            reader.addEventListener('load' , this.inputSetState)
            reader.readAsDataURL(event.target.files[0]);
        }
    }

    onButtonSubmitFile = () => {
        const img = document.querySelector('.showImg');
        img.setAttribute('src' , this.state.input);
        this.setState({
            imageUrl: this.state.input
        });
        app.models.predict(
            Clarifai.FACE_DETECT_MODEL,
            this.state.input.replace(/^data:image\/(.*);base64,/, '')
        ).then(response => {
            this.calculateFaceLoc(response , img)
        }).catch(err => console.log(err));
    }

    inputSetState = (event) => {
        this.setState({
            input: event.target.result
        } , () => {
            this.onButtonSubmitFile()
        })
    }

    render() {
        return (
            <Fragment>
                <LinkR to={'/'}>
                    <Header labelHeader="RecoViso" bgColor="red" labelBtn="Logout" />
                </LinkR>
                <div className="facereco">
                    <div className="container">
                        <h1>Hi , Kamu</h1>
                        <h3>Silahkan masukkan link gambar</h3>

                        <div className="divInputLink">
                            <Input className="inputLink" width={400} height={40} />
                            {/* <Button label="Detect" height={50} width={150} backgroundColor="#E9E9E9" className="detectLink" onClick={ambilNilai} /> */}
                            <Button label="Detect" height={50} width={150} backgroundColor="#E9E9E9" className="detectLink" onClick={this.onClickLink} />
                        </div>
                        
                        <div className="divInputFile">
                            <p>Atau pilih file dibawah ini</p>
                            <Input className="inputFile" type="file" height={20} onChange={this.uploadImageOnChange} />
                        </div>

                        <div className="bagianGambar">
                            <img src={NoPhoto} className="showImg" alt=""/>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Face;