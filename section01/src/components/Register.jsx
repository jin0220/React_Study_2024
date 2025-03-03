import {useState, useRef} from 'react';

const Register = () => {
    // const [name, setName] = useState("이름");
    // const [birth, setBirth] = useState("");
    // const [country, setCountry] = useState("");
    // const [bio, setBio] = useState("");

    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: ""
    })

    const countRef = useRef(0); //리렌더링 하지 않음.
    const inputRep = useRef();

    const onChange = (e) => {
        countRef.current++;
        console.log(countRef.current);
        setInput({
            ...input,
            [e.target.name] : e.target.value,
        });
    };

    const onSubmit = () => {
        if(input.name === "") {
            // 이름을 입ㅕ하는 DOM 요소 포커스
            inputRep.current.focus();
        }
    };

    // const onChangeName = (e) => {
    //     setInput({
    //         ...input,
    //         name: e.target.value
    //     });
    // }

    // const onChangeBirth = (e) => {
    //     setInput({
    //         ...input,
    //         birth: e.target.value
    //     });
    // }

    // const onChangeCountry = (e) => {
    //     setInput({
    //         ...input,
    //         country: e.target.value
    //     });
    // }

    // const onChangeBio = (e) => {
    //     setInput({
    //         ...input,
    //         bio: e.target.value
    //     });
    // }
    
    

    return (
        <div>
            <div>
                <input ref={inputRep} name="name" value={input.name} onChange={onChange} placeholder={"이름"} />
            </div>
            <div>
                <input name="birth" value={input.birth} onChange={onChange} type="date"/>
            </div>
            <div>
                <select name="country" value={input.country} onChange={onChange}>
                    <option value={""}></option>
                    <option value={"kr"}>한국</option>
                    <option value={"us"}>미국</option>
                    <option value={"uk"}>영국</option> 
                </select>
            </div>
            <div>
                <textarea name="bio" value={input.bio} onChange={onChange}/>
            </div>

            <button onClick={onSubmit}>제출</button>
        </div>
    )
}

export default Register;