import { render } from "@testing-library/react"
import image from '../images/profileimageDefault.png'
import './Profile.css'


const Profile = () => {

    return (
        <div className="wrapper">
            <div className="container">
                <div class='d-flex p-2 '>
                    <img src={image} class="img-thumbnail" alt="..." />
                    <p class="display-4 ml-3 align-self-center">Iqbal Haziq</p>
                    <p class='badge badge-success align-self-center p-2 ml-3'>Role: <span>IT Admin</span></p>
                </div>


            </div>

            <hr />

            <p class='h2 ml-3'>Information</p>
            <div className="container d-flex">
                
                <div id='userInfo' class='border rounded bg-light p-2 m-1'>
                <p class='h5'>Email Address</p>
                <p class='pl-3'> iqbal@email.com</p>
                </div>
                
                <div id='userInfo' class='border rounded bg-light p-2 m-1'>
                <p class='h5'>Github</p>
                <p class='pl-3'> https://githubb.com/Iqbal</p>
                </div>
                
            </div>
        </div>
    )
}
export default Profile;