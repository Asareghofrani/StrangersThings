import React from "react";
import {useState} from "react";
import {callApi} from "./api"



function AddPost(token, setPosts){
    const [name,setName]=useState("");
    const [description,SetDescription]=useState("")
    const [price,setPrice]=useState("")
    const [seller,setSeller]=useState("")
    const[location,setLocation]=useState("")

    const addpost= async(e)=>{
        e.preventDefault();
        
          const { post } = await callApi({
            method: "POST",
            path: "/Posts",
            token,
            body: {
              vacation: {
                name,
                description,
                price,
                seller,
                location,
              },
            }
          });
        //   vacation.isCreator = true;
        //   setVacations((prev) => [vacation, ...prev]);
        //   setLocation("");
        //   setDescription("");
        // } catch (err) {
        //   console.error(err);
        // }
      };
    
    return(
        <div>
            <form onSubmit={addpost}>
                <label htmlFor="name"> Name:</label>
                <input type="text" value={name} onChange={(e)=> setName (e.target.value)}></input>
                <label htmlFor="description"> Description: </label>
                <input type="text" value={description} onChange={(e)=> SetDescription (e.target.value)}></input>
                <label htmlFor="price"> Price :</label>
                <input type="text" value={price} onChange={(e)=> setPrice (e.target.value)}></input>
                <label htmlFor="seller"> Seller:</label>
                <input type="text" value={seller} onChange={(e)=> setSeller (e.target.value)}></input>
                <label htmlFor="location"> Location:</label>
                <input type="text" value={location} onChange={(e)=> setLocation (e.target.value)}></input>
                <button></button>
            </form>
        </div>
    )
}
export default AddPost;