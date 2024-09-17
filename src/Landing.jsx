import { GrayTopper } from "./Course";
import { Typography, Card } from "@mui/material";
function Landing(){

    return <>
    <div style={{height: 250, background: "#212121", top: 0, width: "100vw"}}>
        <div style={{ height: 250, display: "flex", justifyContent: "center", flexDirection: "column"}}>
            <div>
                <Typography style={{color: "white", fontWeight: 600}} variant="h3" textAlign={"center"}>
                    <u>KNOWLEDGE CRAFT</u>
                </Typography>
            </div>
        </div>
    </div>
    <div style={{display: "flex", justifyContent: "center", paddingTop:20}}>
    <Card variant="outlined" style={{width: 800, padding: 30, display:"flex",justifyContent:"center"}}>
    <Typography variant={"h6"} textAlign={"center"} >Welcome to Knowledge Craft!
Unlock Your Potential with the Power of Learning.
At Knowledge Craft, we believe in the transformative power of education. Our platform is your gateway to a world of knowledge, where you can explore, discover, and master new skills at your own pace. Whether you're looking to advance your career, fuel your passion, or simply expand your horizons, we're here to guide you on your learning journey.</Typography>
    </Card>
    </div>
    </>
        

}

export default Landing;