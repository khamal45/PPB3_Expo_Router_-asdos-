import axios from "axios";
import { useEffect, useState } from "react";

export default function Index() {
  const [post, setPost] = useState<string>()
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(
      (get) => {
        setPost(get.data[0].title)
      }
      //abc
    )
  }, [])
  return (
    <h1>{post}</h1>
  )
}