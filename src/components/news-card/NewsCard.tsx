import { FC } from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

interface NewsCardProps {
  id: number;
  title: string;
  imageUrl: string;
  newsSite: string;
  publishedAt: Date;
}

export const NewsCard: FC<NewsCardProps> = ({
  id,
  title,
  imageUrl,
  newsSite,
  publishedAt,
}) => {
  return (
    <Card className="w-80 ">
      <CardMedia
        component="img"
        alt="news image"
        height="140"
        image={imageUrl}
      />
      <CardContent>
        <CalendarTodayIcon />
        <Typography variant="body2" color="text.secondary">
          {publishedAt.toString()}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {newsSite}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">
          Read more
          <TrendingFlatIcon />
        </Button>
      </CardActions>
    </Card>
  );
};
