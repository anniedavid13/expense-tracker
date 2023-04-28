// rrd imports
import { useLoaderData } from "react-router-dom";

// library imports
import { toast } from "react-toastify";

// component
import Intro from "../components/Intro";

//  helper functions
import { fetchData } from "../helpers"

// loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  return { userName }
}

// action
export async function  dashboardAction({ request }) {
  const data = await request.formData();
  const formData = Object.fromEntries(data);
  try{
    localStorage.setItem("userName", JSON.stringify(formData.userName));
    return toast.success(`Welcone ${formData.userName}`);
  } catch (e) {
    throw new Error("I think there's been a glitch");
  }
}

const Dashboard = () => {
  const { userName } = useLoaderData()

  return (
    <>
      {userName ? (<p>{userName}</p>) : <Intro />}
    </>
  )
}
export default Dashboard