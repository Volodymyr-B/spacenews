import { FC } from "react";
import { Link } from "react-router-dom";
import Highlighter from "react-highlight-words";

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
  highlight: string;
}

export const NewsCard: FC<NewsCardProps> = ({
  id,
  title,
  imageUrl,
  newsSite,
  publishedAt,
  highlight,
}) => {
  return (
    <Card elevation={4} className="w-[310px] lg:w-[31%]">
      <CardMedia
        component="img"
        alt="news image"
        height="140"
        image={imageUrl}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <CalendarTodayIcon />
          {publishedAt.toString()}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          <Highlighter
            searchWords={highlight.split(" ")}
            textToHighlight={title}
          />
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {newsSite}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to={`/article/${id}`}>
          Read more
          <TrendingFlatIcon />
        </Button>
      </CardActions>
    </Card>
  );
};
