import { Html, useProgress } from "@react-three/drei"

const Loader = ()=>{
    const {progress} = useProgress();
    return(
        <Html center>
            <div className="text-xl font-normal text-center text-white">
                {progress.toFixed(2)}% Loading
            </div>
        </Html>
    )
}
export default Loader