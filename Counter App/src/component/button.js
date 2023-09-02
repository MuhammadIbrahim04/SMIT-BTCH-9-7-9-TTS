

// function Button({ children, onClick }) {

//     return (
//         <div onClick={onClick} className=" m-2 bg-red-400 text-white text-lg cursor-pointer">
//             <span  className="p-2 px-5 bg-red-400 m-4 rounded text-white cursor-pointer"> {children}</span>
//         </div>

//     )
// }

// export default Button


function Button({ children, onClick }) {

    return (
        <dvi onClick={onClick} className=" m-2 bg-red-400 text-white text-lg cursor-pointer">
            <span className="p-2 px-5 bg-red-400 m-4 rounded text-white cursor-pointer">{children}</span>
        </dvi>
    )
}
export default Button