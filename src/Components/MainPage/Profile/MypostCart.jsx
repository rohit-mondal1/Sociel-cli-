import React, { useContext, useState } from "react";
import "./mypost.css";
import { BiCommentDetail, BiLike, BiShareAlt } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";

import { Link } from "react-router-dom";
import { Authcontext } from "../../../Context/Usercontext";

const MypostCart = ({ kk }) => {
  const { user } = useContext(Authcontext);
  const { imgurl, text, name, img, date, _id, like: likes } = kk;
  const [like, setLike] = useState(false);
  const [relike, setReLike] = useState(false);
  const [id, setid] = useState("");

  const email = user.email;

  // const aaaa = likes.find(a => setReLike('a'))




  // for (const aa of likes) {
  //   console.log(aa);
  //   if (aa === email) {
  //     console.log('object');
       
  //      break
  //   }else(console.log('2222222'))
      
  // }

  console.log('relike', relike);

//  for(let i = 0; i < likes.length; i++ ){
//   let element = likes[i];
//   console.log('element' , element);
//   // if (element === email) {
//   //     setLike(true);
//   //   }
//   //   else{
//   //     setLike(false);
//   //   }
//  }

 

  if (like) {
    fetch(`http://localhost:8000/like/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }
  //  else if (!like) {
  //   fetch(`http://localhost:8000//${id}`, {
  //     method: "PUT",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(user.email),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }

  const handellike = (id) => {
    setid(id);
  };

  return (
    <div>
      <div id="minetext" className="bg-black/10  my-3 py-3 ">
        <div className="flex justify-between items-center ">
          <div className="flex gap-3 mx-2 items-center ">
            <div className="avatar">
              <div className="w-14 rounded-full">
                <img src={img} alt="" />
              </div>
            </div>
            <div>
              <h1 className=" text-xl">{name}</h1>
              <h1 className="text-xs">{date}</h1>
            </div>
          </div>
          <Link to="/">
            <div className="mr-2">
              <BsThreeDotsVertical />
            </div>
          </Link>
        </div>

        <div className="py-3 mx-2">
          <p>{text}</p>
        </div>

        <div className="avatar">
          <div id="imgss" className="w-full h-[500px] ">
            <img src={imgurl} alt="" />
          </div>
        </div>
        <div>
          <h1 className=" px-8 mb-[-10px]">{likes?.length}</h1>
        </div>
        {/* lole and comment and sheair */}
        <div className="flex justify-between  w-full font-bold text-3xl mt-4 px-6 ">




          {like ? (
            <div
              className="text-red-700"
              onClick={() => handellike(_id, setLike(!like))}
            >
              <BiLike />
            </div>
          ) : (
            <div onClick={() => handellike(_id, setLike(!like))}>
              <BiLike />
            </div>
          )}
          {/* <div ><BiLike/></div> */}
          <div>
            <BiCommentDetail />
          </div>
          <div>
            <BiShareAlt />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MypostCart;
