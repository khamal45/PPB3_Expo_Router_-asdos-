import { useRouter } from "expo-router"
import { Button } from "react-native"



export default function Second(){
    const router = useRouter()
    return(
         <>
    <h1>Ini Halaman Dua</h1>
    <Button title="back" onPress={router.back}></Button>
    </>
    )
   
}