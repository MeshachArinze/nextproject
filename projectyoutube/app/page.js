 
// import { ChannelDetail, Feed, Navbar, SearchFeed, VideoDetail } from "@/components";
import { Box } from "@mui/material";
import SearchFeed from "./searchfeed/[...slug]/page";
import ChannelDetail from "./channeldetail/[...slug]/page";
import VideoDetail from "./videodetail/[...slug]/page";
import Feed from "./(first)/feed/page";
import  Navbar  from "@/components/Navbar";



export default function Home() {
  return (
    <main>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Feed />
        <VideoDetail />
        <ChannelDetail />
        <SearchFeed />
      </Box>
    </main>
  );
}
