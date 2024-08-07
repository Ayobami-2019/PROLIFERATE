
import React from 'react'
import style from './style.module.css'
import { combinedClasses } from "../../../app/utilities/format";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { RiAsterisk } from 'react-icons/ri';


export const CustomInput = ({ ...props }) => {
    const [show, setShow] = React.useState(false)
    let label = props.label
    let type = props.type
    let newClass = props.className
    let required = props.required
    let value = props.value


    if (props.type === 'password') {
        type = !show ? 'password' : 'text'
    }
    const handleIconToggle = () => {
        setShow(!show)
    }
    // const combineClass = combinedClasses(props.className)
    return (
        <div className={type=='textarea' ? combinedClasses(style.textarea, style.labelInput) :style.inputDiv}>
            {/* <div className={style.labelInput}> */}
                <div className={style.labelDiv}>
                    <label className={style.nobg}>{label} </label>
                    {props.required ? <RiAsterisk className={style.important}/> : ''}
                </div>
                {/* {type == "select"&&<select {...props} value={value}>{props.children}</select> || 
                    type=="input" &&<input {...props} type={type} required={required} className={newClass} /> ||
                    type=="textarea" &&<textarea {...props} name="" id="" className={newClass}></textarea>
                    } */}
                <div className={type=='textarea' ? combinedClasses(style.textareadiv) :style.inputFieldDiv}>
                    {type == 'textarea' ? <textarea {...props} type={type} className={newClass}></textarea> :
                        type == "select" ?
                            <select {...props} value={value}>{props.children}</select> :
                            <input {...props} type={type} required={required} className={newClass} />}
                    {
                        props.type === 'password' &&
                        <div onClick={handleIconToggle} className={style.icon}>
                            {
                                !show ?
                                    <FaRegEyeSlash /> :
                                    <FaRegEye />
                            }
                        </div>
                    }
                </div>
            {/* </div> */}
        </div>
    )
}
export const Search = (...props) => {

    const [searchField, setSearchField] = useState("false");
    const [searchParam] = useState(["group", "name", "usage"]);
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/stock')
            .then(result => {

                setData(result.data);
                // console.log(data)
            })
            .catch(error => 
                console.log('error')
            )
    }, [])
    const search = (data) => {
        // console.log(data)
        return data.filter((item) => {
            return searchParam.some((newItem) => {
                return (
                    item[newItem]
                        .toString()
                        .toLowerCase()
                        .indexOf(searchField.toLowerCase()) > -1
                );
            });
        });
    }
    const handleSearch = (e) => {
        if (e.target === '') {
            setSearchField(false)
        }
        else {
            setSearchField(e.target.value)
            setSearchField(!searchField)
        }
    }
    return (
        <div className={style.searchDiv}>
            {/* , style.searchField */}
            <div className={combinedClasses(style.inputFieldDiv, style.searchField)}>
                <input {...props} type="search" name="search" placeholder="Search" className={style.search} onChange={(e) => setSearchField(e.target.value)} />
                <div className={combinedClasses(style.icon, style.searchIcon)}>
                    <IoSearchOutline />
                </div>
            </div>
            <ul className={style.searchList}>
                {searchField &&
                    search(data).map((medicine, index) => (
                        <li>{medicine.name}</li>
                    ))}
            </ul>

        </div>
    )
}
