import { toast } from "react-toastify";


export const alert = (data: string) => {
    const notify = () => toast(data);
    notify()
}



