import { NEXT_JS_COOL_SITES } from "../nextjsSiteList";

import { List, Typography } from '@mui/material';
import { ListItem } from '@mui/material';

export default function JSArticles() {
  return <List>
    {NEXT_JS_COOL_SITES.map(item => {
      return <ListItem>
        <a href={item.url}>
          <Typography
          color='primary'
          >
            {item.name}
          </Typography>
        </a>
      </ListItem>
    })}
  </List>
}