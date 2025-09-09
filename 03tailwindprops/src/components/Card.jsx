import React from 'react'

function Card({channel, btnText="visit me"}) {
    return (
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
            <img
                src="https://media.istockphoto.com/id/1381637603/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=w64j3fW8C96CfYo3kbi386rs_sHH_6BGe8lAAAFS-y4="
                alt=""
                className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
            />
            <div className="mt-6 mb-2">
                <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
                    {btnText} ➡️
                </span>
                <h2 className="text-xl font-semibold tracking-wide">Lorem ipsum dolor</h2>
            </div>
            <p className="text-gray-300">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
                amet
            </p>

        </div>

    )
}
export default Card