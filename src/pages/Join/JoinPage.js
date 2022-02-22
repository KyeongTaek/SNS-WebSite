import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { call } from '../../Services/UserService';
import '../Join/JoinPage.scss';
function JoinPage() {
  const [userDTO, setUserDTO] = useState({})
  const [name, setName] = useState("")
  const [userId, setUserId] = useState("")
  const [birth, setBirth] = useState("")
  const [addr, setAddr] = useState("")
  const [userPw1, setUserPw1] = useState("")
  const [userPw2, setUserPw2] = useState("")

  const saveAlert = () => {
    Swal.fire({
      icon: 'success',
      title: '첫번째 비밀번호와 두번째 비밀번호가 일치하지 않습니다.',
      showConfirmButton: true,
      timer: 1500
    })
  }
  useEffect(() => {
    console.log(Object.keys(userDTO).length)
    if(Object.keys(userDTO).length !== 0){
      console.log(userDTO)
      call("/user/join", "POST", userDTO).then((response)=>{
        console.log(response);
      Swal.fire('회원가입 완료').then(result =>{window.location.href="/"})

      }
      )}
  }, [userDTO])
  

  const join = (event)=>{
    
    event.preventDefault();
    if(userPw1 === userPw2){
      setUserDTO({"user_id" : userId, "user_name" : name, "user_addr" : addr, "user_birth" : birth, "user_pw":userPw1})
      console.log(userDTO)
    }else{
      saveAlert();

      console.log("bad")

    }

  }

    return (
      <div className="JoinPage">
        <div className="joinFrame">
          <div className="side">

          </div>

          <form name="fo" onSubmit={()=>join()}>
            <h1>회원가입</h1>  
            <div className="label">Full Name</div>
            <input type="text" placeholder="Enter Name. . ." required onChange={(e)=>{setName(e.target.value)}}></input><br></br>
             
            <div className="label">ID</div>
            <input type="text" placeholder="Enter ID. . ." required  onChange={(e)=>{setUserId(e.target.value)}}></input><br></br>
            
            <div className="label">Birth</div>
            <input type="text" placeholder="ex) 1999.01.31" required onChange={(e)=>{setBirth(e.target.value)}}></input><br></br>

            <div className="label">Address</div>
            <input type="text" placeholder="ex) 충청북도 청주시 서원구 충대로 1" required  onChange={(e)=>{setAddr(e.target.value)}}></input><br></br>
            <div className="label">Password</div>
            <input type="password" placeholder="Enter password. . ." required  onChange={(e)=>{setUserPw1(e.target.value)}}></input><br></br>
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
              
            <div className="label">Confirm Password</div>
            <input type="password" placeholder="Enter password. . ." required onChange={(e)=>{setUserPw2(e.target.value)}}></input><br></br>
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>

            <div className="policy">By creating an account you agree to our Terms of Service and Privacy Policy</div>
            {/* <input type="submit" value="CONTINUE"></input> */}
            <button type="button" onClick={join}>CONTINUE</button>
            <ul>
              <li><a className="joinpage" href="../idSearch">아이디 찾기</a></li>
              <li>|</li>
              <li><a className="joinpage" href="../pwSearch">비밀번호 찾기</a></li>
            </ul>
          </form>
          
          <div className="side">

          </div>
        </div>
      </div>
    );
  }
  
  
  export default JoinPage;