import React from "react";
import { Stack, Box } from "@mui/material";

import ChannelCard from "@/components/ChannelCard";
import  Loader  from "@/components/Loader";
import  VideoCard  from "@/components/VideoCard";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {Array.isArray(Videos) && Videos.length > 0 && videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
