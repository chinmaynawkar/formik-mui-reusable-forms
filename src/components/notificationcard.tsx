import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import UpdateIcon from '@mui/icons-material/Update';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { grey } from '@mui/material/colors';

interface NotificationItem {
  icon: JSX.Element;
  message: string;
  time: string;
}

const notifications: NotificationItem[] = [
  {
    icon: <NotificationImportantIcon />,
    message: 'New product registered',
    time: 'Just now',
  },
  {
    icon: <NotificationImportantIcon />,
    message: 'A product was rejected',
    time: 'Just now',
  },
  {
    icon: <NotificationImportantIcon />,
    message: 'A product was approved',
    time: 'Just now',
  },
];

const activities: NotificationItem[] = [
  {
    icon: <UpdateIcon />,
    message: "There's a new activity",
    time: 'Just now',
  },
  {
    icon: <UpdateIcon />,
    message: 'A product was updated',
    time: 'Just now',
  },
];

const NotificationsCard: React.FC = () => {
  const renderItem = (item: NotificationItem) => (
    <ListItem>
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText
        primary={item.message}
        secondary={item.time}
      />
    </ListItem>
  );

  return (
    <Paper elevation={1} sx={{ maxWidth: 360, backgroundColor: grey[100] }}>
      <Typography variant="h6" component="div" sx={{ padding: 2 }}>
        Notifications
      </Typography>
      <List>
        {notifications.map((notification, index) => (
          <React.Fragment key={index}>
            {renderItem(notification)}
            {index < notifications.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
      <Typography variant="h6" component="div" sx={{ padding: 2 }}>
        Activity
      </Typography>
      <List>
        {activities.map((activity, index) => (
          <React.Fragment key={index}>
            {renderItem(activity)}
            {index < activities.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
};

export default NotificationsCard;
