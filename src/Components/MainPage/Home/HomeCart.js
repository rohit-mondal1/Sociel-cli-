import React, { useContext, useState } from 'react';
import { BiCommentDetail, BiLike, BiShareAlt } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../../Context/Usercontext';

const HomeCart = ({b}) => {
    const [like, setLike] = useState(false);
    const [id, setid] = useState("");
    const { user } = useContext(Authcontext);
    const { imgurl, text, name, img, date, _id, like: likes } = b;
    const email = user.email;

    const handellike = (id) => {
        setid(id);
      };



    //   if (like) {
    //     fetch(`http://localhost:8000/like/${id}`, {
    //       method: "PUT",
    //       headers: {
    //         "content-type": "application/json",
    //       },
    //       body: JSON.stringify({ email }),
    //     })
    //       .then((res) => res.json())
    //       .then((data) => {
    //         console.log(data);
    //       });
    //   }
    return (
        <div>
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
        </div>
    );
};

export default HomeCart;