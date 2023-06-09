import classes from '../footerPart/footerpart.module.scss';
import { FaRegCopyright } from 'react-icons/fa';

function Footer ({switchLight}){
return(
    <footer style={switchLight?{backgroundColor:"blackgit remote add origin https://github.com/ASALA1998/ASALA1998.github.io.git",color:"white"}:{backgroundColor:"white",color:"black"}} className='d-sm-block d-md-block d-xl-flex justify-xl-between align-items-sm-center align-items-md-center align-items-lg-center'>
        <div className='d-flex justify-content-center align-items-center flex-column'>
            <span className="" ><FaRegCopyright /> Բոլոր կանոնները պահպանված են: Կայքի ստեղծման տարեթիվ` {new Date().getFullYear()} թ</span>
            <span>կայքի հեղինակ՝ Արամ Մարգարյան, Լուսանկարների հեղինակ՝ Լուպե</span>
            <span>Տեղեկությունը Wikipedia Կայքից</span>
        </div>
    </footer>
)
}

export default Footer