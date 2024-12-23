import { get, getDatabase, ref, remove, set } from "firebase/database";
import app from "./usefirebase";


const database = getDatabase(app);

const addData = async (path: string, data: any) => {
    await set(ref(database, path), data);
}

const removeData = async (path: string) => {
    await remove(ref(database, path));
}

const getData = async (path: string) => {
    const snapshot = await get(ref(database, path));
    if (snapshot.exists()) {
        return snapshot.val();
    }
    return null;
}

const updateData = async (path: string, data: any) => {
    await set(ref(database, path), data);
}

export { addData, removeData, getData, updateData };