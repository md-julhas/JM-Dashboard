import React from "react"
import { userPosts } from "../constants/data"
import { AiOutlineLike } from "react-icons/ai"
import { FaReply } from "react-icons/fa"
import { useStateContext } from "../contextProvider/contextProvider"

const Posts = () => {
  const { themeColor } = useStateContext()

  return (
    <div className="mt-7">
      {userPosts.map((post) => (
        <div key={post.id} className="flex flex-col gap-5 mb-14">
          <img
            src={post.img}
            alt={post.title}
            className="object-cover rounded-md h-52 sm:h-96"
          />
          <h2 className="font-semibold text-xl">{post.title}</h2>
          <div>{post.description}</div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-gray-500 text-gray-100 px-5 py-2 rounded-sm hover:opacity-90">
              <AiOutlineLike /> Like
            </button>
            <button
              className="flex items-center gap-2 text-gray-100 px-5 py-2 rounded-sm hover:opacity-90"
              style={{ backgroundColor: themeColor }}
            >
              <FaReply /> Reply
            </button>
          </div>
        </div>
      ))}

      <div className="flex justify-center">
        <button
          className="text-gray-100 px-5 py-2 rounded-sm hover:opacity-90"
          style={{ backgroundColor: themeColor }}
        >
          Load More
        </button>
      </div>
    </div>
  )
}

export default Posts
