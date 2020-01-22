import React, { useState, useEffect, useMemo } from "react";
import { MdNotifications } from "react-icons/md";
import { parseISO, formatDistance } from "date-fns";
import pt from "date-fns/locale/pt";

import api from "../../services/api";

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification
} from "./styles";

export default function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  // useMemo memoize a value and checks if this value has changed during render
  const hasUnread = useMemo(
    // find returns the item itself, but using !! before returns value as Boolean
    () => !!notifications.find(notification => notification.read === false),
    [notifications]
  );

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get("/notifications");

      const data = response.data.map(notification => ({
        ...notification,
        // formatted date ex: Há 3 dias
        timeDistance: formatDistance(
          parseISO(notification.createdAt),
          new Date(),
          { addSuffix: true, locale: pt }
        )
      }));
      setNotifications(data);
    }
    loadNotifications();
  }, []);

  const handleMarkAsRead = async id => {
    await api.put(`/notifications/${id}`);

    setNotifications(
      notifications.map(notification =>
        notification._id === id ? { ...notification, read: true } : notification
      )
    );
  };

  return (
    <Container>
      <Badge onClick={() => setVisible(!visible)} hasUnread={hasUnread}>
        <MdNotifications size={20} />
      </Badge>
      <NotificationList visible={visible}>
        <Scroll>
          {notifications &&
            notifications.map(notification => (
              <Notification key={notification._id} unread={!notification.read}>
                <p>{notification.content}</p>
                <time>{notification.timeDistance}</time>
                {!notification.read && (
                  <button
                    type="button"
                    onClick={() => handleMarkAsRead(notification._id)}
                  >
                    Marcar como lida
                  </button>
                )}
              </Notification>
            ))}
        </Scroll>
      </NotificationList>
    </Container>
  );
}
