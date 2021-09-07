import React, { useState, useEffect, useRef, useContext } from 'react'
import useMousePosition from '../hooks/useMousePosition'
import { ThemeContext } from '../App'

const LikeButton: React.FC = () => {
   const [like, setLike] = useState(0)
   const [on, setOn] = useState(true)
   const likeRef = useRef(0)
   const didMountRef = useRef(false)
   const domRef = useRef<HTMLInputElement>(null)
   const theme = useContext(ThemeContext)
   const positions = useMousePosition()
   const style = {
       background: theme.background,
       color: theme.color,
   }
   useEffect(() => {
       console.log('document title effect is running')
       document.title = `点击了${like}次`
   },[like])

   useEffect(() => {
        if (didMountRef.current){
            console.log('this is updated')
        } else{
            didMountRef.current = true
        }

   })

   useEffect(() => {
        if (domRef && domRef.current){
            domRef.current.focus()
        }
   })

   function handleAlertClick() {
       setTimeout(() => {
           alert('you clicked on ' + likeRef.current)
       },3000)
    }


   return (
        <>
        <input type="text" ref={domRef} />
        <p>X: {positions.x}, Y : {positions.y}</p>
        <button style={style} onClick={() => {setLike(like + 1); likeRef.current++}}>
           {like} 👍
        </button>
        <button onClick={() => {setOn(!on)}}>
            {on ? 'ON' : 'OFF'} 
        </button>
        </>
   )
} 
export default LikeButton 