import React,{useState} from 'react'
import './ChangeComponent.css'
import { uploadpic , changename } from './profiledata';

export default function ChangeComponent(props) {
     let [chang, setCount] = useState(true);
     let [chang2, setCount2] = useState(false);
     let [file, namefile] = useState("");
     let [file2, fullfile] = useState("");
     let [upload, uploadcheck] = useState(false);
     let [newname, changetonewname] = useState("");
     let [firstlettername, firstname] = useState("");
     const changeHandler = (event) => {
        firstname(firstlettername = props.firstnameletter);
		namefile(file = event.target.files[0].name);
        fullfile(file2 = event.target.files[0]);
        console.log(file2);
        // fullfile(file2 = event.target.files);
        uploadcheck(upload = true);
	};
    console.log(props.picurl);
    if(chang === true && props.password === false){
        return (
            <div className='cost'>
                <h4>{props.data}</h4>
                <div className='cost-left'>
                    <button className='changebutton2' onClick={()=> setCount(chang = false)} >Change</button>
                </div>
            </div>
        )
    }else if (chang === false && props.password === false){
        return (
            <div className='changecost'>
                <div className='inputchange'>
                    <input className='inputbaby' placeholder={props.dataname} onChange = {(e) => {changetonewname(newname = e.target.value)}}></input>
                </div>
                <div className='saveinput'>
                    <button className='changebutton' onClick={()=> {setCount(chang = true)}}>Cancel</button>
                    <button className='changebutton' onClick={() => {changename(newname)}}>Save</button>
                </div>
            </div>
          )
    }else if (props.password === true && chang === true){
        return (
            <div className='changepassword'>
                <div className='inputchange'>
                    <input className='inputbaby' placeholder={props.dataname}></input>
                </div>
                <div className='ibox'>
                    <div className='inputchange'>
                        <input className='inputbaby' placeholder={props.dataname2}></input>
                    </div>
                    <button className='changebutton2'>Save</button>
                </div>
            </div>
        )
    }else{
        if(chang2 === false){
            if(props.picurl === undefined){
                return (
                    <div className='changepic'>
                        <div className='picchange'>
                            {/* <img className='imgu' src= {props.picurl} alt="gi"/> */}
                            <div className='picchange'></div>
                        </div>
                        <div className='saveinput56'>
                            <button className='changebutton' onClick={()=> setCount2(chang2 = true)}>Change</button>
                        </div>
                    </div>
                  )
            }else {
                return (
                <div className='changepic'>
                    <div className='picchange'>
                        <img className='imgu' src= {props.picurl} alt="gi"/>
                    </div>
                    <div className='saveinput56'>
                        <button className='changebutton' onClick={()=> setCount2(chang2 = true)}>Change</button>
                    </div>
                </div>
              )
            }
            
        }else{
            if(props.picurl === undefined){
                return (
                    <div className='changepic'>
                        <div className='picchange'>
                            {/* <img className='imgu' src= {props.picurl} alt="gi"/> */}
                            <div className='picchange'></div>
                        </div>
                        <div className='saveinput56'>
                            <button className='changebutton' onClick={()=> setCount2(chang2 = false)}>Cancel</button>
                            { upload === false? (<label className='saveimg2'>
                                Upload
                               <input className='saveimg' type={'file'} onChange={changeHandler}/>
                            </label>
                            ):(
                                <button className='changebutton2' onClick={() => uploadpic(file2)}>Save</button>
                            )
                            }
                            <span id="imageName">{file}</span>
                        </div>
                    </div>
                  )
            }else{
                return (
                    <div className='changepic'>
                        <div className='picchange'>
                            <img className='imgu' src= {props.picurl} alt="gi"/>
                        </div>
                        <div className='saveinput56'>
                            <button className='changebutton' onClick={()=> setCount2(chang2 = false)}>Cancel</button>
                            { upload === false? (<label className='saveimg2'>
                                Upload
                               <input className='saveimg' type={'file'} onChange={changeHandler}/>
                            </label>
                            ):(
                                <button className='changebutton2' onClick={() => uploadpic(file2)}>Save</button>
                            )
                            }
                            <span id="imageName">{file}</span>
                        </div>
                    </div>
                  )
            }
        }
    }
}
