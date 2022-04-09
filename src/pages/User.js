import React, { useEffect, useState } from 'react'
import userServices from '../services/user.services';
const User = () => {
    const [users, setUsers] = useState([]);
    const [selectedId , setSelectedId] = useState();
    const [userDetails, setUserDetails] = useState({
        name :"",
        email : "",
        password : "",
        contactNo: null,
        profilePic : null
    });


    useEffect(async() => {
        const data = await userServices.getAllUsers();
        console.log(data);  
        setUsers(data);         
    },[]);
    console.log(users);

    const handleChange = (e) => {
        setUserDetails({
            ...userDetails ,
            [e.target.name] : e.target.value 
        })
        console.log(userDetails);
    }
        const handleImage = (e) => {    
            console.log(e.target.files[0]);
            var formData = new FormData();
            formData.append("profile_img" , e.target.files[0])
            userServices.saveImage(formData)
            setUserDetails({
                ...userDetails ,
                profilePic : e.target.files[0].name
            })
        }

     const handleSubmit = (e) =>{
         e.preventDefault();
            userServices.addUser(userDetails)
     }   

     const handleDeleted = async () => {
         const res = await userServices.deleteUser(selectedId);
         if(res.data){
             const remainingData = users.filter(user => user._id != res._id); 
             setUsers([...remainingData]);
         }

     }


  return (
    <div className='container mt-4'>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Add User</button>
        <div>
            <div>
                 <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Contact NO</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    {
                        users.map(user =>(<tr key={user.id}>
                                <th scope="row">2</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.contactNo}</td>
                                <td><button className='btn btn-info ml-2' data-toggle="modal" data-target="#exampleModalCenter" 
                                onClick={() => setSelectedId(user._id)}>edit</button>
                                <button className='btn btn-danger' data-toggle="modal" data-target="#exampleModaldelete"  
                                onClick={() => setSelectedId(user._id)}>delete</button></td>
                            </tr>))
                    }
               
                </tbody>
                 </table>
            </div>

           {/* add user model  */}

        <div className="modal fade" id="exampleModalCenter" tabIndex="-1"  >
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">User Details</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                <div className='row justify-content-center'>
                    <div className=''>
                    <form onSubmit={handleSubmit}>
                        <div class="form-outline mb-2">
                            <label class="form-label" for="form2Example1">Name</label>
                            <input type="text" id="form2Example1" name='name' value={userDetails.name} onChange={handleChange} class="form-control" />
                        </div>
                        <div class="form-outline mb-2">
                            <label class="form-label" for="form2Example1">Email address</label>
                            <input type="email" id="form2Example1" name='email' value={userDetails.email} onChange={handleChange} class="form-control" />
                        </div>
                        <div class="form-outline mb-2">
                            <label class="form-label" for="form2Example1">Contact No</label>
                            <input type="number" id="form2Example1" name='contactNo' value={userDetails.contactNo} onChange={handleChange} class="form-control" />
                        </div>
                    
                        <div class="form-outline mb-4">
                            <label class="form-label" for="form2Example2">Password</label>
                            <input type="password" id="form2Example2" name='password' value={userDetails.password} onChange={handleChange} class="form-control" />
                        </div>

                        <div class="form-outline mb-4">
                            <label class="form-label" for="form2Example2">Profile Picture</label>
                            <input type="file" id="form2Example2"  onChange={handleImage} class="form-control" />
                        </div>
                    
                        
                        <div className='text-center'>


                        <button type="submit" class="btn btn-primary btn-block mb-4 px-4">Add User</button>
                        </div>
                    
                      
                    </form>
                    </div>
                </div>
                </div>
      
                </div>
            </div>
         </div>          

         {/* delete model */}


        <div class="modal fade" id="exampleModaldelete" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabeldelete" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-body">
               Are sure want to delete this user ?
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancle</button>
                <button type="button" class="btn btn-danger" data-dismiss="modal" onClick={handleDeleted}>Delete</button>
            </div>
            </div>
        </div>
        </div>          


        </div>
        </div>
    
    
  )
}

export default User