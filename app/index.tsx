import { Link, useNavigation, useRouter } from "expo-router"
import { Button } from "react-native";





export default function Page(){
  const router = useRouter();
  const navigation = useNavigation();
  
  return(
    <>
    <h1>ini adalah halaman pertama</h1>
    <Link replace href={"/second"}>
 <h1>
 Ke Halaman Dua
 </h1>
    </Link>
    <Button title="Pindah mengunakan useRouter" onPress={()=>{
      router.replace("/second")
    }}/>
    <Button
    title="Pindah mengunakan useNAvigation" onPress={()=>{
      navigation.navigate()
    }}
    />
    </>
  )
}