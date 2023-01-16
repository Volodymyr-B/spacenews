import { FC } from "react";
import { Link } from "react-router-dom";
import Highlighter from "react-highlight-words";

import { normalize } from "../../utils/normalize-text";

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
  summary: string;
}

export const NewsCard: FC<NewsCardProps> = ({
  id,
  title,
  imageUrl,
  publishedAt,
  highlight,
  summary,
}) => {
  const { textSlice, convertedDate } = normalize();

  return (
    <Card elevation={4} className="w-[310px] lg:w-[31%]">
      <CardMedia
        component="img"
        alt="news image"
        height="140"
        image={imageUrl}
      />
      <CardContent>
        <Typography color="text.secondary" className="flex gap-2">
          <CalendarTodayIcon />
          {convertedDate(publishedAt)}
        </Typography>
        <Typography gutterBottom variant="h5">
          <Highlighter
            searchWords={highlight.split(" ")}
            textToHighlight={textSlice(title)}
          />
        </Typography>
        <Typography className="min-h-[100px]">
          {textSlice(summary, 210)}
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
