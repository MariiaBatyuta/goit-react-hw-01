import css from '../FriendListItem/FriendListItem.module.css';

export default function FriendListItem({ data: { avatar, name: friendName, isOnline } } ) {
    return (
        <>
            <img src={avatar} alt="Avatar" width="48" className={css.photo} />
            <p className={css.friendInfo}>{friendName}</p>
            <p className={isOnline ? css.friendInfo : css.isOffline}>{isOnline ? "Online" : "Offline"}</p>
        </>
    );
}